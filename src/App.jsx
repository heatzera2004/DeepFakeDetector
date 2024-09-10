import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Nopage from './pages/nopage/Nopage';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup'
import Casestudy from './pages/casestudy/Casestudy';
import Forum from './pages/forum/Forum';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Nopage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/casestudy' element={<Casestudy />} />
        <Route path='/forum' element={<Forum />} />
      </Routes>
    </Router>
  )
}

export default App
