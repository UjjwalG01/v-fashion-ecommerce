import { Routes, Route } from "react-router-dom"
import { Suspense, createContext, lazy, useState } from "react"
import Loading from "./components/Loading";


// Components import
const Header = lazy(() => import("./components/Header"));
// import Header from "./components/Header";
// import Footer from "./components/Footer";


// Pages imports
const Home = lazy(() => import("./pages/Home"));
const Fashion = lazy(() => import("./pages/Fashion"));
const Catelogue = lazy(() => import("./pages/Catelogue"));
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
          <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path="/catalogue" element={<Suspense fallback={<Loading />}><Catelogue page={"Catelogue"} /></Suspense>} />
          <Route path="/fashion" element={<Suspense fallback={<Loading />}><Fashion /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
          {/* <Route path="/lifestyle" element={<Suspense fallback={<Loading />}><Loading /></Suspense>} /> */}
          <Route path="/lifestyle" element={<Suspense fallback={<Loading />}><ComingSoon page={"Lifestyle"} /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={<Loading />}><SignIn /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </PageContext.Provider>
  )
}

export default App
