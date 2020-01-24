import { RecipeDatabase } from './../data/recipeDataBase';
import { CreateRecipeUC, CreateRecipeInput } from './../business/usecases/recipes/createRecipe';
import { GetLoggedUserInformationUC } from './../business/usecases/users/getLoggedUserInformation';
import { LoginUC } from './../business/usecases/auth/login';
import { CreateUserUC } from '../business/usecases/users/createUser';
import { GetAllUsersUC } from '../business/usecases/users/getAllUsers';
import express, { Request, Response, response } from 'express'
import { BcryptService } from '../services/cryptography/bcryptService';
import { UserDatabase } from '../data/userDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { JwtAuthService } from '../services/auth/jwtAuthService';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/login", async (req: Request, res: Response) => {
    try{
        const loginUC = new LoginUC(
            new UserDatabase(),
            new BcryptService(),
            new JwtAuthService()
        )

        const result = await loginUC.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)

    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
});

app.get("/getMyInformation", async (req: Request, res: Response) => { 
    try {
        const getLoggedUserInformationUC = new GetLoggedUserInformationUC(
            new JwtAuthService(),
            new UserDatabase()
        )
        const token = getTokenFromHeaders(req.headers)
        const result = await getLoggedUserInformationUC.execute(token)
            res.send(result).status(200)
    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUserUC = new CreateUserUC(
            new UserDatabase(),
            new BcryptService(),
            new V4IdGenerator()
        );
        const result = await createUserUC.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

app.post("/recipes",  async(req: Request, res: Response) => {
    try {

        const authService = new JwtAuthService()

        const userId = authService.getUserIdFromToken(getTokenFromHeaders(req.headers))

        const useCase = new CreateRecipeUC(
            new UserDatabase(),
            new RecipeDatabase()
        )

        const input: CreateRecipeInput = {
            title: req.body.title,
            description: req.body.description,
            userId
        }
        
        const result = await useCase.execute(input)

        res.status(200).send(result);

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
})

// app.post("/changePassword", async (req: Request, res: Response) => { 
//     try {
//         const chenagePasswordUC = new ChangeUserPasswordUC(
//             new JwtAuthService(),
//             new UserDatabase(),
//             new BcryptService()
//         );
//         const result = await chenagePasswordUC.execute({
//             token: getTokenFromHeaders(req.headers),
//             oldPassword: req.body.oldPassword,
//             newPassword: req.body.newPassword
//         });
//         res.status(200).send(result);
//     } catch(err) {
//         res.status(400).send({
//             errorMessage: err.message
//         });
//     }
// });

// app.get("/getAllUsers", async (req: Request, res: Response) => {
//     try {
//         const getAllUsersUC = new GetAllUsersUC();

//         const result = await getAllUsersUC.execute();
//         res.status(200).send(result);
//     } catch (err) {
//         res.status(400).send({
//             erroMessage: err.message
//         });
//     }
// });

export default app
