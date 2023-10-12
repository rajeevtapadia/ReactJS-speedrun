import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import AdminLogin from './Components/AdminLogin.js'
import UserLogin from './Components/UserLogin.js'

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='admin/auth' Component={<AdminLogin/>}></Route>
          <Route path='user/auth' Component={<UserLogin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
