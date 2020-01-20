import { IdGeneratorGateway } from './../gateways/user/idGeneratorGateway';
import { CryptographyGateway } from './../gateways/crypt/cryptographyGateway';
import { UserGateway } from './../gateways/user/userGateway';
import { User } from '../entities/user';

export class CreateUserUseCase{
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway
    ) {}

    async execute(input: CreateUserUseCaseInput): Promise <CreateUserUseCaseOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(
            input.password
        );

        const user = new User(
            this.idGeneratorGateway.generateId(),
            input.email,
            encryptedPassword,
        )

        try {
            await this.userGateway.createUser(user)
        } catch (err) {
            throw new Error("Um erro ocorreu")
        }

        return {
            message: "Usuário criado com sucesso"
        }
    }
}

export interface CreateUserUseCaseInput {
    name: string,
    email: string;
    password: string;
}

export interface CreateUserUseCaseOutput {
    message: string;
}