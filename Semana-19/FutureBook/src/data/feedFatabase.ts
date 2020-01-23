import { Post } from './../business/entities/post';
import knex from 'knex';
import { FeedGateway } from './../business/gateways/feed/feedGateway';

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
        
        
        
        
        return 'bla' as any
    }
}