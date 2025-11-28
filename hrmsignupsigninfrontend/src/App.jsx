import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Welcome } from './components/Welcome'

function App() {

  return (
    <>
       <Router>
          <Routes>
              <Route exact path='/' element={<SignIn/>} />
              <Route exact path='/signup' element={<SignUp/>} />
              <Route exact path='/welcome' element={<Welcome/>} />
          </Routes>
       </Router>
    </>
  )
}

export default App
