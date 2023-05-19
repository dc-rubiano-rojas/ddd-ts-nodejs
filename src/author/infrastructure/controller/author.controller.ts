import { Request, Response } from "express";
import { AuthorUseCase } from "../../application/authorUseCase";

export class AuthorController {
  constructor(private userUseCase: AuthorUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
    this.getCtrl = this.getCtrl.bind(this)
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const user = await this.userUseCase.getAuthor(`${uuid}`);
    res.send({ user });
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerAuthor(body);
    res.send({ user });
  }
}