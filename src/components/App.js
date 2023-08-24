import React from 'react'

import '../App.css'
import TaskListContextProvider from '../context/TaskListContext'
import Header from './Header'
// import TaskList from './TasksList'
// import TaskForm from './TaskForm'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Login'
import Manager from './Manager'
import Signup from './Signup';

function App() {
  return (
    <Router>
      <TaskListContextProvider>
      <div className="container1">
        <div className="app-wrapper">
          <div className="main">
            <Header/>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/Signup' element={<Signup/>}></Route>
              <Route path="/Manager" element={<Manager/>}/>
            </Routes>
          </div>
        </div>
      </div>
  </TaskListContextProvider>
    </Router>
  )
}

export default App;