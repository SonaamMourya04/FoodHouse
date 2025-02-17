
import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnName,setBtnName]=useState("login")
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                 className="logo"
                 src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link> Home</Link>
                        </li>
                        <li>
                        <Link to="/about"> About Us</Link>
                        </li>
                        <li>
                        <Link to="/contact"> ContactUs</Link>
                        </li>
                    
                    <button
                         className="login"
                           onClick={() => {
                setBtnName(btnName === "login" ? "logout" : "login");
              }}
            >
              {btnName}
            </button>
                </ul>

            </div>

        </div>
    )
}
export   default Header;