import { CreateUserUseCase } from './../business/usecases/users/createUser';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { BcryptService } from '../services/cryptography/bcryptService';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUserUC = new CreateUserUseCase(
            new UserDatabase(),
            new BcryptService(),
            new V4IdGenerator()
        );
        const result = await createUserUC.execute({
            name: req.body.name,
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

export default app