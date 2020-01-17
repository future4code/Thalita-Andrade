import { UserGateway } from './../../gateways/user/userGateway';
import { CreateRecipeUC } from './createRecipe';
import { RecipeGateway } from '../../gateways/recipe/recipeGateway';
import { Recipe } from '../../entities/Recipe';

describe("Test createRecipe useCase", () => {
    it("Should create a recipe", async () => {

        const userGateway: UserGateway = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true),
        }

        const input = {description: "Teste descrição", title: "Teste Titulo", userId:"1"}

        const recipeGateway: RecipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
        }

        const usecase = new CreateRecipeUC(userGateway, recipeGateway)

        const response = await usecase.execute(input)

        expect(response.userId).toBe('1')

        expect(response.title).toBe('Teste Titulo')
    } )

    it("Should throw error if input is incomplete", async () => {

        const userGateway: UserGateway = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true),
        }

        const input = {description: "Teste descrição", title: "", userId:"1"}

        const recipeGateway: RecipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
        }

        const usecase = new CreateRecipeUC(userGateway, recipeGateway)

        await expect(usecase.execute(input)).rejects.toThrowError('Alguma informação faltando')
    } )
})