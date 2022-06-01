export class Task {
    readonly id: number;
    title: string;
    description: string;
    status: boolean;
    startDate?: Date;
    endDate?: Date;
    givenPoints?: number;
}
