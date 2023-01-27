import React, { useState } from "React";
import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>

      {/* O 'onChange' serve para pegar cada atualização do input através do e.target.value */}
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Tom Riddle" time="07:01:14" />
      <Card name="Alvo Dumbledore" time="07:03:29" />
      <Card name="Harry Potter" time="07:04:52" />
    </div>
  );
}
