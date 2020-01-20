import { User } from "../../entities/user";

export interface UserGateway {
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(user: User): Promise<void>
}