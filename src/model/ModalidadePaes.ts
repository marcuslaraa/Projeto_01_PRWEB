import { generateId } from '../utils/generateId'

export class ModalidadePaes {
  id: number
  nome: string
  vegano: boolean

  constructor(nome: string, vegano: boolean) {
    this.id = generateId()
    this.nome = nome
    this.vegano = vegano
  }
}