
import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnName,setBtnName]=useState("login");
    const OnlineStatus=useOnlineStatus();
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
                        Online status:{OnlineStatus?"✅":"🔴"}
                    </li>
                    <li>
                        <Link> Home</Link>
                        </li>
                        <li>
                        <Link to="/about"> About Us</Link>
                        </li>
                        <li>
                        <Link to="/contact"> ContactUs</Link>
                        </li>
                        <li>
                            Cart
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