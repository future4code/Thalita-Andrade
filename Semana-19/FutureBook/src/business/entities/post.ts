export class Post {
    constructor(
        private userId: string,
        private photo: string,
        private description: string,
        private type: string,
        private creationDate: Date = new Date()
    ) {}

    public getUserId() {
        return this.userId
    }

    public getPhoto() {
        return this.photo
    }

    public getDescription() {
        return this.description
    }

    public getCreationDate() {
        return this.creationDate
    }

    public getType() {
        return this.type
    }
}


