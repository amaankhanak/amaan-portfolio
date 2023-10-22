import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="all_contents">
        <Banner />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
      <div class="action">
        <a
          href="https://api.whatsapp.com/send/?phone=918076765125&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default App;
