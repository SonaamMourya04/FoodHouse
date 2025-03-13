import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
 const [OnlineStatus, setOnlineStaus] = useState(true); // Fixed: useState instead of useEffect

    // check the online status 
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStaus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStaus(true);
        });

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("offline",()=> setOnlineStaus(false));
            window.removeEventListener("online",()=> setOnlineStaus(true));
        };

    },[]);

    //boolean value
    return OnlineStatus;
}
export default useOnlineStatus;
