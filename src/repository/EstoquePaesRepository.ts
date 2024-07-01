import { EstoquePaes } from '../model/EstoquePaes'

export const estoquePaesList: EstoquePaes[] = []
export class EstoquePaesRepository {

  insereEstoque(itemEstoque: EstoquePaes) {
    estoquePaesList.push(itemEstoque)
  }

  filtrarTodosEstoque() {
    return estoquePaesList
  }

  filtrarEstoquePorId(id: number): EstoquePaes | undefined {
    return estoquePaesList.find(estoque => estoque.id === id)
  }

  atualizaEstoque(estoque: EstoquePaes) {
    const index = estoquePaesList.indexOf(estoque)
    if (index !== -1) {
      estoquePaesList[index] = estoque
    }
    return index
  }
  }

