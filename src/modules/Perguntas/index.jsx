import { useRef, useState } from "react";
import "./Perguntas.css"


export default function Perguntas(props){
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)    


    return(
        <div className="principalPerguntas">
        <div className="divPerguntas">
            <h1>{props.pergunta} </h1>
            <input type="text"></input>
            <button onClick={onClick}>Resposta: </button>
            <div className={`menu ${isActive? "active" : "inactive"}`}>
            <p>Possível Resposta: {props.resposta} </p>
            </div>
        </div>
        </div>
    )
}