import { useState } from 'react'
import BudgetTable from "./components/BudgetTable"

//import './App.css'

function App() {
  interface budgetItem {
    categoria: String;
    quantidade: number;
  }

  const [budgetData, setBudgetData] = useState([
    { categoria: 'Alimentação', quantidade: 500},
    { categoria: 'Transporte', quantidade: 200},
  ])

  return (
    <main>
      <h1>Gerenciador de orçamento</h1>
      <BudgetTable budgetData={budgetData} />
    </main>
  )
}

export default App
