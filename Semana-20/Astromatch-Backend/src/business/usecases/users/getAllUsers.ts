import { UserGateway } from "../../gateways/userGateway";

export class GetAllUsersUseCase {
    constructor(private userGateway: UserGateway) {}
    
    async execute(): Promise<GetAllUsersUseCaseOutput> {
        const users = await this.userGateway.getAllUsers();
        return {
            users: users.map(user => ({
                id: user.getId(),
                name: user.getName(),
                age: user.getAge(),
                email: user.getEmail(),
                photo: user.getPhoto(),
                dateOfBirth: user.getDateOfBirth()
            }))
        };
    }
}

export interface GetAllUsersUseCaseOutput {
    users: UsersOfGetAllUsersUseCaseOutput[];
}

export interface UsersOfGetAllUsersUseCaseOutput {
    id: string;
    name: string;
    age: string;
    email: string;
    photo: string;
    dateOfBirth: Date
}