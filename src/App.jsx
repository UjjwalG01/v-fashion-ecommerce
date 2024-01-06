import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import { createContext, useState } from "react"

export const PageContext = createContext();

function App() {
  const [clicked, setClicked] = useState(false);

  const handleNavClick = () => {
    setClicked(!clicked);
  }

  const value = { clicked, setClicked, handleNavClick }
  return (
    <PageContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<ComingSoon page={"Catalogue"} />} />
        <Route path="/fashion" element={<ComingSoon page={"Fashion"} />} />
        <Route path="/favourite" element={<ComingSoon page={"Favourite"} />} />
        <Route path="/lifestyle" element={<ComingSoon page={"Lifestyle"} />} />
      </Routes>
    </PageContext.Provider>
  )
}

export default App
