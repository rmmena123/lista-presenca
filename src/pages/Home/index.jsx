import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome"/>
      <button type="button">Adicionar</button>
      
      <Card name="Rodrigo" time="10:55"/>
      <Card name="Carlos" time="13:00"/>
    </div>
  )
}
