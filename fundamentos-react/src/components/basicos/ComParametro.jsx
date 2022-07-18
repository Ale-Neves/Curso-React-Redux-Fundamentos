import React from "react"

export default function ComParametro(props){
  const time = props.time;
  const nacionalidade = props.nacionalidade;
  const estado = props.estado;
  
  return(
    <div>
      <h2>{time}</h2>
      <p>{nacionalidade}</p>
      <p>{estado}</p>
    </div>
  )
}