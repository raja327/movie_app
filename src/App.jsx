import { React,useState } from 'react'
import {AllRoutes} from './routes/AllRoutes'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
        
  )
}

export default App
