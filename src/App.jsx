import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Courses from "./pages/Courses"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
