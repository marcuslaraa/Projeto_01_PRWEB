import { ModalidadePaesRepository, modalidadePaesList } from '../repository/ModalidadePaesRepository'
import { EstoquePaesRepository } from '../repository/EstoquePaesRepository'
import { EstoquePaes } from '../model/EstoquePaes'
import { ModalidadePaesService } from './ModalidadePaesService'

export class EstoquePaesService {
  estoquePaesRepository: EstoquePaesRepository = new EstoquePaesRepository()

  insereEstoque(itemEstoque: EstoquePaes) {
    const { modalidadeId, quantidade, precoVenda } = itemEstoque

    if (!modalidadeId || !quantidade || !precoVenda) {
      throw new Error("Informações incompletas")
    }


    const existeModalidade = modalidadePaesList.find((modalidade) => modalidade.id === modalidadeId)
    if (existeModalidade) {
      this.estoquePaesRepository.insereEstoque(itemEstoque)
    } else {
      throw new Error("Modalidade não existe")
    }

    return itemEstoque

  }
}