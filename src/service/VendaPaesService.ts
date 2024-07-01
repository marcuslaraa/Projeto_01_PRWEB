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

   let valorTotal = 0

   itensVenda.map((item) => {
    const estoquePaesId = item.estoquePaesId
    const estoqueExiste = this.estoquePaesService.consultarEstoque(estoquePaesId)
    if(estoqueExiste && estoqueExiste.quantidade > item.quantidade) {
      valorTotal += item.quantidade * estoqueExiste.precoVenda
      estoqueExiste.quantidade -= item.quantidade
    } else {
      throw new Error("Estoque de pães não existe.")
    }
   })

   const novaVenda = new VendaPaes(cpfCliente, itensVenda, valorTotal)
   this.vendaPaesRepository.insereVenda(novaVenda)
   return novaVenda
  }
}