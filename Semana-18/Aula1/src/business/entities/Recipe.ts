export class Recipe {
    private title: string
    private description: string
    private creationDate: Date
    private userId: string

    constructor(title: string, description: string, creationDate: Date = new Date(), userId: string) {
        this.title: title
        this.description: description
        this.creationDate: creationDate
        this.userId: userId
    }

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