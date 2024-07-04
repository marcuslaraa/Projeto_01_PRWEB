import { VendaPaesService } from '../service/VendaPaesService'
import { Request, Response } from 'express'

const vendaPaesService = new VendaPaesService()

export function insereVenda(req: Request, res: Response) {
  try {
    const novaVenda = vendaPaesService.insereVenda(req.body)
    res.status(200).json({
      mensagem: "Novo item adicionado a venda",
      item: novaVenda
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}


export function listaVendas(req: Request, res: Response) {
  try {
    res.status(200).json(vendaPaesService.todasVendas())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}