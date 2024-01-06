import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<ComingSoon page={"Catalogue"} />} />
      <Route path="/fashion" element={<ComingSoon page={"Fashion"} />} />
      <Route path="/favourite" element={<ComingSoon page={"Favourite"} />} />
      <Route path="/lifestyle" element={<ComingSoon page={"Lifestyle"} />} />
    </Routes>
  )
}

export default App
