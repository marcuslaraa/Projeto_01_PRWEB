import { ModalidadePaes } from "../model/ModalidadePaes"
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository"

export class ModalidadePaesService {
    modalidadePaesRepository: ModalidadePaesRepository = new ModalidadePaesRepository();

    cadastrarModalidade(modalidade: ModalidadePaes) {
        const { nome, vegano } = modalidade
        if (!nome || !vegano) {
            throw new Error("Informações incompletas")
        }

        const novaModalidade = new ModalidadePaes(nome, vegano)
        this.modalidadePaesRepository.insereModalidade(JSON.parse(JSON.stringify(novaModalidade)))
        return novaModalidade
    }

    consultarModalidade(id: any): ModalidadePaes | undefined {
        const idNumber: number = parseInt(id, 10)
        return this.modalidadePaesRepository.filtrarModalidadePorId(idNumber)
    }

    todasModalidade(): ModalidadePaes[] {
        return this.modalidadePaesRepository.filtrarTodasModalidades()
    }

    deletarModalidade(id: string) {
        const idNumber = parseInt(id)
        const modalidade = this.consultarModalidade(idNumber)
        if (!modalidade) {
            throw new Error("Modalidade não encontrada")
        }

        return this.modalidadePaesRepository.deletaModalidade(idNumber)
    }

    atualizarModalidade(modalidadeData: ModalidadePaes): ModalidadePaes {
        const { id, nome, vegano } = modalidadeData
        if (!nome || !vegano || !id) {
            throw new Error("Informações incompletas")
        }
        let modalidadeEncontrada = this.consultarModalidade(id)
        if (!modalidadeEncontrada) {
            throw new Error("Modalidade não encontrada!!!")
        }
        modalidadeEncontrada.vegano = vegano
        modalidadeEncontrada.nome = nome
        this.modalidadePaesRepository.atualizaModalidade(modalidadeEncontrada)
        return modalidadeEncontrada
    }
}