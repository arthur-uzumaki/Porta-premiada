
export default class PortaModel {
  #numero: number
  #temPresente: boolean
  #selecionado: boolean
  #aberta: boolean

  constructor(numero: number, temPresente = false, selecionado = false, aberta = false) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionado = selecionado
    this.#aberta = aberta

  }
  get numero() {
    return this.#numero
  }
  get temPresente() {
    return this.#temPresente
  }
  get selecionado() {
    return this.#selecionado
  }
  get aberta() {
    return this.#aberta
  }

  get fechada() {
    return !this.aberta
  }

  desselecionar() {
    const selecionado = false
    return new PortaModel(this.numero, this.temPresente, selecionado, this.aberta)
  }
  alternarSelecao() {
    const selecionado = !this.selecionado
    return new PortaModel(this.numero, this.temPresente, selecionado, this.aberta)
  }
  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.temPresente, this.selecionado, aberta)
  }
}