import { generateId } from '../utils/generateId'
import { ItemVenda } from './ItemVenda'

export class VendaPaes {
  id: number
  cpfCliente: string
  valorTotal: number
  itensVenda: Array<ItemVenda> = []

  constructor(cpfCliente: string, itensVenda: ItemVenda[], valorTotal: number ) {
    this.id = generateId()
    this.cpfCliente = cpfCliente
    this.valorTotal =  valorTotal
    this.itensVenda = itensVenda
  }

}