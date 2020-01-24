import { CryptographyGateway } from '../../business/gateways/crypt/cryptographyGateway';
import * as bcrypt from "bcrypt";

export class BcryptService implements CryptographyGateway {
    
    private static BCRYPT_SALT_ROUNDS: 10
    
    async encrypt(word: string): Promise<string> {
        const salt = await bcrypt.genSalt(BcryptService.BCRYPT_SALT_ROUNDS);

        const encryptWord = await bcrypt.hash(
            word,
            salt
        )
        return encryptWord;
    }

    async compare(word: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(word, hash)
    }
}