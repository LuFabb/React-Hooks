// useState

// hooks rules: 
// they are not called in loop, or while 
// always at the highest level of the component
// they are only called in 2 parts:
// React component and Custo hooks
// when we create a custom hook it always has to start with 'use and than the other part.

import { useState } from "react"

const App = () => {
  const [ contador, setContador ] = useState(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  )
}

export default App