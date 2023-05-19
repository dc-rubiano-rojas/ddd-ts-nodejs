import { v4 as uuid } from "uuid";
import { AuthorEntity } from "./author.entity";

export class AuthorValue implements AuthorEntity {
    uuid: string;
    name: string;
    email: string;
    rut: string;

    constructor({ name, email, rut }: Author) {
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.rut = rut ?? "default";
    }
}