import knex from 'knex';
import { UserGateway } from '../business/gateways/userGateway';
import { User } from '../business/entities/user';

export class UserDatabase implements UserGateway {

    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-54-152-149-65.compute-1.amazonaws.com',
            user: 'thalita',
            password: process.env.PASSWORD_DB,
            database: 'thalita'
        }
    });

    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE id='${id}';`
        );

        const returnedUser = query[0][0];
        if (!returnedUser) {
            throw new Error("Usuário não encontrado");
        }

        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.age,
            returnedUser.email,
            returnedUser.password,
            returnedUser.photo,
            returnedUser.dateOfBirth
        );
    }

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE email='${email}';`
        );

        const returnedUser = query[0][0];
        if(!returnedUser) {
            throw new Error("Usuário não encontrado");
        }
        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.age,
            returnedUser.email,
            returnedUser.password,
            returnedUser.photo,
            returnedUser.dateOfBirth
        );
    }

    public async getAllUsers(): Promise<User[]> {
        const query = this.connection.raw("SELECT * FROM Users;");
        const usersFromDb = await query;
        return usersFromDb[0].map(
            (user: any) =>
                new User(user.id, user.name, user.age, user.email, user.password, user.photo, user.dateOfBirth)
        );
    }

    public async createUser(user: User): Promise<void> {
        await this.connection
        .insert({
            id: user.getId(),
            name: user.getName(),
            age: user.getAge(),
            email: user.getEmail(),
            password: user.getPassword(),
            photo: user.getPhoto(),
            date_of_birth: user.getDateOfBirth()
        })
        .into("Users");
    }

    async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE id='${id}';`
        );
        const returnedUser = query[0][0];

        return Boolean(returnedUser);
    }

}