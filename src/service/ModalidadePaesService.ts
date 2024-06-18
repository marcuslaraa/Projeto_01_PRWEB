import { ModalidadePaes } from "../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";

export class ModalidadePaesService {
    modalidadePaesRepository: ModalidadePaesRepository = new ModalidadePaesRepository();

    cadastrarModalidade(modalidade: any) {
        const { nome, isVegano } = modalidade
        if(!nome || !isVegano) {
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
}