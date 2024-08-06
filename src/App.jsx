import { useState } from 'react'
import Search from './components/search/Search'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Search/>
     </div>
  )
}

export default App
