import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sum, subtract } from "../store/Calculator/Calculator.actions"

function Calculator() {
  const dispatch = useDispatch()
  const result = useSelector(state => state.calculator)

  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)

  return (
    <>
      <input
        type="number"
        placeholder="a"
        value={valueA}
        onChange={event => setValueA(parseFloat(event.target.value))}
      />
      <input
        type="number"
        placeholder="b"
        value={valueB}
        onChange={event => setValueB(parseFloat(event.target.value))}
      />
      <button onClick={() => dispatch(sum(valueA, valueB))}>somar</button>
      <button onClick={() => dispatch(subtract(valueA, valueB))}>subtrair</button>
      <div>{result}</div>
    </>
  )
}

export default Calculator
