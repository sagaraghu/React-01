import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter , RouterProvider, Outlet} from 'react-router'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* ifpath = / => body
      
       if path = /about => about componnet */}
      <Outlet />
    </div>
  );
};

const appRouter  = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout />,
    children:[
      {
        path : "/",
        element : <Body />
      },
      {
      path : "/about",
      // element : <About />
      element : <AboutClass />
    },
    {
      path : "/contact",
      element : <Contact />
    },
    {
      path :"/restaurants/:resId",
      element:<RestaurantMenu />
    }
  ],
    errorElement :<Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
