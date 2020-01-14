import * as jwt from "jsonwebtoken";
import { AuthenticationGateway } from './../business/gateways/auth/authenticationGateway';

export class JwtImplementation implements AuthenticationGateway {
    private static EXPIRES_IN = "1h"
    private getJwtSecretKey(): string {
        if(!process.env.JWT_SECRET){
            throw new Error("Missing JWT secret key")
        }
        return process.env.JWT_SECRET
    }
    
    generateToken(userId: string): string {

        const token = jwt.sign(
            { userId },
            this.getJwtSecretKey(), { 
                expiresIn: JwtImplementation.EXPIRES_IN
            });
    }
    getUserIdFromToken(token: string): string {
        const jwtData = jwt.verify(token, this.getJwtSecretKey()) as JwtData
        return jwtData.userId
    }
}

interface JwtData {
    userId: string
    iat: number
    exp: number
}