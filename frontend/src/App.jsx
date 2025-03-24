import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchoolComponent from "./components/SchoolComponent";
import TeacherComponent from "./components/TeacherComponent";
import SchoolList from "./components/SchoolList";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchoolList />} />
        <Route path="/school" element={<SchoolComponent />} />
        <Route path="/teacher" element={<TeacherComponent />} />
      </Routes>
      </Router>
  )
}

export default App
