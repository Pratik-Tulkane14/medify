import Blog from "./components/Blog"
import Download from "./components/Download"
import Families from "./components/Families"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MedicalSpecialist from "./components/MedicalSpecialist"
import Navbar from "./components/Navbar"
import Notice from "./components/Notice"
import Offers from "./components/Offers"
import PatientCaring from "./components/PatientCaring"
import Specialisation from "./components/Specialisation"

function App() {

  return (
    <>
      <Notice />
      <Navbar />
      <Hero />
      <Offers />
      <Specialisation />
      <Blog />
      <Families />
      <Faq />
      <MedicalSpecialist />
      <PatientCaring />
      <Download />
      <Footer />
    </>
  )
}

export default App
