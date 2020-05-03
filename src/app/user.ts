export class User {
    constructor(
        public username: string,
        public password: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public gender: string,
        public dateofbirth: Date,
        public phone: number,
        public address: string
    ) {}
}
