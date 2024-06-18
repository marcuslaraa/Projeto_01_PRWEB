import { generateId } from '../utils/generateId'
import { ItemVenda } from './ItemVenda'

export class VendaPaes {
  _Id: number
  _cpfCliente: string
  _valorTotal: number = 0
  _itensComprados: Array<ItemVenda> = []

  constructor(cpfCliente: string) {
    this._Id = generateId()
    this._cpfCliente = cpfCliente
  }
}