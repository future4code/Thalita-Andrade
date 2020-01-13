import express, {Request, Response} from 'express'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string ) || "";
};

app.post("/login", async (req: Request, res: Response) => {});

app.get("/getMyInformation", async (req: Request, res: Response) => {});

app.post("/signup", async (req: Request, res: Response) => {});

app.post("/changePassword", async (req: Request, res: Response) => {});

app.get("/getAllUsers", async (req: Request, res: Response) => {
    try{
        const getAllUsersUC = new getAllUsersUC(new UserDatabase());

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



