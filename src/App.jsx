import { useStat, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar/>
      <Header/>
      </div>
    </div>
  )
}

export default App
