import { FeedGateway } from './../../gateways/feed/feedGateway';

export class GetFeedUseCase {
    constructor(private feedGateway: FeedGateway) {}

    execute(input: GetFeedInput) {
        return this.feedGateway.getPostFeedForUser(input.userId)
    }
}

export interface GetFeedInput {
    userId: string
}
