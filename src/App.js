import "./App.css";
import portait from "../src/tiffany-shimizu (1).jpg";
import resume from "../src/tiffanyShimizuResume.pdf";

function App() {
  return (
    <div className="App">
      <div>
        <header className="wrapper">
          <nav>
            <ul className="navigationContainer">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <h3>Tiffany Shimizu Shotwell</h3>
                </a>
              </li>
              <li>
                <a href="http://">Project</a>
              </li>
              <li>
                <a href="http://">Experience</a>
              </li>
              <li>
                <a href="http://">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="heroContainer">
          <section className="hero wrapper">
            <div className="heroDiv">
              <span className="heroSpan">Front-End Developer</span>
              <h1>
                Turning Ideas into Responsive, User-Centered Web Experiences.
              </h1>
              <h2>
                I build modern, accessible websites that balance thoughtful
                design with clean, maintainable code.
              </h2>
              <div className="heroButtons">
                <button>View My Work</button>
                <button>
                  <a href={resume} download={resume}>
                    My Resume
                  </a>
                </button>
              </div>
            </div>
            <div className="portrait">
              <img src={portait} alt="Self Portrait" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
