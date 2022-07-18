import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

export default () => {
  return(
    <div id='app'>
      <h1>Fundamentos React</h1>
      <Primeiro />
      <ComParametro time="Corinthians" nacionalidade="Brasil" estado="SP" />
    </div>
  );
}