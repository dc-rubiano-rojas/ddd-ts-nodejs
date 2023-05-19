
import { AuthorEntity } from "./author.entity";

export interface AuthorRepository {
  findById(uuid: string): Promise<AuthorEntity | null>;
  registerAuthor(user: AuthorEntity): Promise<AuthorEntity | null>;
  listAuthor(): Promise<AuthorEntity[] | null>;
}