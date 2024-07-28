import Home from "./pages/Home"
import Next from "./pages/Next"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/next" element={<Next/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}