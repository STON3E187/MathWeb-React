import Courses from "./components/courses";
import Header from "./components/header";
import Hero from "./components/hero";
import LearnProcess from "./components/learnProcess";
import SpecialPacks from "./components/specialPacks";
import MiddleTitle from "./components/middleTitle";
import Comment from "./components/comment";
import Footer from "./components/footer";
import './index.css';

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <LearnProcess />
      <MiddleTitle />
      <Courses />
      <SpecialPacks />
      <Comment />
    </main>
    <Footer />
    </>
  )
}

export default App
