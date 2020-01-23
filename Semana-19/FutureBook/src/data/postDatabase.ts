import { Post } from './../business/entities/post';
import knex from 'knex';
import { PostGateway } from './../business/gateways/post/postGateway';

export class PostDatabase implements PostGateway{

    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'thalita',
            password: 'bc72575c1f7a9679d22686119ff24124',
            database: 'thalita'
        }
    });

    getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]

    async createPost(post: Post): Promise<Post> {

        const result = await this.connection.raw(`
        INSERT INTO Post (userId, photo, description, type, creation_date)
        VALUES ("${post.getUserId()}",
        "${post.getPhoto()}",
        "${post.getDescription()}",
        "${post.getType()}",
        "${this.getSQLDateFromTSDate(post.getCreationDate())}");
        `)
        return post
    }
}