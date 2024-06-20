import { Request, Response } from 'express'
import { ModalidadePaesService } from '../service/ModalidadePaesService'
import { ModalidadePaes } from '../model/ModalidadePaes'

const modalidadePaesService = new ModalidadePaesService()

export function cadastrarModalidade(req: Request, res: Response) {
  try {
    const novaModalidade = modalidadePaesService.cadastrarModalidade(req.body)
    res.status(201).json({
      mensagem: "Modalidade adicionada com sucesso!",
      modalidade: novaModalidade
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}

export function consultarModalidade(req: Request, res: Response) {
  try {
    const modalidade = modalidadePaesService.consultarModalidade(req.query.id)
    if (modalidade) {
      res.status(200).json({
        mensagem: "Modalidade encontrada com sucesso!",
        modalidade: ModalidadePaes
      })
    } else {
      res.status(400).json({ mensagem: "Modalidade não encontrada" })
    }
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })

  }
}