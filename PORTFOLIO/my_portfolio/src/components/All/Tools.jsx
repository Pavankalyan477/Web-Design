import "../pavan.css"
import HTML from "./images/html.png"
import CSS from "./images/css.jpg"
import JS from "./images/javascript.jpg"
import NODE from "./images/nodejs.png"
import REACT from "./images/react.png"
import REDUX from "./images/redux.png"
import MONGODB from "./images/mongodb.png"
import JAVA from "./images/java.jpg"
import GIT from "./images/git.png"
import EXPRESS from "./images/express.png"
import DS from "./images/dsalgo.jpg"

const Tools = () => {
    return <> 
    {/* <!-- Service Section --> */}
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">Tools<span>&</span>Skills</h1>
      </div>
      <div className="service-bottom">
        <div className="service-item">
          <div className="icon"> <img src={HTML}/> </div>
          <h2>HTML</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={CSS} /></div>
          <h2>CSS</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={JS} /></div>
          <h2>JavaScript</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={JAVA} /></div>
          <h2>JAVA</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={NODE} /></div>
          <h2>Node</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={REACT} /></div>
          <h2>React</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={REDUX} /></div>
          <h2>Redux</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={MONGODB} /></div>
          <h2>MongoDB</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={EXPRESS} /></div>
          <h2>Express</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={GIT} /></div>
          <h2>Git</h2>
        </div>
        <div className="service-item">
          <div className="icon"><img src={DS} /></div>
          <h2>DS&AlGO</h2>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Service Section --> */}
    
    </>
}
export {Tools}