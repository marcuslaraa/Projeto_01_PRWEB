export class ItemVenda {
  _estoquePaesId: number
  _quantidade: number

  constructor(estoquePaesId: number, quantidade: number) {
    this._estoquePaesId = estoquePaesId
    this._quantidade = quantidade
  }
}