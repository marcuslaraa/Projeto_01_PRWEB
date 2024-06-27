import { generateId } from '../utils/generateId'

export class EstoquePaes {
  id: number
  modalidadeId: number
  quantidade: number
  precoVenda: number

  constructor(modalidadeId: number, quantidade: number, precoVenda: number) {
    this.id = generateId()
    this.modalidadeId = modalidadeId
    this.quantidade = quantidade
    this.precoVenda = precoVenda
  }
}