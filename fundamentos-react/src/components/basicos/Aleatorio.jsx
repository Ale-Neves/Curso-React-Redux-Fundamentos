/*--- Desafio Numeros Aleatórios 
  .Criar Componente Aleatorio.jsx, dentro de Componentes -> basicos.
  .Componente ira receber valor min e max, como parametro(props).
  .Devera sortiar valor entre o min e max recebido.
*/
import React from "react";

export default (props) => {
  const { min, max} = props;
  const aleatorio = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return(
    <div>
      <h2><strong>Sortei Aleatório</strong></h2>
      <p>Valor minimo: {props.min}</p>
      <p>Valor maximo: {props.max}</p>
      <p>Valor sorteado: { aleatorio }</p>
    </div>
  );
}