import "../pavan.css"
import resume from "./images/FW11_191_Pavan_Kalyan.pdf"
import quote from "./images/quote.jpg"
const About = () => {
    return <> 
     {/* <!-- About Section --> */}
     <section id="about">
      <div className="about container">
        <div >
          <img className="col-left" src={quote} alt="quote" />
        </div>
       
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2 className="role">Full Stack Web Developer</h2>
          <p className="myself">Dedicated and Efficient Full-stack Web Developer with a passion to
            build and optimize user-focused websites. Self-motivated and task driven professional with a knack to learn new technologies. I believe in the power of programming to transform and improve the lives of people around the world.</p>
           
          <a href={resume} className="cta">Download Resume</a>
        </div>
      </div>
    </section>
    {/* <!-- End About Section --> */}
    </>
}
export {About}