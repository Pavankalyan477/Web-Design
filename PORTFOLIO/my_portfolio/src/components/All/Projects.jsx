import "../pavan.css"
import udacity from "../All/images/udacity.png"
import redbus from "../All/images/redbus.png"
import source from "../All/images/source.jpg"
import live from "../All/images/live.png"
import medium from "../All/images/midium.jpg"

const Projects = () => {
    return <> 
        <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Project 1</h1>
            <h2>Udacity.com Clone</h2>
            <p>Udacity which is an online education provider that offers online courses, popularly known as MOOCs or Massive Open Online Courses. </p>
              <h3>Tech Stack: </h3>
            <p>HTML | CSS | JavaScript </p>
            <br /><br />
            <div className="links">
              <div className="link1"><a href="https://github.com/Pavankalyan477/Project-Buddies"><img src={source} alt="source" /></a></div>
              <div className="link2"><a href="https://udacity-clone-git-master-udacity-clone.vercel.app/"><img src={live} alt="live" /></a></div>
              <div className="link3"><a href="https://medium.com/@sarakantipavankalyan070/cloning-udacity-website-c2c93d684dbf"><img src={medium} alt="blog" /></a></div>
            </div>
          </div>
          <div class="project-img">
            <img src={udacity} alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 2</h1>
            <h2>Udacity.com Clone</h2>
            <p>Udacity which is an online education provider that offers online courses, popularly known as MOOCs or Massive Open Online Courses. </p>
              <h3>Tech Stack: </h3>
            <p>HTML | CSS | JavaScript | Express Js | Mongo DB </p>
            <br /><br />
            <div className="links">
              <div className="link1"><a href="https://github.com/Pavankalyan477/Udacity_Project"><img src={source} alt="source" /></a></div>
              <div className="link2"><a href="https://udacity-clone-git-master-udacity-clone.vercel.app/"><img src={live} alt="live" /></a></div>
              <div className="link3"><a href="https://medium.com/@sarakantipavankalyan070/unit-3-construct-week-project-udacity-com-cloned-1b0ab43d7af5"><img src={medium} alt="blog" /></a></div>
            </div>
          </div>
          <div class="project-img">
            <img src={udacity} alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 3</h1>
            <h2>Redbus.com Clone</h2>
            <p>redBus is an Indian online bus ticketing platform, providing ticket booking facilities through its website, iOS, and Android mobile apps.</p>
            <h3>Tech Stack: </h3>
            <p>React Js | CSS | Styled-components | Express Js | Mongo DB </p>
            <br /><br />
            <div className="links">
              <div className="link1"><a href="https://github.com/RaniKamna/Redbus_clone"><img src={source} alt="" /></a></div>
              <div className="link2"> <a href="https://udacity-clone-git-master-udacity-clone.vercel.app/"> <img src={live} alt="live" /></a></div>
              <div className="link3"><a href="https://medium.com/@sarakantipavankalyan070/building-the-clone-of-redbus-website-c1c7c428c26f"><img src={medium} alt="" /></a></div>
            </div>
          </div>
          <div class="project-img">
            <img src={redbus} alt="img"/>
          </div>
        </div>
       
      </div>
    </div>
  </section>


     {/* Projects section */}
    </>
}
export {Projects}