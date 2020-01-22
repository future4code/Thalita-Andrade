import { UserGateway } from './../../gateways/user/userGateway';

export class UnfollowUserUseCase {
    constructor(private userGateway: UserGateway) {}

    async execute(input: UnfollowUserInput){
       await this.verifyUserExists(input)

       await this.userGateway.undoUserRelation(input.followerId, input.followedId)
    }

    async verifyUserExists(input: UnfollowUserInput) {
        await Promise.all([
            this.userGateway.verifyUserExists(input.followerId),
            this.userGateway.verifyUserExists(input.followedId)
        ])
    }
}

export interface UnfollowUserInput {
    followerId: string,
    followedId: string
}