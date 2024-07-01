import { VendaPaes } from '../model/VendasPaes'
import { estoquePaesList } from '../repository/EstoquePaesRepository'
import { VendaPaesRepository } from '../repository/VendaPaesRepository';
import { EstoquePaesService } from './EstoquePaesService'


export class VendaPaesService {
  vendaPaesRepository = new VendaPaesRepository()
  estoquePaesService = new EstoquePaesService()

  insereVenda(venda: VendaPaes) {
   const {cpfCliente, itensVenda} = venda
   if(!cpfCliente || !itensVenda) {
    throw new Error("Itens inválidos")
   }
   const estoquePaesId = itensVenda[0].estoquePaesId
   const existeEstoque = this.estoquePaesService.consultarEstoque(estoquePaesId)
  //  if(existeEstoque) {
  //   const precoTotal
  //  }
   console.log(existeEstoque)

   const novaVenda = new VendaPaes(cpfCliente, itensVenda)
   this.vendaPaesRepository.insereVenda(novaVenda)
   return novaVenda
  }
}