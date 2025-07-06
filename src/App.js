import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter , RouterProvider, Outlet} from 'react-router'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import AboutClass from "./components/AboutClass";
// import Grocery from "./components/Grocery";

//Chunking 
//Code splitting 
//dynamic bundling
//lazzy loading (when app loads hoempage it will not load the grocery component when landed on grocery it will comeup)
//alos known as on demand loading 
//dynamic importing 

//lazy as named export using {} which in react library
//lazy takes callback function , import is a function take path of grocery component 
const Grocery = lazy(()=>import("./components/Grocery"));
const AboutClass = lazy(()=>import('./components/AboutClass'))
//to break down our app into smaller chunks

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
      element : <Suspense fallback={<>about us loading ....</>}><AboutClass /></Suspense>
    },
    {
      path : "/contact",
      element : <Contact />
    },
    {
      path :"/restaurants/:resId",
      element:<RestaurantMenu />
    },{
      path:"/grocery",
      element:<Suspense fallback={<>loading grocery.....</>}><Grocery/></Suspense>
    }
  ],
    errorElement :<Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
