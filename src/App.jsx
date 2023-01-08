import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar, Hero, Skills, Projects, About } from './components'
Navbar
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Hero/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
