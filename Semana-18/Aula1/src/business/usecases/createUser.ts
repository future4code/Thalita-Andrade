import { CryptographyGateway } from './../gateways/crypt/cryptographyGateway';
import { User } from './../entities/User';
import { UserGateway } from '../gateways/user/UserGateway';

export class CreateUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway
        ) {}

    async execute(input: CreateUserUCInput): Promise<void> {
        const encryptedPassword = this.cryptographyGateway.encrypt(input.password)
        
        await this.userGateway.createUser(new User(
            input.email,
            encryptedPassword
        ))
        return {
            message: "User created sucessfully"
        }
    }
}

export interface CreateUserUCInput {
    email: string;
    password: string;
}

export interface CreateUserUCOutput {
    message: string;
}