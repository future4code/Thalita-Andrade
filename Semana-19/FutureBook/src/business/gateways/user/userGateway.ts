import { User } from "../../entities/user";

export interface UserGateway {
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(user: User): Promise<void>;
    verifyUserExists(id: string): Promise<boolean>;
    createUserRelation(followerId: string, followedId: string): Promise<void>
    undoUserRelation(followerId: string, followedId: string): Promise<void>
}