import { CreateUserUCOutput } from './createUser';
import { CryptographyGateway } from '../../gateways/crypt/cryptographyGateway';
import { User } from '../../entities/User';
import { UserGateway } from '../../gateways/user/userGateway';
import { IdGenerator } from '../../gateways/auth/idGenerator';

export class CreateUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGenerator: IdGenerator
    ) { }

    async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(
            input.password
        );

        const user = new User(
            this.idGenerator.generateId(),
            input.email,
            encryptedPassword
        );
        try {
            await this.userGateway.createUser(user)
        } catch (err) {}
        
    
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