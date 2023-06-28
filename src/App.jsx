import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Expertise from "./components/Expertise";
import WorkExperiences from "./components/WorkExperiences";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Navigation />
      <main className="bg-sky-200 px-9 lg:px-40">
        {/* Home Section */}
        <Home />
        {/* Skills Section */}
        <Expertise />
        {/* Work Experiences Section */}
        <WorkExperiences />
        {/* Projects Section - Next Gawin Tomorrow */}
      </main>
    </>
  );
}

export default App;
