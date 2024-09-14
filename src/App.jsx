import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBarPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
