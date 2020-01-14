export class User {
    constructor(
        private email: string,
        private password: string,
        private id: string
    ) {}

    public getEmail() {
        return this.email
    }


    public getPassword() {
        return this.password
    }


    public getId() {
        return this.id
    }
}