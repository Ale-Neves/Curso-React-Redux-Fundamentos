import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

export default () => {
  return(
    <div className='App'>
      <h1>Fundamentos React</h1>
      <div className='Cards'>

        <Card titulo="#04 - Componente com Filhos" color='#00BFFF'>
          <Familia sobrenome="Neves">
            <FamiliaMembro nome="Alexandre"/>
            <FamiliaMembro nome="Beatris"/>
            <FamiliaMembro nome="Leonardo"/>
          </Familia>
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color='#008'>
          <Aleatorio min={1} max={10}/> 
        </Card>

        <Card titulo="#02 - Componente com Parametro" color='#080'>
          <ComParametro time="Corinthians" nacionalidade="Brasil" estado="SP" />
        </Card>

        <Card titulo="#01 - Primeiro Componentes">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}