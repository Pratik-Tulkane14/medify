import Blog from "./components/Blog"
import Families from "./components/Families"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MedicalSpecialist from "./components/MedicalSpecialist"
import Navbar from "./components/Navbar"
import Notice from "./components/Notice"
import PatientCaring from "./components/PatientCaring"
import Specialisation from "./components/Specialisation"

function App() {

  return (
    <>
      <Notice />
      <Navbar />
      <Hero />
      <Specialisation />
      <Blog />
      <Families />
      <MedicalSpecialist />
      <PatientCaring />
      <Footer />
    </>
  )
}

export default App
