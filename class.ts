import chalk from 'chalk';

class user {
    #id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    set userId(id: number) {
        this.#id = id;
    }

    get userId(): number {
        return this.#id;
    }

    printUser(): string {
        return `${this.name} lives at ${this.address}`;
    }
}

class admin extends user {

    pass: string;

    constructor(id: number, name: string, address: string, pass: string) {

        super(id, name, address);
        this.pass = pass;

    }

    printAdmin() {
        return `${this.printUser()} and password is ${this.pass}`;
    }

}

let saad = new user(1, 'saad', 'faisalabad');
let umair = new admin(2, 'umair', 'fsd', 'raza');
let password = saad.printUser();
let data = umair.printAdmin();
saad.userId = 100;

console.log(chalk.blueBright.bgGreenBright(data));
