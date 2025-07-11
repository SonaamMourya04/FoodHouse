import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";
import TopRatedFood from "./component/TopRatedFood.js";
import OfflineBanner from "./component/OfflineBanner.js";
import Login from "./component/Login.js";
import Footer from "./component/Footer.js";


const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <OfflineBanner />
        <Header />
        <Outlet />
      </Provider>
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/top-rated",
        element: <TopRatedFood />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
