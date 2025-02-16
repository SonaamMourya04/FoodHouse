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
const resList=[{
    "info": {
      "id": "223411",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/532a4b02-1d72-457a-ad79-f2753994868a_223411.jpg",
      "locality": "Sanctuary Metro",
      "areaName": "Golf Course",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "9.3K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-16 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-289a3387-3010-4f00-895a-e97d146a819d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/burger-king-sanctuary-metro-golf-course-rest223411",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "56982",
      "name": "Hira Sweets",
      "cloudinaryImageId": "v6rwxoyzdo3baucwg0ms",
      "locality": "Gandhi Road",
      "areaName": "Lajpat Nagar 2",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Continental",
        "Bakery",
        "Street Food",
        "Sweets",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "5155",
      "avgRatingString": "4.5",
      "totalRatingsString": "16K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-16 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-289a3387-3010-4f00-895a-e97d146a819d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/hira-sweets-gandhi-road-lajpat-nagar-2-rest56982",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "583815",
      "name": "SMOOR",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/1/d021c7a1-5eee-471e-b20f-a00858a98a8c_583815.jpg",
      "locality": "Jagadamba Road",
      "areaName": "Tughlakabad Institutional Area",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.7,
      "parentId": "3506",
      "avgRatingString": "4.7",
      "totalRatingsString": "430",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-17 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-289a3387-3010-4f00-895a-e97d146a819d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/smoor-jagadamba-road-tughlakabad-institutional-area-rest583815",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "25180",
      "name": "BTW",
      "cloudinaryImageId": "rfjhdrhqpkgrsvk1gvbf",
      "locality": "Jasola",
      "areaName": "Jasola",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Street Food",
        "North Indian",
        "Sweets"
      ],
      "avgRating": 4.2,
      "parentId": "10314",
      "avgRatingString": "4.2",
      "totalRatingsString": "32K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-23 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
            "description": "bolt!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "8.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-289a3387-3010-4f00-895a-e97d146a819d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/btw-jasola-rest25180",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "420722",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_420722.JPG",
      "locality": "H Block",
      "areaName": "Kalkaji",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Beverages",
        "Chaat",
        "Snacks",
        "Bakery",
        "Street Food",
        "healthy",
        "Home Food",
        "Maharashtrian",
        "Italian",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "281782",
      "avgRatingString": "4.6",
      "totalRatingsString": "3.2K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-17 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-289a3387-3010-4f00-895a-e97d146a819d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-h-block-kalkaji-rest420722",
      "type": "WEBLINK"
    }
  }]
                  
//RestaurabtCard
const RestaurantCard=(props)=>{
    const{resData}=props;
    //destructering
    const{
      name,
      cloudinaryImageId,
      cuisines,
      deliveryTime,
      avgRating}=resData.info;
    return(
        <div className="res-card" style={{
            background:"#f0f0f0"
        }}>
       <img 
  className="res-logo"
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
  alt={name} 
/>

       <h4>{name}</h4>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
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
              {resList.map((restaurant)=>{
                return <RestaurantCard resData={restaurant} key={restaurant.info.id}/>

              })
          }
          
          




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
