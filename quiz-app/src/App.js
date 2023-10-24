import {useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/App.css';
import Home from './Components/Home.js';
import AdminLogin from './Components/AdminLogin.js'
import UserLogin from './Components/UserLogin.js'
import AdminDash from './Components/AdminDash';
import CreateQuiz from './Components/CreateQuiz';

function App() {
  const [admin, setAdmin] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/admin/auth' element={<AdminLogin setAdmin={setAdmin}/>}></Route>
          <Route path='/admin/dashboard' element={<AdminDash admin={admin}/>}></Route>
          <Route path='/admin/create-quiz' element={<CreateQuiz  admin={admin}/>}></Route>
          <Route path='/user/auth' element={<UserLogin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
