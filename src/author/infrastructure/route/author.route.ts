import { Router } from "express";
import { AuthorUseCase } from "../../application/authorUseCase";
import { AuthorController } from "../controller/author.controller";
import { MockRepository } from '../repository/mock.repository'

const route = Router()
/**
 * Iniciar Repository
 */
const authorRepo = new MockRepository()

/**
 * Iniciamos casos de uso
 */

const authorUseCase = new AuthorUseCase(authorRepo)

/**
 * Iniciar User Controller
 */

const authorCtrl = new AuthorController(authorUseCase)

/**
 * 
 */

route.post(`/author`, authorCtrl.insertCtrl)
route.get(`/author`, authorCtrl.getCtrl)

export default route