import React, { useState } from "React";
import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    /*

    ° O estado do "setStudents" está sendo alterado para o prevState(o estado anterior) mais o newStudent para assim acoplar os estudantes anteriores com os novos

    ° Está usando o "Spred operator" (...) para adicionar todos os antigos estudantes no "prevState" fora do vetor
    
    */

    setStudents((prevState) => [...prevState, newStudent]);
  }
  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      {/* O 'onChange' serve para pegar cada atualização do input através do e.target.value */}
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {/* Aqui está listando cada elemento do array "students" de acordo com os valores do objeto  */}
      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}
