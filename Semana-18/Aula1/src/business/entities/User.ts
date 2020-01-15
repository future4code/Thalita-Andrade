export class User {
    constructor(
        private email: string,
        private password: string,
        private id: string
    ) {}

    public getEmail(): string {
        return this.email
    }


    public getPassword(): string {
        return this.password
    }


    public getId(): string {
        return this.id
    }
}