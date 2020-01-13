import { CryptographyGateway } from './../../business/gateways/crypt/cryptographyGateway';
import * as bcrypt from "bcrypt";

export class BcryptImplementation implements CryptographyGateway {
    
    private static BCRYPT_SALT_ROUNDS: 10
    
    async encrypt(word: string): Promise<string> {
        const salt = bcrypt.genSalt(BcryptImplementation.BCRYPT_SALT_ROUNDS);

        const encryptWord = await bcrypt.hash(
            word,
            salt
        )
        return encryptWord;
    }
}