import { Link } from "react-router-dom";
import "../styles/navBar.css";
export default function NavBar() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/portfolio-website">
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="nav-menu">
          <Link to="/portfolio-website">
            <h1>HOME</h1>
          </Link>
          <Link to="/portfolio-website/projects">
            <h1>PROJECTS</h1>
          </Link>
          <Link to="/portfolio-website/contact">
            <h1>CONTACT</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
