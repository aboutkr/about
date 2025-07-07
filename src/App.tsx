import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import Partners from './pages/Partners'
import Contents from './pages/Contents'
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin/login" element={<Login />} />
        <Route path="/Admin/dashboard" element={<Dashboard />} />
        <Route element={<Layout />}>
          <Route 
            path="/company" 
            element={<Navigate to="/about" replace />} 
          />
          <Route 
            path="/products" 
            element={<Navigate to="/Contents" replace />} 
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contents" element={<Contents />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}