import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro time="Corinthians" nacionalidade="Brasil" estado="SP" />
  </div>,
  document.getElementById('root')
)
