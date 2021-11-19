import "../pavan.css"
import resume from "./images/Fw11_191_Pavan_Kalyan.pdf"
const About = () => {
    return <> 
     {/* <!-- About Section --> */}
     <section id="about">
      <div className="about container">
       
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>Full Stack Web Developer</h2>
          <p>Dedicated and Efficient Full-stack Web Developer with a passion to
            build and optimize user-focused websites. Self-motivated and task driven professional with a knack to learn new technologies.</p>
            <br/>
            <br/>
          <a href={resume} className="cta">Download Resume</a>
        </div>
      </div>
    </section>
    {/* <!-- End About Section --> */}
    </>
}
export {About}