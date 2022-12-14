import React from 'react'

export default function Modal({isCorrect, solution, turn}) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p className="solution">The word was: {solution}</p>
          <p>You solved it in {turn} guesses!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Sorry, you've run out of guesses!</h1>
          <p className="solution">The word was: {solution}</p>
          <p>Better luck next time!</p>
        </div>
      )}
    </div>
  )
}
