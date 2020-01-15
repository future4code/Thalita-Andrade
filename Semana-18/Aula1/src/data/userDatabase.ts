import { UserGateway } from './../business/gateways/user/userGateway';
import knex from 'knex';
import { User } from '../business/entities/User';

export class UserDatabase implements UserGateway{
    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'teste',
            database: 'aulas_feed'
        }
    });

    public async getUserById(id: string): Promise<User>
}