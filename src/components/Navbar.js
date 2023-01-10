import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { navStruct } from "../Utils/Navbarutils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {

  const location = useLocation();
  const [navStructState, setNavStructState] = useState(navStruct);

  useEffect(() => {
    const _navStruct = navStructState.map((item) => {
        if (item.path === location.pathname) {
            item.isActive = true;
        } else {
            item.isActive = false;
        }

        return item;
    })

    setNavStructState(_navStruct);

}, [location])


    return (

        <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ">
      <div className="container">
        <a className="navbar-brand ff" href="/"><FontAwesomeIcon icon={faFish} />Rahafish</a>
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
              <a id="home" className={`nav-link text-white f mx-3  ${navStructState[0].isActive ? "active" : ""}`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a id="fish" className={`nav-link text-white f mx-3  ${navStructState[1].isActive ? "active" : ""}`} href="/fish">Fish</a>
            </li>
            <li className="nav-item">
              <a id="login" className={`nav-link text-white f mx-3 ${navStructState[2].isActive ? "active" : ""}`} href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    )
}