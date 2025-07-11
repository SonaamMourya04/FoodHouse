
// TheMealDB API URLs - No CORS issues, completely free!
export const CDN_URL = ""; // TheMealDB provides full image URLs

// Get meal categories (we'll use these as "restaurant categories")
export const RESTAURANTS_API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

// Get meals by category (like getting menu items)
export const MEALS_BY_CATEGORY_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

// Get meal details by ID (like getting restaurant menu details)
export const MEAL_DETAILS_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Get random meals (for variety)
export const RANDOM_MEALS_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Alternative APIs (CORS-free options)
// Open Food Facts API - Food products database
export const OPEN_FOOD_FACTS_SEARCH = "https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=";

// USDA FoodData Central (requires free API key)
export const USDA_FOOD_SEARCH = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=";