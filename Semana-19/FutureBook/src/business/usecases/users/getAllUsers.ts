import { UserGateway } from './../../gateways/user/userGateway';

export class GetAllUsersUseCase {
    constructor(private userGateway: UserGateway) {}
    
    async execute(): Promise<GetAllUsersUseCaseOutput> {
        const users = await this.userGateway.getAllUsers();
        return {
            users: users.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
            }))
        };
    }
}

export interface GetAllUsersUseCaseOutput {
    users: UsersOfGetALlUsersUseCaseOutput[];
}

export interface UsersOfGetALlUsersUseCaseOutput {
    id: string;
    name: string;
    email: string;
}