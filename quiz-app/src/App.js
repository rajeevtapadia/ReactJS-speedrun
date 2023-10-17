import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/App.css';
import Home from './Components/Home.js';
import AdminLogin from './Components/AdminLogin.js'
import UserLogin from './Components/UserLogin.js'
import AdminDash from './Components/AdminDash';
import CreateQuiz from './Components/CreateQuiz';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/admin/auth' element={<AdminLogin/>}></Route>
          <Route path='/admin/dashboard' element={<AdminDash/>}></Route>
          <Route path='/admin/create-quiz' element={<CreateQuiz/>}></Route>
          <Route path='/user/auth' element={<UserLogin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
