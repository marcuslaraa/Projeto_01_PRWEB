import { EstoquePaes } from '../model/EstoquePaes'
import { ModalidadePaesRepository } from './ModalidadePaesRepository'

export class EstoquePaesRepository extends ModalidadePaesRepository {
  EstoquePaesList: EstoquePaes[] = []

  insereEstoque(itemEstoque: EstoquePaes) {
    this.EstoquePaesList.push(itemEstoque)
  }
}
