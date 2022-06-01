export class User {
    readonly id: number
    firstName: string
    lastName?: string
    email: string
    phone?: string
    birthDate?: Date
    password?: string
    primaryImage?: string

    /*
    constructor(id: number, firstName: string, lastName: string, email: string, phone: string, birthDate: Date, password: string, primaryImage: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
        this.password = password;
        this.primaryImage = primaryImage;
    }
    */
}