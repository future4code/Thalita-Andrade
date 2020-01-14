import { AuthenticationGateway } from './../../gateways/auth/authenticationGateway';
import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';
import { UserGateway } from '../../gateways/user/userGateway';

export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private authenticationGateway: AuthenticationGateway
    ) {}

    async execute(email: string, password: string): Promise<LoginUCOutput> {
        
        const user = await this.userGateway.getUserByEmail(email)
        
        const isPasswordRight = await this.cryptographyGateway.compare(
            password,
            user.getPassword()
        )

        if(!isPasswordRight) {
            throw new Error ("Email or password is invalid")
        }

        const token = this.authenticationGateway.generateToken(user.getId().toString());

        return {
            token
        }
    }
}

interface LoginUCOutput {
    token: string;
}