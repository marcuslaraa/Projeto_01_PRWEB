import { VendaPaes } from './VendasPaes'

export class ItemVenda {
  estoquePaesId: number
  quantidade: number

  constructor(estoquePaesId: number, quantidade: number) {
    this.estoquePaesId = estoquePaesId
    this.quantidade = quantidade
  }
}