import PortaModel from "../model/porta";

export function criarPortas(portaQuantidade: number , portaComPresente: number):PortaModel[]{
  return Array.from({length: portaQuantidade} , (_, i) => {
    const numeroPorta = i + 1
    const temPresente = numeroPorta === portaComPresente
    return new PortaModel(numeroPorta , temPresente)
  })
}

export function atualizarPorta(portas: PortaModel[] , portaModificada: PortaModel):PortaModel[]{
    return portas.map(portaAtual => {
      const igualModificada = portaAtual.numero === portaModificada.numero

      if(igualModificada){
        return portaModificada
      }else{
        // mostra porta desselecionadar sem desmacar porta atual
      return portaModificada.aberta ?  portaAtual : portaAtual.desselecionar()
      }
    })
}