import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Layout from "./containers/Layout"
import Profile from "./pages/Profile/Profile"
import Village from "./pages/Village/Village"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/village" element={<Layout><Village /></Layout>} />
    </Routes>
  )
}
