import { UserTokenGateway } from './../../gateways/auth/userTokenGateway';
import { IdGeneratorGateway } from '../../gateways/auth/idGeneratorGateway';
import { CryptographyGateway } from '../../gateways/crypt/cryptographyGateway';
import { UserGateway } from '../../gateways/user/userGateway';
import { User } from '../../entities/user';

export class CreateUserUseCase{
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private userTokenGateway: UserTokenGateway
    ) {}

    async execute(input: CreateUserUseCaseInput): Promise <CreateUserUseCaseOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(
            input.password
        );

        const user = new User(
            this.idGeneratorGateway.generateId(),
            input.name,
            input.email,
            encryptedPassword,
        )

        try {
            await this.userGateway.createUser(user)
            
        } catch (err) {
            console.log(err)
            throw new Error("Um erro ocorreu")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId()),
            message: "Usuário criado com sucesso"
        }
    }
}

export interface CreateUserUseCaseInput {
    name: string,
    email: string,
    password: string
}

export interface CreateUserUseCaseOutput {
    token: string,
    message: string
}