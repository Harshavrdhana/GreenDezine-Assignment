import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import LandingPage from './components/LandingPage.jsx'
import Authenticate from './components/auth/Authenticate.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Authenticate />}>
          <Route path="/home" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App