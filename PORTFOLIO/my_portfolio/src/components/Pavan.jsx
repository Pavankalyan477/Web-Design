import "./pavan.css"
import { Navbar } from "./All/Navabar"
import { Home } from "./All/Home"
import { About } from "./All/About"
import { Tools } from "./All/Tools"
import { Projects } from "./All/Projects"
import { Contact } from "./All/Contact"
import { Route,Switch } from "react-router-dom"




const Pavan = () => {
  return <div>
     <Navbar/>
    {/* <Switch>
   
      <Route exact path="/Home">
        <Home/>
      </Route>
      <Route exact path="/About">
        <About/>
      </Route>
      <Route exact path="/Tools">
        <Tools/>
      </Route>
      <Route exact path="/Projects">
        <Projects/>
      </Route>
      <Route exact path="/Contact">
        <Contact/>
      </Route>
    </Switch> */}
    <Home/>
   
    <About/>

    <Tools/>

    <Projects/>

    <Contact/>


     


  </div>

}

export { Pavan }