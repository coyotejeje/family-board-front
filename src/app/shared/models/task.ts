export class Task {
    readonly id: number;
    title: string;
    description: string;
    status: boolean;
    startDate?: Date;
    endDate?: Date;
    givenPoints?: number;

    constructor(id: number, title: string, description: string, status: boolean, startDate?: Date, endDate?: Date, givenPoints?: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.givenPoints = givenPoints;
    }
}