import { useEffect, useState } from "react";
import { MEALS_BY_CATEGORY_URL } from "../utils/Constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the category name from resId (we'll need to map this)
                // For now, let's get meals from a popular category
                const categoryName = getCategoryNameById(resId);
                const response = await fetch(`${MEALS_BY_CATEGORY_URL}${categoryName}`);
                const json = await response.json();

                // Transform the data to match expected structure
                const transformedData = {
                    cards: [
                        {},
                        {},
                        {
                            card: {
                                card: {
                                    info: {
                                        name: categoryName,
                                        cuisines: [categoryName],
                                        costForTwoMessage: "₹200 for two",
                                        cloudinaryImageId: json.meals?.[0]?.strMealThumb || "",
                                        areaName: "Food Category",
                                        avgRating: (4.0 + Math.random()).toFixed(1)
                                    }
                                }
                            }
                        },
                        {},
                        {
                            groupedCard: {
                                cardGroupMap: {
                                    REGULAR: {
                                        cards: json.meals ? [{
                                            card: {
                                                card: {
                                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                    title: `${categoryName} Items`,
                                                    itemCards: json.meals.slice(0, 10).map(meal => ({
                                                        card: {
                                                            info: {
                                                                id: meal.idMeal,
                                                                name: meal.strMeal,
                                                                imageId: meal.strMealThumb,
                                                                price: Math.floor(Math.random() * 500) + 100, // Random price
                                                                description: `Delicious ${meal.strMeal}`
                                                            }
                                                        }
                                                    }))
                                                }
                                            }
                                        }] : []
                                    }
                                }
                            }
                        }
                    ]
                };

                setResInfo(transformedData);
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
                setResInfo(null);
            }
        };

        fetchData(); // Call the function

    }, [resId]); // Dependency array to re-run when `resId` changes

    // Helper function to map category ID to name
    const getCategoryNameById = (id) => {
        const categoryMap = {
            '1': 'Beef',
            '2': 'Chicken',
            '3': 'Dessert',
            '4': 'Lamb',
            '5': 'Miscellaneous',
            '6': 'Pasta',
            '7': 'Pork',
            '8': 'Seafood',
            '9': 'Side',
            '10': 'Starter',
            '11': 'Vegan',
            '12': 'Vegetarian',
            '13': 'Breakfast',
            '14': 'Goat'
        };
        return categoryMap[id] || 'Chicken'; // Default to Chicken
    };

    return resInfo;
};

export default useRestaurantMenu;
