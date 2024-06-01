import React, { useState } from 'react'
import Question from './components/Question'
import Result from './components/Result'

import './QuizApp.css'

function App() {
  const [questions] = useState([
    {
      id: 1,
      question: 'What is ReactJS?',
      options: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system',
      ],
      answer: 'A JavaScript library for building user interfaces',
    },
    {
      id: 2,
      question: 'What is JSX?',
      options: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript',
      ],
      answer: 'A syntax extension for JavaScript',
    },
    {
      id: 3,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin'],
      answer: 'Paris',
    },
    {
      id: 4,
      question: 'What is the largerst planet in our solar system?',
      options: ['Jupiter', 'Mars', 'Earth'],
      answer: 'Jupiter',
    },
  ])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)
  const [selected, setSelected] = useState(null)

  //arrow function
  const handleSelect = (answer) => {
    setSelected(answer)
  }

  const handleSubmit = () => {
    if (selected === questions[currentQ].answer) {
      setScore((prevState) => prevState + 1)
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ((prevState) => prevState + 1)
      setSelected(null)
    } else {
      setQuizEnd(true)
    }
  }

  const handleRestart = () => {
    setCurrentQ(0)
    setScore(0)
    setQuizEnd(false)
    setSelected(null)
  }

  const current = questions[currentQ]

  return (
    <div className="quiz-app">
      {quizEnd ? (
        <Result score={score} onRestart={handleRestart} />
      ) : (
        <Question
          questionNumber={`Question ${currentQ + 1}:`}
          question={current.question}
          options={current.options}
          selected={selected}
          setAnswer={handleSelect}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default App
