import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // Initialize with actual navigator.onLine status
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        // Define event handler functions
        const handleOffline = () => {
            setOnlineStatus(false);
        };

        const handleOnline = () => {
            setOnlineStatus(true);
        };

        // Add event listeners
        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    // Return boolean value
    return onlineStatus;
};
export default useOnlineStatus;
