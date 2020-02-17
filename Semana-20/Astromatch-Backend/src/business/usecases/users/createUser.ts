import { CryptographyGateway } from './../../gateways/cryptography/cryptography';
import { IdGeneratorGateway } from './../../gateways/auth/idGeneratorGateway';
import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { UserGateway } from '../../gateways/userGateway';
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
            input.age,
            input.email,
            encryptedPassword,
            input.photo,
            input.dateOfBirth
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
    age: string,
    email: string,
    password: string,
    photo: string,
    dateOfBirth: Date
}

export interface CreateUserUseCaseOutput {
    token: string,
    message: string
}