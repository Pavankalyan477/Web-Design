import "../pavan.css"
import Linked from "../All/images/linked.png"
import git from "../All/images/github.png"
import twitter from "../All/images/twitter.png"
import youtube from "../All/images/youtube.png"
import medium from "../All/images/midium.jpg"

const Contact = () => {
    return <> 
    {/* <!-- Contact Section --> */}
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone" /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+91 9989175395</h2>
            {/* <h2>+1 234 123 1234</h2> */}
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"  /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>sarakantipavankalyan070@gmail.com</h2>
            {/* <h2>abcd@gmail.com</h2> */}
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Chittoor, Andhra Pradesh</h2>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>P</span>avan<span>K</span>alyan</h1>
      </div>
      <h2>You can also get in touch with me... </h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="https://github.com/Pavankalyan477"><img src={git}/></a>
        </div>
        <div class="social-item">
          <a href="https://mobile.twitter.com/PavanKalyan477"><img src={twitter} /></a>
        </div>
        <div class="social-item">
          <a href="https://www.linkedin.com/in/pavan-kalyan-3934001b4/"><img src={Linked} /></a>
        </div>
        <div class="social-item">
          <a href="https://www.youtube.com/channel/UCfuMHWHCXMU5NURurR0sfww"><img src={youtube} /></a>
        </div>
        <div class="social-item">
          <a href="https://medium.com/@sarakantipavankalyan070?source=post_page-----c1c7c428c26f-----------------------------------"><img src={medium} /></a>
        </div>
      </div>
      <p>Copyright © 2021 Pavan Kalyan. All rights reserved</p>
    </div>
  </div>
    
   
  </section>
  {/* <!-- End Contact Section --> */}

    </>
}
export {Contact}