import { generateId } from '../utils/generateId'

export class ModalidadePaes {
  _id: number
  _nome: string
  _isVegano: boolean

  constructor(nome: string, vegano: boolean) {
    this._id = generateId()
    this._nome = nome
    this._isVegano = vegano
  }

  get nome() {
    return this._nome
  }

  get vegano() {
    return this._isVegano
  }

  set nome(value: string) {
    this._nome = value
  }

  set vegano(value: boolean) {
    this._isVegano = value
  }
}