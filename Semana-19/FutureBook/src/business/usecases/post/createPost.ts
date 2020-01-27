import { Post } from './../../entities/post';
import { CreatePostInput } from './createPost';
import { PostGateway } from './../../gateways/post/postGateway';
import { UserGateway } from './../../gateways/user/userGateway';

export class CreatePostUseCase {
    constructor(
        private userGateway: UserGateway,
        private postGateway: PostGateway
    ) {}

    async execute(input: CreatePostInput): Promise<CreatePostOutput> {
        this.validateInput(input)

        await this.verifyUserExists(input.userId)

        const createdPost = await this.createPost(input)

        return {
            userId: createdPost.getUserId(),
            photo: createdPost.getPhoto(),
            description: createdPost.getDescription(),
            type: createdPost.getType(),
            createdDate: createdPost.getCreationDate()
        }
    }

    validateInput(input: CreatePostInput) {
        if(!(input.userId && input.photo && input.description && input.type)) {
            throw new Error("Você não preencheu todos os campos")
        }
    }

    async verifyUserExists(userId: string) {
        const userExists = await this.userGateway.verifyUserExists(userId)

        if(!userExists) {
            throw new Error("Usuário inexistente, devido a isso, não é possível criar um post")
        }
    }

    createPost(input: CreatePostInput) {
        const newPost = new Post(input.userId, input.photo, input.description, input.type)

        return this.postGateway.createPost(newPost)
    }
}

export interface CreatePostInput {
    userId: string
    photo: string
    description: string
    type: string
}

export interface CreatePostOutput {
    userId: string,
    photo: string
    description: string
    type: string
    createdDate: Date
}

