import React, { Component } from "react"
import { Link } from "react-router-dom"

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
  state = {
    theme: "leuven",
    toggleTheme: this.toggleTheme
  }

  toggleTheme = e => {
    e.preventDefault()
    this.setState({
      theme: this.state.theme === "leuven" ? "spacemacs" : "leuven"
    })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const ThemeToggler = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme, theme }) => (
      <p>
        1.{" "}
        <a href="/" onClick={toggleTheme}>
          Toggle light/dark theme
        </a>
      </p>
    )}
  </ThemeContext.Consumer>
)

const Home = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div id="Home" className={theme}>
          <div className="theme-wrapper">
            <h1 id="andrew-jarrett" style={{ display: "none" }}>
              I’m Andrew Jarrett
            </h1>
            <div className="home-wrapper">
              <article>
                <br />
                <ul>
                  <li className="org-bullet-1">
                    <p>
                      <span>I’m Andrew Jarrett</span>
                    </p>
                  </li>
                  <br />
                  <li className="org-bullet-2">
                    <span>
                      I am a Production Team Lead at{" "}
                      <a
                        href="https://ownlocal.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        OwnLocal
                      </a>{" "}
                      and a lover of all things functional programming.
                    </span>
                  </li>
                  <br />
                  <p>- Emacs is pretty cool</p>
                  <p>
                    - Currently I’m reading{" "}
                    <a
                      href="https://www.amazon.com/Mock-Mockingbird-Raymond-Smullyan/dp/0192801422"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      To Mock a Mockingbird
                    </a>
                  </p>
                  <br />
                  <li className="org-bullet-2">
                    <span>
                      I went to undergrad at Northwestern University’s{" "}
                      <a
                        href="https://www.weinberg.northwestern.edu/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Weinberg College of Arts & Sciences
                      </a>
                      .
                    </span>
                  </li>
                  <br />
                  <li className="org-bullet-2">About me</li>
                  <br />
                  <p className="src-block src-header">
                    <span className="">Description</span>:
                  </p>
                  <p className="src-block">
                    I grew up in Denver and now live in Austin, Texas. My dog is
                    named Ash and he’s cute as hell but also a tortured soul.
                  </p>
                  <br />
                  <li className="org-bullet-2">Hire me</li>
                  <br />
                  <p>
                    - Here's a link to my{" "}
                    <Link
                      tabIndex="1"
                      to="/resume"
                      className="error home-resume-link"
                    >
                      resume
                    </Link>
                  </p>
                  <br />
                  <li className="org-bullet-3">Contact info</li>
                  <br />
                  <p>
                    -{" "}
                    <a href="mailto:ahrjarrett@gmail.com">
                      ahrjarrett@gmail.com
                    </a>
                  </p>
                  <p>
                    -{" "}
                    <a
                      href="https://github.com/ahrjarrett/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/andrewhjarrett/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <br />
                  <li className="org-bullet-3">Other cool stuff</li>
                  <br />
                  <ThemeToggler />
                  <p>
                    2.{" "}
                    <a href="https://blog.thegrepper.com/">Perfunctory blog</a>
                  </p>
                  <p>
                    3.{" "}
                    <a
                      href="https://github.com/fniessen/emacs-leuven-theme"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Leuven
                    </a>
                    , the Emacs theme this page is based on
                  </p>
                  <p>
                    4.{" "}
                    <a
                      href="https://github.com/ahrjarrett/.emacs.d/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      My Emacs config
                    </a>
                  </p>
                  <p>
                    5.{" "}
                    <a
                      href="http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Functors, Applicatives, And Monads In Pictures
                    </a>
                  </p>
                  <br />
                  <br />
                </ul>

                <div className="home-copyright">
                  <span className="copyright-symbol">©</span> Andrew Jarrett{" "}
                  {1900 + new Date().getYear()}
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)

export default Home
