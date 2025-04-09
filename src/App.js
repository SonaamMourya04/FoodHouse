import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";




//chunking
//code splitting
//Dynamic Bundling
//on demand loading
//lazy loading
const Grocery = lazy(() => import("./component/Grocery.js"));


const AppLayout =()=>{
    return(
        <div className="app">
           <Provider store={appStore}>
  <Header />
  <Outlet />
</Provider>
          

        </div>
    )
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            
            {
            path:"/about",
            element:<About/>
    
        },
        
       {
        path:"/contact",
        element:<Contact/>
       },
       {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>// wraping grocery in suspense so data get available before 12 millisecond and it get rens=der

    },
    {
        path:"restaurants/:resId",
        element:<RestaurantMenu/>
    }],
        errorElement:<Error/>

    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter}/>);
