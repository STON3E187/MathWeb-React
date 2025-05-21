// Secciones
import Header from "./components/header";
import Courses from "./components/courses";
import Hero from "./components/hero";
import LearnProcess from "./components/learnProcess";
import SpecialPacks from "./components/specialPacks";
/*import MiddleTitle from "./components/middleTitle";*/
import Comment from "./components/comment";
import Footer from "./components/footer";

// Styles
import "./index.css";
import "./styles/responsive.css"

function App() {
  
  return (
    <>
    <Header />
    <main id="content">
      <Hero />
      <Courses />
      <SpecialPacks />
      <LearnProcess />
      <Comment />
    </main>
    <Footer />
    </>
  )
}

export default App
