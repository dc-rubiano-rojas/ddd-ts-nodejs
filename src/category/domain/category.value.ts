import { v4 as uuid } from "uuid";
import { CategoryEntity } from "./category.entity";

export class CategoryValue implements CategoryEntity {
    uuid: string;
    name: string;
    description: string;

    constructor({ name, description }: Category) {
        this.uuid = uuid();
        this.name = name;
        this.description = description ?? "default";
    }
}