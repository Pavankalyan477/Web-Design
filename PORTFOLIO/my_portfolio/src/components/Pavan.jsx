import "./pavan.css"
import profile from "./images/profile_pic.jpeg"
import resume from "./images/Pavan_resume.pdf"
import res_pic from "./images/resume.jpg"


const Pavan = () => {
    return <div>
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
                            <li><a href="#hero" data-after="Home">Home</a></li>
                            <li><a href="#about" data-after="About">About</a></li>
                            <li><a href="#services" data-after="Service">Services</a></li>
                            <li><a href="#projects" data-after="Projects">Projects</a></li>
                           
                            <li><a href="#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Header --> */}

        
  {/* <!-- Hero Section  --> */}
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>PAVAN KALYAN <span></span></h1>
        <a href="#projects" type="button" className="cta">Portfolio</a>
      </div>
      <div className="profile">
          <img className="img1" src={profile} alt="pic" />
      </div>
    </div>
  </section>
  {/* <!-- End Hero Section  --> */}

  
  {/* <!-- About Section --> */}
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src={ res_pic} alt="img"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>Dedicated and Efficient Full-stack Web Developer with a passion to
build and optimize user-focused websites. Self-motivated and task driven professional with a knack to learn new technologies. Seeking
opportunities to work with an organization that would provide me the
opportunity to enhance my skills and knowledge and to grow along
with the objectives of the organization.</p>
        <a href={resume} className="cta">Download Resume</a>
      </div>
    </div>
  </section>
  {/* <!-- End About Section --> */}

    </div>

}

export { Pavan }