import React from "react"

export default function ComParametro(props){
  const time = props.time;
  const nacionalidade = props.nacionalidade;
  const estado = props.estado;
  
  return(
    <div>
      <h3>{time}</h3>
      <p>{nacionalidade}</p>
      <p>{estado}</p>
    </div>
  )
}