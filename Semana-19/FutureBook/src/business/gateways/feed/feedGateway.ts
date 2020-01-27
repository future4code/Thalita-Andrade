import { Post } from './../../entities/post';

export interface FeedGateway {
    getPostFeedForUser(userId: string): Promise<Post[]>
}