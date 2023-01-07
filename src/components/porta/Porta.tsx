import PortaModel from '../../model/porta';
import { Presente } from '../presente/Presente';
import styles from './Porta.module.css';

interface PortaPros {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}
export function Porta(props: PortaPros) {
  const porta = props.value
  const selecionado = porta.selecionado && !porta.aberta ? styles.selecionada : ''

  function renderizarPorta() {
    return (

      <div className={styles.porta}>

        <div className={styles.numero}>{porta.numero}</div>

        <div
          className={styles.macaneta}
          onClick={evento => {
            evento.stopPropagation()
            props.onChange(porta.abrir())
          }}

        ></div>

      </div>

    )
  }
  return (
    <div className={styles.area}
      onClick={evento => props.onChange(porta.alternarSelecao())}>
      <div className={`${styles.estrutura} ${selecionado}`}>
        {porta.fechada ? 
        
        renderizarPorta() : porta.temPresente ? <Presente/> : false}

      </div>


      <div className={styles.chao}></div>

    </div>
  )
}