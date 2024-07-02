import { modalidadePaesList } from '../repository/ModalidadePaesRepository'
import { EstoquePaesRepository, estoquePaesList } from '../repository/EstoquePaesRepository'
import { EstoquePaes } from '../model/EstoquePaes'

export class EstoquePaesService {
  estoquePaesRepository: EstoquePaesRepository = new EstoquePaesRepository()

  insereEstoque(itemEstoque: EstoquePaes) {
    const { modalidadeId, quantidade, precoVenda } = itemEstoque

    if (!modalidadeId || !quantidade || !precoVenda) {
      throw new Error("Informações incompletas")
    }


    const novoEstoque = new EstoquePaes(modalidadeId, quantidade, precoVenda)
    const existeModalidade = modalidadePaesList.find((modalidade) => modalidade.id === modalidadeId)
    const existeEstoque = estoquePaesList.find((estoque) => estoque.modalidadeId === modalidadeId)
    if (existeModalidade && !existeEstoque) {
      this.estoquePaesRepository.insereEstoque(novoEstoque)
    } else {
      throw new Error("Modalidade não existe")
    }

    return novoEstoque

  }

  todosEstoques() {
    return this.estoquePaesRepository.filtrarTodosEstoque()
  }

  consultarEstoque(id: any): EstoquePaes | undefined {
    const idNumber: number = parseInt(id, 10)
    return this.estoquePaesRepository.filtrarEstoquePorId(idNumber)
}

deletarQuantidadeEstoque(estoqueData: EstoquePaes) {
  const { id, modalidadeId, quantidade, precoVenda } = estoqueData

  if(!id || !modalidadeId || !quantidade || !precoVenda) {
    throw new Error("Informaçãoes incompletas")
  }

  let estoqueEncontrado = this.consultarEstoque(id)
  if(estoqueEncontrado) {
    if(estoqueEncontrado.id < quantidade) {
      throw new Error("Quantidade informada é superior ao que existe em estoque.")
    } else {
      estoqueEncontrado.quantidade -= quantidade
      this.estoquePaesRepository.atualizaEstoque(estoqueEncontrado)
    }
  } else {
    throw new Error("Estoque não encontrado!!!")
  }

  return estoqueEncontrado

}


  atualizarEstoque(estoqueData: EstoquePaes) {
    const { id, modalidadeId, quantidade, precoVenda } = estoqueData

    if(!id || !modalidadeId || !quantidade || !precoVenda) {
      throw new Error("Informaçãoes incompletas")
    }

    let estoqueEncontrado = this.consultarEstoque(id)
    if(estoqueEncontrado) {
      estoqueEncontrado.quantidade += quantidade
      this.estoquePaesRepository.atualizaEstoque(estoqueEncontrado)
    } else {
      throw new Error("Estoque não encontrado!!!")
    }

    return estoqueEncontrado

  }
}