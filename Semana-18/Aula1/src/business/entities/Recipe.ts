export class Recipe {

    constructor(
        private title: string,
        private description: string,
        private creationDate: Date = new Date(),
        private userId: string
    ) {}

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getCreationDate() {
        return this.creationDate
    }

    public getUserId() {
        return this.userId
    }
}