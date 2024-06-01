import React from 'react'

function Question(props) {
  const { questionNumber, question, options, selected, setAnswer, onSubmit } = props

  return (
    <div className="question">
      <h2>{questionNumber}</h2>
      <h2>{question}</h2>
      <table>
        <tbody>
          {options.map((opt, idx) => (
            <tr
              key={idx}
              className={selected === opt ? 'selected' : ''}
              onClick={() => setAnswer(opt)}
            >
              <td>
                <div className="option-content">
                  <input
                    type="radio"
                    name="answer"
                    value={opt}
                    onChange={(e) => {
                      e.stopPropagation()
                      setAnswer(opt)
                    }}
                    checked={opt === selected}
                    readOnly
                  />
                  <label
                    onClick={(e) => {
                      e.stopPropagation()
                      setAnswer(opt)
                    }}
                  >
                    {opt}
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onSubmit} disabled={selected === null}>
        Next
      </button>
    </div>
  )
}

export default Question
