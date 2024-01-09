import { Routes, Route } from "react-router-dom"
import { Suspense, createContext, lazy, useState } from "react"


// Components import
const Header = lazy(() => import("./components/Header"));
// import Header from "./components/Header";
// import Footer from "./components/Footer";


// Pages imports
const Home = lazy(() => import("./pages/Home"));
const Catelogue = lazy(() => import("./pages/Fashion"));
// const Fashion = lazy(() => import("./pages/Fashion"));
const About = lazy(() => import("./pages/About"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Login = lazy(() => import("./pages/Login"));
// const Lifestyle = lazy(() => import("./pages/Lifestyle"));

const ComingSoon = lazy(() => import("./pages/ComingSoon"));

export const PageContext = createContext();

function App() {
  const [clicked, setClicked] = useState(false);

  const value = { clicked, setClicked }
  return (
    <PageContext.Provider value={value}>
      <div className={`${clicked === true && 'scroll-off'}`}>
        <Header clicked={clicked} setClicked={setClicked} />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/catalogue" element={<Suspense fallback={<div>Loading...</div>}><ComingSoon page={"Catelogue"} /></Suspense>} />
          <Route path="/fashion" element={<Suspense fallback={<div>Loading...</div>}><Catelogue /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/lifestyle" element={<Suspense fallback={<div>Loading...</div>}><ComingSoon page={"Lifestyle"} /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={<div>Loading...</div>}><SignIn /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </PageContext.Provider>
  )
}

export default App
