import { useState } from "react"

function useWordle(solution) {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)

  // format 5-letter string into an array of letter objects
  function formatGuess(){
  }
  
  // add a new guess to guesses state
  // update isCorrect if the guess is correct
  //  add one to the turn state
  function addNewGuess(){

  }



  // handle keyup event & track current guess
  // if uses presses enter, add the new guess
  function handleKeyUp(){
  }
  
  return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle