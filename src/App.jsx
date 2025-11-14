import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import About from './pages/About'
import CourseOpenWeb from './pages/CourseOpenWeb.jsx'
import CourseOpenUx from './pages/CourseOpenUx.jsx'
import CourseOpenApp from './pages/CourseOpenApp.jsx'
import CourseOpenGraphic from './pages/CourseOpenGraphic.jsx'
import CourseOpenFront from './pages/CourseOpenFront.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/viewWeb" element={<CourseOpenWeb />} />
          <Route path="/viewUx" element={<CourseOpenUx />} />
          <Route path="/viewApp" element={<CourseOpenApp />} />
          <Route path="/viewGraphic" element={<CourseOpenGraphic />} />
          <Route path="/viewFront" element={<CourseOpenFront />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
