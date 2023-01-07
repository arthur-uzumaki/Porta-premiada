import Link from "next/link";
import { useState } from "react";
import { Cartao } from "../components/cartao/Cartao";
import { EntradaNumerica } from "../components/input/EntradaNumerica";
import styles from '../styles/Home.module.css';

export default function Home() {

  const [quantidadePortas, setQuantidadePortas] = useState(3)
  const [portaPresente, setPortaPresente] = useState(1)


  return (
    <div className={styles.formulario}>
      <div>
        <Cartao  bgcolor='#c0392c'>
         <h1> Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qunatidade Portas?"
            value={quantidadePortas}
            onChange={novaQuantidade => setQuantidadePortas(novaQuantidade)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?"
            value={portaPresente}
            onChange={novaPortaComPresente => setPortaPresente(novaPortaComPresente)} />

        </Cartao>

        <Cartao bgcolor='#28a085'>

          <Link href={`/jogo/${quantidadePortas}/${portaPresente}`} legacyBehavior>

            <h2 className={styles.link}>Iniciar</h2>

          </Link>
        </Cartao>
      </div>
    </div>
  )
}
