export default function Navbar() {

    return (

        <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ">
      <div className="container">
        <a className="navbar-brand ff" href="/">Rahafish</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white f mx-3 active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white f mx-3" href="/fish">Fish</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white f mx-3" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    )
}