import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import { createContext, useState } from "react"
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";

export const PageContext = createContext();

function App() {
  const [clicked, setClicked] = useState(false);

  const value = { clicked, setClicked }
  return (
    <PageContext.Provider value={value}>
      <div className={`${clicked === true && 'scroll-off'}`}>
        <Header clicked={clicked} setClicked={setClicked} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<ComingSoon page={"Catalogue"} />} />
          <Route path="/fashion" element={<ComingSoon page={"Fashion"} />} />
          <Route path="/about" element={<About />} />
          <Route path="/lifestyle" element={<ComingSoon page={"Lifestyle"} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </PageContext.Provider>
  )
}

export default App
