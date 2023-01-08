import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import { Navbar, Hero, Skills, Projects, About } from './components'
Navbar
function App() {

  return (
    <div className="App">
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Hero/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App
