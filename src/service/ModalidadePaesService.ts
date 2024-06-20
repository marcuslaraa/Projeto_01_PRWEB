import { ModalidadePaes } from "../model/ModalidadePaes"
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository"

export class ModalidadePaesService {
    modalidadePaesRepository: ModalidadePaesRepository = new ModalidadePaesRepository();

    cadastrarModalidade(modalidade: any) {
        const { nome, isVegano } = modalidade
        if (!nome || !isVegano) {
            throw new Error("Informações incompletas")
        }

        const novaModalidade = new ModalidadePaes(nome, isVegano)
        this.modalidadePaesRepository.insereModalidade(novaModalidade)
        return novaModalidade
    }

    consultarModalidade(id: any): ModalidadePaes | undefined {
        const idNumber: number = parseInt(id, 10)
        console.log(id)
        return this.modalidadePaesRepository.filtrarModalidadePorId(idNumber)
    }

    todasModalidade(): ModalidadePaes[] {
        return this.modalidadePaesRepository.filtrarTodasModalidades()
    }

    deletarModalidade(id: any) {
        const modalidade = this.consultarModalidade(id)
        if (!modalidade) {
            throw new Error("Modalidade não encontrada")
        }

        this.modalidadePaesRepository.deletaModalidade(modalidade)
    }

    atualizarModalidade(modalidadeData: any): ModalidadePaes {
        const { id, nome, isVegano } = modalidadeData
        if (!nome || !isVegano || !id) {
            throw new Error("Informações incompletas")
        }

        let modalidadeEnconstrada = this.consultarModalidade(id)
        if (!modalidadeEnconstrada) {
            throw new Error("Modalidade não encontrada!!!")
        }
        modalidadeEnconstrada._isVegano = isVegano
        modalidadeEnconstrada.nome = nome
        this.modalidadePaesRepository.atualizaModalidade(modalidadeEnconstrada)
        return modalidadeEnconstrada
    }
}