import { ModalidadePaes } from '../model/ModalidadePaes'

export const modalidadePaesList: ModalidadePaes[] = []
export class ModalidadePaesRepository {

  get list() {
    return modalidadePaesList
  }

  insereModalidade(modalidade: ModalidadePaes) {
    modalidadePaesList.push(modalidade)
  }

  filtrarModalidadePorId(id: number): ModalidadePaes | undefined {
    return modalidadePaesList.find(modalidade => modalidade.id === id)
  }

  filtrarTodasModalidades(): ModalidadePaes[] {
    return modalidadePaesList
  }

  deletaModalidade(id: number) {
    const index = modalidadePaesList.findIndex(modalidade => modalidade.id === id)

    if (index !== -1) {
      modalidadePaesList.splice(index, 1)
    }
  }

  atualizaModalidade(modalidade: ModalidadePaes): number {
    const index = modalidadePaesList.indexOf(modalidade)
    if (index !== -1) {
      modalidadePaesList[index] = modalidade
    }
    return index
  }
}