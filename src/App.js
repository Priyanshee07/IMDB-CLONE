import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';
import AddUser from "./pages/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const [addUsers, setAddUsers] = useState([])

  const handleSignUp = (user) => {
    setUsers([...users, user]);
    alert('Sign up successful! Please login.');
  };

  const handleAddUsers = (addUser)=> {
    setUsers([...addUsers, addUser]);
    alert('New User Added Successfully!')
  }

  const handleLogin = (user) => {
    alert(`Welcome back, ${user.username}!`);
  };

  return (
    <div className="App">
        <div>
        <Header/>
        </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login users={users} onLogin={handleLogin} />}></Route>
          <Route path="/signup" element={<Signup onSignUp={handleSignUp} />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/addUser" element={<AddUser/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
