import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="container mx-auto">
        <Skills></Skills>
        <Projects></Projects>
      </main>
    </div>
  
  );
}

export default App;
