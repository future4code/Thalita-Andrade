import { GetLoggedUserInformationUC } from './../business/usecases/users/getLoggedUserInformation';
import { LoginUC } from './../business/usecases/auth/login';
import { CreateUserUC } from '../business/usecases/users/createUser';
import { GetAllUsersUC } from '../business/usecases/users/getAllUsers';
import express, { Request, Response } from 'express'
import { BcryptImplementation } from '../services/crypt/bcryptimplementation';
import { UserDatabase } from '../data/userDatabase';
import { JwtImplementation } from '../jwt/jwtimplementation';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/login", async (req: Request, res: Response) => {
    try {
        const loginUC = new LoginUC (
            new UserDatabase(),
            new BcryptImplementation(),
            new JwtImplementation()
        )
        const result = await loginUC.execute(
            req.body.email,
            req.body.password
        )
        res.status(200).send(result)

    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

app.get("/getMyInformation", async (req: Request, res: Response) => { 
    try {
        const getLoggedUserInformationUC = new GetLoggedUserInformationUC(
            new UserDatabase(),
            new JwtImplementation()
        )
        const result = await getLoggedUserInformationUC.execute()
        const token = req.header[]
    } catch( err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUserUC = new CreateUserUC(
            new UserDatabase(),
            new BcryptImplementation()
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

app.post("/changePassword", async (req: Request, res: Response) => { });

app.get("/getAllUsers", async (req: Request, res: Response) => {
    try {
        const getAllUsersUC = new GetAllUsersUC(new UserDatabase());

        const result = await getAllUsersUC.execute();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
});

export default app




























// import * as jwt from "jsonwebtoken";

// const example = async () => {
//     const jwtSecretKey:string = process.env.JWT_SECRET || "";

//     const userID = 'abcdef';

//     const token = jwt.sing (
//         {
//             userId
//         },
//         jwtSecretKey,
//         {}
//     );
    
//     const jwtData = jwt.verify (token, jwtSecretKey) as CustomJwtObject;
// };

// example();

// interface CustomJwtObject {
//     userId: string;
//     iat: number;
//     exp: number;
// }



