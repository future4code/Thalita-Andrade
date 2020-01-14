import { User } from '../../entities/User';

export interface UserGateway {
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUserTable(): Promise <void>;
    createUser(user: User): Promise <void>;
    updatePassword(id: number, newPassword: string): Promise<void>;
}