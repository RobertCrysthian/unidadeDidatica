import { useState } from 'react'
import './MultiplaEscolha.css'

export default function MultiplaEscolha(props) {

    const [resposta, setResposta] = useState(false)
    

    return (


        <>
        <div className="centralizarQuestoes">
            <div className="divMult">
                <h1>{props.titulo}</h1>
                <div className="p1">
                    <a value={resposta} onClick={() => setResposta(!resposta)} className={`questao ${resposta ? props.escolha1 : "nada"} `}>{props.q1}</a>
                    <a value={resposta} onClick={() => setResposta(!resposta)} className={`questao ${resposta ? props.escolha2 : "nada"}`}>{props.q2}</a>
                </div>

                <div className="p1">
                    <a value={resposta} onClick={() => setResposta(!resposta)} className={`questao ${resposta ? props.escolha3 : "nada"}`}>{props.q3}</a>
                    <a value={resposta} onClick={() => setResposta(!resposta)} className={`questao ${resposta ? props.escolha4 : "nada"}`}>{props.q4}</a>

                </div>
            </div>
        </div>
        </>
    )
}