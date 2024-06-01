import React from 'react'

function Result(props) {
  const { score, onRestart } = props
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <h3>Your Score: {score}</h3>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  )
}

export default Result
