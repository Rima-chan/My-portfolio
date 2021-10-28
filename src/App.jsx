import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
        <Header></Header>
        <Hero></Hero>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      <ScrollButton></ScrollButton>
    </div>
  );
}

export default App;
