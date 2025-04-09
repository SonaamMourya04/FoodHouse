import  foodhouselogo  from "../utils/foodhouselogo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnName,setBtnName]=useState("login");
    const OnlineStatus=useOnlineStatus();
    //subscribing to store using a selector
    const  cartItems= useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between bg-orange-500">
            <div className="w-50">
                <img 
                 className="logo"
                 src={foodhouselogo}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status:{OnlineStatus?"✅":"🔴"}
                    </li>
                    <li  className="px-4">
                        <Link> Home</Link>
                        </li>
                        <li  className="px-4">
                        <Link to="/about"> About Us</Link>
                        </li>
                        <li className="px-4">
                        <Link to="/contact"> ContactUs</Link>
                        </li>
                        <li  className="px-4">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="font-bold px-4 text-xl">
                            Cart ({cartItems.length})
                        </li>
                    
                    <button
                          className="px-4 border-2 rounded-b-xs"
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