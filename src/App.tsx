import Blog from "./components/Blog"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Notice from "./components/Notice"
// import Specialisation from "./components/Specialisation"

function App() {

  return (
    <>
     <Notice/>
     <Navbar/>
     <Hero/>
     {/* <Specialisation/> */}
     <Blog/>
    </>
  )
}

export default App
