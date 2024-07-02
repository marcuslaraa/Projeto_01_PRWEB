import { VendaPaes } from '../model/VendasPaes'
import { VendaPaesRepository } from '../repository/VendaPaesRepository';
import { EstoquePaesService } from './EstoquePaesService'
import { ModalidadePaesService } from './ModalidadePaesService'


export class VendaPaesService {
  vendaPaesRepository = new VendaPaesRepository()
  estoquePaesService = new EstoquePaesService()
  modalidadePaesService = new ModalidadePaesService()

  insereVenda(venda: VendaPaes) {
   const {cpfCliente, itensVenda} = venda
   if(!cpfCliente || !itensVenda) {
    throw new Error("Itens inválidos")
   }

   let valorTotal: number = 0
   let nome: string | undefined;
   itensVenda.map((item) => {
    const estoquePaesId = item.estoquePaesId
    const estoqueExiste = this.estoquePaesService.consultarEstoque(estoquePaesId)
    const nomeModalidade = this.modalidadePaesService.consultarModalidade(estoqueExiste?.modalidadeId)?.nome
    nome = nomeModalidade
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


  todasVendas(): VendaPaes[] {
    return this.vendaPaesRepository.filtrarTodasVendas()
}
}