import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';

export default () => {
  return(
    <div id='app'>
      <h1>Fundamentos React</h1>
      <Aleatorio min={1} max={10}/>
      <Primeiro />
      <ComParametro time="Corinthians" nacionalidade="Brasil" estado="SP" />
    </div>
  );
}