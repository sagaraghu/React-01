import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/hooks/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
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
const [userName, setUserName] = useState('');

  useEffect(()=>{
    const data ={
      name :"Raghu Sagar"
    }
    setUserName(data.name);
  },[]);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      {/* ifpath = / => body
      
       if path = /about => about componnet */}
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
    },
    {
      path:"/cart",
      element:<Suspense fallback={<>...loading</>}><Cart /></Suspense>
    }
  ],
    errorElement :<Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
