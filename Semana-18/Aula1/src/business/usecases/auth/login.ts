import { UserTokenGateway } from './../../gateways/auth/userTokenGateway';
import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';
import { UserGateway } from './../../gateways/user/userGateway';

export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway, 
        private userTokenGateway: UserTokenGateway
        ){}

    async execute(input: LoginInput): Promise<LoginOutput> {
       
        const user =  await this.userGateway.getUserByEmail(input.email)

        console.log(user.getPassword())

        const verifyPassword = await this.cryptographyGateway.compare(input.password, user.getPassword())

        if(!verifyPassword) {
            throw new Error ("Senha inválida")
        } 

        return {
            token: this.userTokenGateway.generateToken(user.getId())
        }
    }
}

export interface LoginOutput {
    token: string
}

export interface LoginInput {
    email: string,
    password: string
}