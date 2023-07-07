import "./Textos.css"

    export default function Textos(props){

        return(
            <div className="divTextos">
                <div className="divAlinhar">
                    <p>{props.texto}</p>
                </div>
            </div>
        )
    }