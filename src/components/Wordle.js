import React, { useEffect } from 'react'
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"

export default function Wordle({solution}) {
  const { currentGuess, guesses, handleKeyUp, isCorrect, turn, usedKeys } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
  
    return () => window.removeEventListener('keyup', handleKeyUp)
    
  }, [handleKeyUp])
  
  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <>
      <div>solution: {solution}</div>

      <Grid 
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
      />
      <Keypad usedKeys={usedKeys} />
    </>
  )
}
