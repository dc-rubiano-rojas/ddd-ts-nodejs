import { AuthorEntity } from "../../domain/author.entity";
import { AuthorRepository } from "../../domain/author.repositry";
/**
 * MOCK!
 */

const MOCK_USER = {
    name: "Leifer",
    description: "hola",
    uuid: "000-000",
    rut: "12312313-1",
  };

export class MockRepository implements AuthorRepository {
  async findById(uuid: string): Promise<any> {
    return MOCK_USER

  }
  async registerAuthor(authorIn: AuthorEntity): Promise<any> {
    return MOCK_USER
  }
  async listAuthor(): Promise<any> {
    return [MOCK_USER, MOCK_USER, MOCK_USER]
  }
}