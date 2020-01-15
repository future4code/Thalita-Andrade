import { UserTokenGateway } from './../../gateways/auth/userTokenGateway';
import { UserGateway } from './../../gateways/user/userGateway';

export class GetLoggedUserInformationUC {
    constructor(
        private userTokenGateway: UserTokenGateway,
        private userGateway: UserGateway
    ) {}

    async execute(token: string): Promise<GetLoggedUserInformationOutput> {
        const userId = this.userTokenGateway.getUserIdFromToken(token)
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