import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import thunderLogo from '/thunder.svg'

const url = import.meta.env.VITE_BASE_URL;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href={url} target="_blank">
          <img src={thunderLogo} className="logo" alt="Thunder logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Thunder</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Thunder, Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
