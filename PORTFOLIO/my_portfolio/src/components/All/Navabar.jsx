import "../pavan.css"
import {Link} from "react-router-dom"
const Navbar=() =>{
    return <>
    {/* <!-- Header --> */}
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>P</span>avan <span>K</span>alyan</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Tools">Tools & Skills</Link></li>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              {/* <li><a href="#hero" data-after="Home">Home</a></li> */}
              {/* <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#services" data-after="Services">Tools & Skills</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>

              <li><a href="#contact" data-after="Contact">Contact</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Header --> */}
    </>
}
export {Navbar}