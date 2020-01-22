import { UserGateway } from './../../gateways/user/userGateway';

export class FollowUserUseCase {
    constructor( private userGateway: UserGateway){}

    async execute(input: FollowUserInput) {
        await this.verifyUserExists(input)

        await this.userGateway.createUserRelation(input.followerId, input.followedId)
    }

    async verifyUserExists(input: FollowUserInput) {
        await Promise.all([
            this.userGateway.verifyUserExists(input.followedId),
            this.userGateway.verifyUserExists(input.followerId)
        ])
    }
}

export interface FollowUserInput {
    followerId: string, 
    followedId: string
}