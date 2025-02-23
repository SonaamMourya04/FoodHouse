 import { useState } from "react";

 const User =(props)=>{
    const[count,setcount]=useState(0);
    const[count1,setcount1]=useState(2);
    return( 
        <div className="user-card">
<h2>Name:{props.name}</h2>
<h2>Location:{props.location}</h2>
<h2>Contact:{props.contact}</h2>
<h1>{count}</h1>
<button
onClick={()=>{
    setcount(prevCount => prevCount + 1)
}}>Button</button>
        </div>
    );
};
export default User;
