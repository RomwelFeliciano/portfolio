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
      {/* Additional Comment */}
      {/* Navbar Section */}
      <Navigation />
      <main className="bg-[#F7F6F2] px-9 lg:px-40 font-league">
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
