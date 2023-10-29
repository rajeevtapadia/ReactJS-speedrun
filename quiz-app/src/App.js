import {useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/App.css';
import Home from './Components/Home.js';
import AdminLogin from './Components/Admin/AdminLogin.js'
import UserLogin from './Components/User/UserLogin.js'
import AdminDash from './Components/Admin/AdminDash';
import CreateQuiz from './Components/Admin/CreateQuiz';
import UserDash from "./Components/User/UserDash";
import GiveQuiz from "./Components/User/GiveQuiz";

function App() {
  const [admin, setAdmin] = useState("");
  const [user, setUser ] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/admin/auth' element={<AdminLogin setAdmin={setAdmin}/>}></Route>
          <Route path='/admin/dashboard' element={<AdminDash admin={admin}/>}></Route>
          <Route path='/admin/create-quiz' element={<CreateQuiz  admin={admin}/>}></Route>
          <Route path='/user/auth' element={<UserLogin setUser={setUser}/>}></Route>
          <Route path='/user/dashboard' element={<UserDash user={user}/>}></Route>
          <Route path='/user/quiz' element={<GiveQuiz/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
