import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () =>{
    return(
        <div className="sidebar">
            <Link to="/" href="#home"><i className="fa fa-fw fa-home">Home</i></Link>
            <Link to ="/service" href="#service"><i className="fa fa-fw fa-wrench">Service</i></Link>
            <Link to="client" href="#client"><i className="fa fa-fw fa-user"></i> Client</Link>
            <Link to="contact" href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</Link>
        </div>
    )
}
export default Navigation;