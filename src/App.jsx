import './App.css'
import { useState } from 'react'

function App() {

  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [result, setResult] = useState("")

  const choices = ["Rock", "Paper", "Scissors"]

  const playGame = (choice) => {

    const computer =
      choices[Math.floor(Math.random() * 3)]

    setUserChoice(choice)
    setComputerChoice(computer)

    if(choice === computer){
      setResult("🤝 Draw")
    }

    else if(
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ){
      setResult("🎉 You Win")
    }

    else{
      setResult("😢 Computer Wins")
    }

  }

  return (

    <div className="container">

      <div className="game-card">

        <h1>🎮 Rock Paper Scissors</h1>

        <div className="buttons">

          <button onClick={()=>playGame("Rock")}>
            🪨 Rock
          </button>

          <button onClick={()=>playGame("Paper")}>
            📄 Paper
          </button>

          <button onClick={()=>playGame("Scissors")}>
            ✂️ Scissors
          </button>

        </div>

        <div className="result-box">

          <h2>You: {userChoice}</h2>

          <h2>Computer: {computerChoice}</h2>

          <h1>{result}</h1>

        </div>

      </div>

    </div>

  )
}

export default App