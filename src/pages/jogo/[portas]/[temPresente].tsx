import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Porta } from "../../../components/porta/Porta"
import { atualizarPorta, criarPortas } from "../../../function/porta"
import styles from '../../../styles/jogo.module.css'

export default function jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const quantidadePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(quantidadePortasValidas && temPresenteValido)


  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))

  }, [router?.query])



  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta
        key={porta.numero}
        value={porta}
        onChange={novaPorta => setPortas(atualizarPorta(portas, novaPorta))} />
    })
  }

  return (

    <div className={styles.jogo}>
      <div className={styles.portas}>
        {

          valido ? renderizarPortas() : <h2>Valores inválidos</h2>

        }

      </div>

      <div className={styles.botoes}>
        <Link href='/' legacyBehavior>
          <button>Reniciar jogo</button>
        </Link>
      </div>
    </div>

  )
}