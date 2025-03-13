import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/Constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${MENU_API_URL}${resId}`);
            const json = await response.json();
            setResInfo(json.data);
        };

        fetchData(); // Call the function

    }, [resId]); // Dependency array to re-run when `resId` changes

    return resInfo;
};

export default useRestaurantMenu;
