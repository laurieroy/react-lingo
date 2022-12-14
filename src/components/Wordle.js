import React, { useEffect } from 'react'
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"

export default function Wordle({solution}) {
  const { currentGuess, guesses, handleKeyUp, isCorrect, turn, usedKeys } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
  
   if (isCorrect ) {
    console.log("Congrats! you got it!")
    window.removeEventListener('keyup', handleKeyUp)
  }
  
  if (turn > 5 ) {
    console.log("Doh! you've run out of chances")
    window.removeEventListener('keyup', handleKeyUp)
  }


  return () => window.removeEventListener('keyup', handleKeyUp)
    
  }, [handleKeyUp, isCorrect, turn])
  
 
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
