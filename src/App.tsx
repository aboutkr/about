import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        {/* Admin 경로 - Layout 없이 */}
        <Route path="/Admin/login" element={<Login />} />
        <Route path="/Admin/dashboard" element={<Dashboard />} />

        {/* 일반 사용자용 Layout 라우트 */}
        <Route element={<Layout />}>
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