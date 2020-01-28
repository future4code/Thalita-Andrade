import { GetAllUsersUseCase } from './../business/usecases/users/getAllUsers';
import { LoginUseCase } from './../business/usecases/auth/login';
import { JwtAuthService } from './../services/auth/jwtAuthService';
import { BcryptService } from './../services/crypt/bcryptService';
import { CreateUserUseCase } from './../business/usecases/users/createUser';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUserUC = new CreateUserUseCase(
            new UserDatabase(),
            new BcryptService(),
            new V4IdGenerator(),
            new JwtAuthService()
        );
        const result = await createUserUC.execute({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            dateOfBirth: req.body.dateOfBirth
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

app.post("/login", async (req: Request, res: Response) => {
    try {
        const loginUseCase = new LoginUseCase(
            new UserDatabase(),
            new BcryptService(),
            new JwtAuthService()
        )

        const result = await loginUseCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }
});

app.get("/getAllUsers", async (req: Request, res: Response) => {
    try {
        const getAllUsersUC = new GetAllUsersUseCase(new UserDatabase());
        const result = await getAllUsersUC.execute();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});

export default app 