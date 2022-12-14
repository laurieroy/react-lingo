import { useState } from "react"

function useWordle(solution) {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)

  // format 5-letter string into an array of letter objects with default bg color-gray
  function formatGuess(){
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'}
    })

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })
  
    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })
    
    return formattedGuess
  }
  
  function addNewGuess(formattedGuess){
    if (currentGuess === solution) {
      setIsCorrect(true)
    }

    setGuesses((prevGuesses)=>{
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    setHistory((prevHistory)=>{
      return [...prevHistory, currentGuess]
    })

    setTurn((prevTurn) => {
      return prevTurn + 1
    })

    setCurrentGuess("")
  }

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
      
      const formattedGuess = formatGuess()
      addNewGuess(formattedGuess)
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