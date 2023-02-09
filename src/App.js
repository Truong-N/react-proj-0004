import React from "react"
import GrandParent from "./GrandParent";

function App() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(prevCount => prevCount + 1)
  console.log("[GP] [P] [C] [GC] APP just rendered")
  return (
    <div>
        <button onClick={increment}>+1</button>
        <h2>{count}</h2>
        <p>I'm the App component</p>
        <GrandParent count={count}/>
        <GrandParent />
    </div>
  )    
}

export default App;
