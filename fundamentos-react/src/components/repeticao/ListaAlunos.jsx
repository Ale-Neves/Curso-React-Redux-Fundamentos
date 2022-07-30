import React from "react";
import Alunos from "../../data/Alunos"

export default () => {
  const alunos = Alunos.map((x, i) => {
    return (
      <li key={i}>
        {x.id}) {x.nome}  - nota: {x.nota}
      </li>
    );
  });

  return(
    <div>
      <ul style={{listStyle: 'none', textAlign: "left"}}>
        {alunos}
      </ul>
    </div>
  );
};