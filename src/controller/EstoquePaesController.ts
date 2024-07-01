import { Request, Response } from 'express'
import { EstoquePaesService } from '../service/EstoquePaesService'

export const estoquePaesService = new EstoquePaesService()

export function consultarEstoque(req: Request, res: Response) {
  try {
    const estoque = estoquePaesService.consultarEstoque(req.params.id)
    if (estoque) {
      res.status(200).json({
        mensagem: "Estoque encontrado com sucesso!",
        itemEstoque: estoque
      })
      return true
    } else {
      res.status(400).json({ mensagem: "Estoque não encontrado" })
    }
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })

  }
}

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
export function listaEstoques(req: Request, res: Response) {
  try {
    res.status(200).json(estoquePaesService.todosEstoques())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }

}
export function atualizarEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoquePaesService.atualizarEstoque(req.body)
    res.status(200).json({
      mensagem: "Quantidade atualizada com sucesso!!!",
      novoEstoque: novoEstoque
    })

  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}

export function deletarQuantidadeEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoquePaesService.deletarQuantidadeEstoque(req.body)
    res.status(200).json({
      mensagem: "Quantidade atualizada com sucesso!!!",
      novoEstoque: novoEstoque
    })

  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}