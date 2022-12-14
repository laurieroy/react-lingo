import { useState } from "react"

function useWordle(solution) {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)

  // format 5-letter string into an array of letter objects
  function formatGuess(){
    console.log("Formatting guess: ", currentGuess)
  }
  
  // add a new guess to guesses state
  // update isCorrect if the guess is correct
  //  add one to the turn state
  function addNewGuess(){

  }



  // handle keyup event & track current guess
  // if uses presses enter, add the new guess
  function handleKeyUp({key}){
    if (key === 'Enter'){
      // only add guess if turn is less than 5
      if (turn > 5){
        console.log("All guesses used")
        return
      }

      // do not allow duplicate words
      if (history.includes(currentGuess)){
        console.log("You already tried that word!")
        return
      }

      // check word is 5 chars long
      if (currentGuess.length !== 5){
        console.log("Guess word must be 5 chars long")
        return
      }
      formatGuess()
    }

    if (key === 'Backspace'){
      setCurrentGuess((prev)=>{
        return prev.slice(0, -1)
      })
      return
    }

    if(/^[A-Za-z]$/.test(key)){
      if (currentGuess.length < 5){
        setCurrentGuess((prev)=>{
          return prev + key
        })
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle