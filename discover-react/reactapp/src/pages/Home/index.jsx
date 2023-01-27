import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Tom Riddle" time="07:01:14" />
      <Card name="Alvo Dumbledore" time="07:03:29" />
      <Card name="Harry Potter" time="07:04:52" />
    </div>
  );
}
