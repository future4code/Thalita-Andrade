import { User } from '../../entities/User';

export interface UserGateway {
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(user: User): Promise <void>;
    updatePassword(id: string, newPassword: string): Promise<void>;
}