import { VendaPaes } from '../model/VendasPaes'

const vendaPaesList: VendaPaes[] = []


export class VendaPaesRepository {
  insereVenda(venda: VendaPaes) {
    vendaPaesList.push(venda)
  }

  filtrarTodasVendas(): VendaPaes[] {
    return vendaPaesList
  }
}