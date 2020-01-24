import { Post } from './../business/entities/post';
import knex from 'knex';
import { FeedGateway } from './../business/gateways/feed/feedGateway';

interface PostModel {
    id: string,
    userId: string,
    photo: string,
    description: string,
    type: string,
    creation_date: string
}

export class FeedDatabase implements FeedGateway {
    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'thalita',
            password: 'bc72575c1f7a9679d22686119ff24124',
            database: 'thalita'
        }
    });

    async getPostFeedForUser(userId: string): Promise<Post[]> {
        
        const result = await this.connection.raw(`
        SELECT p.userId, p.photo, p.description, p.type, p.creation_date FROM users_relations rel
        JOIN Post p ON rel.followed_id=p.userId
        WHERE follower_id="${userId}";
        `)

        const postsFromDb: PostModel[] = result[0]

        return postsFromDb.map(post =>  new Post(post.userId, post.photo, post.description, post.type, new Date(post.creation_date)))
    }
}