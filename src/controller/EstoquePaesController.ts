import { Request, Response } from 'express'
import { EstoquePaesService } from '../service/EstoquePaesService'
import { ModalidadePaesService } from '../service/ModalidadePaesService'

const estoquePaesService = new EstoquePaesService()
const modalidadePaesService = new ModalidadePaesService()

export function insereEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoquePaesService.insereEstoque(req.body)
    res.status(200).json({
      mensagem: "Novo item adicionado ao estoque",
      item: novoEstoque
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}