import knex from 'knex';
import { UserGateway } from '../business/gateways/userGateway';
import { User } from '../business/entities/user';

export class UserDatabase implements UserGateway {

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
            email: user.getEmail(),
            password: user.getPassword()
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