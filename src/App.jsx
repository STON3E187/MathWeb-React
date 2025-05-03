import Courses from "./components/courses";
import Header from "./components/header";
import Hero from "./components/hero";
import SpecialPacks from "./components/specialPacks";
import MiddleTittle from "./components/middleTittle";
import Comment from "./components/comment";
import Footer from "./components/footer";
import './index.css';

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <MiddleTittle />
      <Courses />
      <SpecialPacks />
      <Comment />
    </main>
    <Footer />
    </>
  )
}

export default App
