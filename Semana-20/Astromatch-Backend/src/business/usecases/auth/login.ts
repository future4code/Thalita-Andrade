import { CryptographyGateway } from './../../gateways/cryptography/cryptography';
import { UserGateway } from '../../gateways/userGateway';
import { UserTokenGateway } from '../../gateways/auth/userTokenGateway';

export class LoginUseCase {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private userTokenGateway: UserTokenGateway
    ) {}
    
    async execute(input: LoginInput): Promise<LoginOutput> {

        const user = await this.userGateway.getUserByEmail(input.email);

        const verifyPassword = await this.cryptographyGateway.compare(input.password, user.getPassword());

        if(!verifyPassword){
            throw new Error("Senha ou email inválido")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId())
        }
    }
}

export interface LoginInput {
    email: string,
    password: string
}

export interface LoginOutput {
    token: string
}