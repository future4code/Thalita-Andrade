import { User } from "../entities/user";

export interface UserGateway {
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(user: User): Promise<void>;
}
