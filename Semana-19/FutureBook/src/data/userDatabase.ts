import { UserGateway } from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user";
import knex from 'knex';

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
            `SELECT * FROM user_FutureBook WHERE id='${id}';`
        );

        const returnedUser = query[0][0];
        if (!returnedUser) {
            throw new Error("Usuário não encontrado");
        }

        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password
        );
    }

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM user_FutureBook WHERE email='${email}';`
        );

        const returnedUser = query[0][0];
        if(!returnedUser) {
            throw new Error("Usuário não encontrado");
        }
        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password
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
        .into("user_FutureBook");
    }

    async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM use_FutureBook WHERE id=${id};`
        );
        const returnedUser = query[0][0];

        return Boolean(returnedUser);
    }

    createUserRelation(followerId: string, followedId: string): Promise<void> {
        // await this.connection.raw(`
      
        // `

        // )
    }
 
}