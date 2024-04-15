import Intropart from "./components/Intro/Intropart";
import Navbar from "./components/Navbar/Navbar";
import Skillbar from "./components/Skillbar/Skillbar";
import Work from "./components/Worksection/Work";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Intropart />
      <Skillbar />
      <Work />
      <Contact />
    </>
  );
}

export default App;
