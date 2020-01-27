import { FeedGateway } from './../../gateways/feed/feedGateway';

export class GetFeedUseCase {
    constructor(private feedGateway: FeedGateway) {}

    async execute(input: GetFeedInput): Promise<GetFeedOutput> {
        const posts = await this.feedGateway.getPostFeedForUser(input.userId)

        return {
            posts: posts.map((post) => ({
                photo: post.getPhoto(),
                description: post.getDescription()
            }))
        }
    }
}

export interface GetFeedInput {
    userId: string
}

export interface GetFeedOutput {
    posts: Array<{
        photo: string,
        description: string,
    }>
}
