//useReducer

import { useReducer, useState } from 'react'

// we defining a initial state for our app
// const state = { contador: 0 }
// action always! is an object with this structure:
// action = { type: string, payload: any}

const inicial = { contador : 0 }

// function Reducer - useReducer needs this function to work
const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'decrementar':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: action.payload }
    default:
      return state
  }
}

// App components with useReducer

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, inicial)
  const [valor, setValor] = useState(0)

  return (
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Màs</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
      <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set</button>
    </div>
  )
}



export default App