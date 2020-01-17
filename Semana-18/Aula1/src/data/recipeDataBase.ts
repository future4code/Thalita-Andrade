import { Recipe } from './../business/entities/Recipe';
import { RecipeGateway } from './../business/gateways/recipe/recipeGateway';
import knex from 'knex';

export class RecipeDatabase implements RecipeGateway{
    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'thalita',
            password: 'bc72575c1f7a9679d22686119ff24124',
            database: 'thalita'
        }
    });

    async createRecipe(recipe: Recipe): Promise<Recipe> {

        const result = await this.connection.raw(`
        INSERT INTO Recipes (title, description, userId)
        VALUES ("${recipe.getTitle()}",
        "${recipe.getDescription()}",
        "${recipe.getUserId()}");
        `)
        
        return recipe
    }
}