import { UserGateway } from './../../gateways/user/userGateway';
import { AuthenticationGateway } from './../../gateways/auth/authenticationGateway';

export class GetLoggedUserInformationUC {
    constructor(
        private authenticationGateway: AuthenticationGateway,
        private userGateway: UserGateway
    ) {}

    async execute(token: string): Promise<GetLoggedUserInformationOutput> {
        const userId = this.authenticationGateway.getUserIdFromToken(token)
        const user = await this.userGateway.getUserById(userId)
        return {
            id: user.getId(),
            email: user.getEmail()
        }
    }  
}

export interface GetLoggedUserInformationOutput {
    id: string;
    email: string
}