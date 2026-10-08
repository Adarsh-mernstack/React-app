
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LandingPage from "./pages/LandingPage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Pnf from "./pages/Pnf"


function App() {
  
  return (
    <>
    <Header/>
    <Routes>
     {/* {http://localhost:5173/ */}
      <Route path="/" element={<LandingPage/>}/>
      {/*  http://localhost:5173/register */}
      <Route path="/register" element={<Register/>}/>
      {/*  http://localhost:5173/login */}
      <Route path="/login" element={<Login/>} />
      {/*  http://localhost:5173/dashboard*/}
      <Route path="/dashboard" element={<Dashboard/>}/>
       {/*  http://localhost:5173/view*/}
      <Route path="/view/id" element={<Dashboard/>}/>
      <Route path="*" element={<Pnf/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
