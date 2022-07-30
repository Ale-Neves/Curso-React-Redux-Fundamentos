import React from "react";
import Produtos from "../../data/Produtos";
import './TabelaProdutos.css'

export default () => {
  const listProdutos = Produtos.map((x, i) => {
    return(
        <tr key={x.id} className={i % 2 == 0 ? "Par" : "Inpar"}>
          <td>{x.id}</td>
          <td>{x.nome}</td>
          <td> R$ {x.preco.toFixed(2).replace('.', ',')}</td>
        </tr>
    );
  });

  return(
    <div className="TabelaProdutos">
      <table>
        <thead style={{alignItems: 'center'}}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
            {listProdutos}
        </tbody>
      </table>
    </div>
  );
};