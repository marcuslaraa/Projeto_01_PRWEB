import { generateId } from '../utils/generateId'

export class EstoquePaes {
  _id: number
  _modalidadeId: number
  _quantidade: number
  _precoVenda: number

  constructor(modalidadeId: number, quantidade: number, precoVenda: number) {
    this._id = generateId()
    this._modalidadeId = modalidadeId
    this._quantidade = quantidade
    this._precoVenda = precoVenda
  }
}