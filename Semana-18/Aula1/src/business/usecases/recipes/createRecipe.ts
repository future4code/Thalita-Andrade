import { CreateRecipeInput } from './createRecipe';
import { UserGateway } from './../../gateways/user/userGateway';
import { Recipe } from '../../entities/Recipe';
import { RecipeGateway } from '../../gateways/recipe/recipeGateway';

export class CreateRecipeUC {
    constructor(
        private userGateway: UserGateway,
        private recipeGateway: RecipeGateway
    ) {

    }

    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput>{

        this.validateInput(input)

        await this.verifyUserExists(input.userId)

        const createdRecipe = await this.createRecipe(input)

        return {
            title: createdRecipe.getTitle(),
            description: createdRecipe.getDescription(),
            userId: createdRecipe.getUserId(),
            createdDate: createdRecipe.getCreationDate()
        }
    }
    validateInput(input: CreateRecipeInput){
        if(!input.title || !input.description || !input.userId){
            throw new Error("Alguma informação faltando")
        }
    }

    async verifyUserExists(userId: string) {
        const userExists = await this.userGateway.verifyUserExists(userId)

        if(!userExists) {
            throw new Error('Não é possível  criar uma receita para um usuário não existente')
        }
    }

    async createRecipe(input: CreateRecipeInput){
        const newRecipe = new Recipe(input.title, input.description, input.userId)

        return await this.recipeGateway.createRecipe(newRecipe)

    }
}

export interface CreateRecipeInput {
    title: string
    description: string
    userId: string
}

export interface CreateRecipeOutput {
    title: string
    description: string
    userId: string
    createdDate: Date
}