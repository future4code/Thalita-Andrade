export class User {
    constructor(
        private id: string,
        private name: string,
        private age: string,
        private email: string,
        private password: string,
        private photo: string,
        private dateOfBirth: Date
    ) { }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getAge(): string {
        return this.age
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getPhoto(): string {
        return this.photo
    }

    public getDateOfBirth(): Date {
        return this.dateOfBirth
    }
}