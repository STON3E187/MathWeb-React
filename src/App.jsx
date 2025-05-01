import Courses from "./components/courses";
import Header from "./components/header";
import Hero from "./components/hero";
import SpecialPacks from "./components/specialPacks";
import './index.css';

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Courses />
      <SpecialPacks />
    </main>
    </>
  )
}

export default App
