import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                 className="logo"
                 src="https://img.freepik.com/premium-vector/logo-food-house-with-logo-that-says-food-house_1205884-2263.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

//RestaurabtCard
const RestaurantCard=()=>{
    return(
        <div className="res-card" style={{
            background:"#f0f0f0"
        }}>
       <img  className="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
       <h4>Chinese work</h4>
       <h4>hakka noodles,fried rice, chill potato , manchurian</h4>
       <h4>4.4 star</h4>
       <h4>38 min</h4>
       </div>
    )
}

//Body
const Body =()=>{
    return(
        <div className="body">
            <div className="Search">
             Search
            </div>
            <div className="res-container">
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>

            </div>

        </div>
    )
} 



const AppLayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
