import { FeedDatabase } from './../data/feedFatabase';
import { FeedGateway } from './../business/gateways/feed/feedGateway';
import { PostDatabase } from './../data/postDatabase';
import { CreatePostInput, CreatePostUseCase } from './../business/usecases/post/createPost';
import { GetAllUsersUseCase } from './../business/usecases/users/getAllUsers';
import { UserGateway } from './../business/gateways/user/userGateway';
import { FollowUserUseCase, FollowUserInput } from './../business/usecases/users/followUser';
import { JwtAuthService } from './../services/auth/jwtAuthService';
import { LoginUseCase } from './../business/usecases/auth/login';
import { CreateUserUseCase } from './../business/usecases/users/createUser';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { BcryptService } from '../services/cryptography/bcryptService';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';
import { UnfollowUserUseCase, UnfollowUserInput } from '../business/usecases/users/unfollowUser';
import { GetFeedUseCase, GetFeedInput } from '../business/usecases/feed/getFeed';


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

function authenticate(req: Request) {
    const jwtAuthService = new JwtAuthService()

    return jwtAuthService.getUserIdFromToken(getTokenFromHeaders(req.headers))
}

app.post("/users/follow", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)
       
        const useCase = new FollowUserUseCase(
            new UserDatabase()
        )

        const input: FollowUserInput = {
            followerId: userId,
            followedId: req.body.userToFollow
        }

        await useCase.execute(input)
        
        res.status(200).send({
            message: "Usuários seguido com sucesso"
        });

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }
});

app.delete("/users/unfollow", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)

        const useCase = new UnfollowUserUseCase(
            new UserDatabase()
        )

        const input: UnfollowUserInput = {
            followerId: userId,
            followedId: req.body.userToUnfollow
        }

        await useCase.execute(input)

        res.status(200).send({
            message: "Você parou de seguir esse usuário"
        });

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }
})

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

app.post("/post", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)

        const useCase = new CreatePostUseCase(
            new UserDatabase(),
            new PostDatabase()
        )

        const input: CreatePostInput = {
            userId,
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type
        }

        const result = await useCase.execute(input)
        res.status(200).send(result);

    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
})

app.get("/feed", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)

        const useCase = new GetFeedUseCase(
            new FeedDatabase()
        )

        const input: GetFeedInput = {
            userId
        }

        const result = await useCase.execute(input)

        res.status(200).send(result);
    } catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
})

export default app 