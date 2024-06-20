import { ModalidadePaes } from '../model/ModalidadePaes'

export class ModalidadePaesRepository {
  modalidadePaesList: ModalidadePaes[] = []

  insereModalidade(modalidade: ModalidadePaes) {
    this.modalidadePaesList.push(modalidade)
  }

  filtrarModalidadePorId(id: number): ModalidadePaes | undefined {
    return this.modalidadePaesList.find(modalidade => modalidade._id === id)
  }

  filtrarTodasModalidades(): ModalidadePaes[] {
    return this.modalidadePaesList
  }

  deletaModalidade(modalidade: ModalidadePaes) {
    const index = this.modalidadePaesList.indexOf(modalidade)
    if (index !== -1) {
      this.modalidadePaesList.splice(index, 1)
    }
  }
  atualizaModalidade(modalidade: ModalidadePaes): number {
    const index = this.modalidadePaesList.indexOf(modalidade)
    if (index !== -1) {
      this.modalidadePaesList[index] = modalidade
    }
    return index
  }
}