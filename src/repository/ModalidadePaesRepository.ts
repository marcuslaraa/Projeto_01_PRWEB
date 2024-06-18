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
}