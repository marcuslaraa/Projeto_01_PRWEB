import { Request, Response } from 'express'
import { ModalidadePaesService } from '../service/ModalidadePaesService'

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
    const modalidade = modalidadePaesService.consultarModalidade(req.params.id)
    if (modalidade) {
      res.status(200).json({
        mensagem: "Modalidade encontrada com sucesso!",
        modalidade: modalidade
      })
      return true
    } else {
      res.status(400).json({ mensagem: "Modalidade não encontrada" })
    }
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })

  }
}

export function listaModalidades(req: Request, res: Response) {
  try {
    res.status(200).json(modalidadePaesService.todasModalidade())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}

export function deletarModalidade(req: Request, res: Response) {
  try {
    const modalidade = modalidadePaesService.consultarModalidade(req.params.id)
    if (modalidade) {
      modalidadePaesService.deletarModalidade(req.params.id)
      res.status(202).json({
        mensagem: "Modalidade excluida com sucesso!",
        modalidadeDeletada: modalidade
      })
    } else {
      res.status(400).json({ mensagem: "Modalidade não encontrada" })
    }
  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}

export function atualizarModalidade(req: Request, res: Response) {
  try {
    const novaModalidade = modalidadePaesService.atualizarModalidade(req.body)
    res.status(200).json({
      mensagem: "Modalidade atualizada com sucesso!!!",
      novaModalidade: novaModalidade
    })

  } catch (error: any) {
    res.status(400).json({ mensagem: error.mensagem })
  }
}
