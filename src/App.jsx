// Herramientas
import { useMediaQuery } from "react-responsive";

// Secciones Responsive
import HeaderResponsive from "./components/headerResponsive";

// Secciones
import Courses from "./components/courses";
import Header from "./components/header";
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

  const isMobile = useMediaQuery({ maxWidth: 1000 });
  
  return (
    <>
    {isMobile ? <HeaderResponsive /> : <Header />}
    <main>
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
