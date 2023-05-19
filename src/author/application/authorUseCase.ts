import { AuthorRepository } from "../domain/author.repositry";
import { AuthorValue } from "../domain/author.value";

export class AuthorUseCase {
  constructor(private readonly authorRepository: AuthorRepository) { }

  public registerAuthor = async ({ name, email, rut }: Author) => {
    const authorValue = new AuthorValue({ name, email, rut });
    return await this.authorRepository.registerAuthor(authorValue);
  }

  public getAuthor = async (uuid: string) => {
    const author = await this.authorRepository.findById(uuid)
    return author
  }
}
