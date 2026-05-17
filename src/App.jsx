import './App.css'

function App() {
  return (
    <div className="main">

      <nav className="navbar">
        <h2>⚡ DevOpsFlow</h2>

        <div className="links">
          <a href="/">Home</a>
          <a href="/">Pipeline</a>
          <a href="/">Docker</a>
          <a href="/">AWS</a>
        </div>
      </nav>

      <div className="hero">

        <div className="left">
          <h1>
            CI/CD Pipeline <br />
            using Jenkins & Docker 🚀
          </h1>

          <p>
            Modern DevOps deployment workflow using
            React, GitHub, Jenkins, Docker and AWS EC2.
          </p>

          <button>Deployment Successful</button>
        </div>

        <div className="right">
          <div className="card">
            <h3>⚙️ Tech Stack</h3>

            <ul>
              <li>React JS</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>AWS EC2</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App