import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Client from "./Client/Index";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Service from "./Service";

const Routing = () =>{
    return(
        <div>
           
            <Router>
                <Navigation/>
                <Routes>
                    <Route exact path="/" element = {<Home/>}/>
                    <Route exact path="/service" element = {<Service/>}/>
                    <Route exact path="/client" element = {<Client/>}/>
                    <Route exact path="/contact" element = {<Contact/>}/>
                        
                </Routes>
            </Router>
        </div>
    )
}

export default Routing;