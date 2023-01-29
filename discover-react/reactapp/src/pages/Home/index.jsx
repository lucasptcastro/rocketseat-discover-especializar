import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

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

  /* 
  
  Hook criad para consumir a api do github e retornar o nome e avatar para o hook do
  "user"

  */
  useEffect(() => {
    fetch("https://api.github.com/users/lucasptcastro")
      .then((response) => response.json())
      .then((data) => setUser({ name: data.name, avatar: data.avatar_url }));
  }, [students]);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

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
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
