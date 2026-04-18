import "./Navbar.css";
import { House, FileUser, Phone } from "lucide-react";

import { Link } from "react-router-dom";


const NavConfig = [
    {
        name: "home",
        icon: <House className="menu-icon"  />,
        title: "Home",
        path: "/",
    },
     {
        name: "about",
        icon: <FileUser className="menu-icon"  />,
        title: "About",
        path: "/about",
    },
     {
        name: "contact",
        icon: <Phone className="menu-icon"  />,
        title: "Contact",
        path: "/contact",
    },
    
]


function Navbar({active}) {
    return (
        <div className="navbar"><span className="heading">Smart Library System</span>
            {NavConfig.map( (menuItem, index) => {
                return(
                    <Link to={menuItem.path} className={`menu-item ${active == menuItem.name ? "active-menu" : ""}`}
                    key = {index} >
                        {menuItem.icon}
                        {menuItem.title}
                    </Link>
                );
            })}
            
            
            
           
        </div>
    )
}

export default Navbar