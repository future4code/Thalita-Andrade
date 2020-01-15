import { UserGateway } from './../../gateways/user/userGateway';
import { UserTokenGateway } from './../../gateways/auth/userTokenGateway';
import { CryptographyGateway } from './../../gateways/crypt/cryptographyGateway';

export class LoginUC {
    constructor(
        private userTokenGateway: UserTokenGateway,
        private cryptographyGateway: CryptographyGateway,
        private userGateway: UserGateway
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

        const token = this.userTokenGateway.generateToken(user.getId().toString());

        return {
            token
        }
    }
}

interface LoginUCOutput {
    token: string;
}