import knex from 'knex';
import { UserGateway } from './../business/gateways/user/userGateway';
import { User } from '../business/entities/User';

export class UserDatabase implements UserGateway{
    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'thalita',
            password: 'bc72575c1f7a9679d22686119ff24124',
            database: 'thalita'
        }
    });

    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw (
            `SELECT * FROM Users WHERE id='${id}';`
        );

        const returnedUser = query [0][0];
        if (!returnedUser) {
            throw new Error("User norFound");
        }

        return new User(
            returnedUser.id,
            returnedUser.email,
            returnedUser.password
        );
    }

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE email='${email}';`
        );

        const returnedUser = query[0][0];
        if(!returnedUser) {
            throw new Error("User not found");
        }
        return new User(
            returnedUser.id,
            returnedUser.email,
            returnedUser.password
        );
    }

    public async getAllUsers(): Promise<User[]> {
        const query = this.connection.raw("SELECT * FROM Users;");
        const usersFromDb = await query;
        return usersFromDb[0].map(
            (user: any) =>
                new User(user.id, user.email, user.password)
        );
    }

    public async createUser(user: User): Promise<void> {
        await this.connection
        .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        .into("Users");
    }

    public async updatePassword(id: string, newPassword: string): Promise<void> {
        await this.connection.raw(
            `UPDATE Users SET password='${newPassword}' WHERE id=${id};`
        );
    }
}