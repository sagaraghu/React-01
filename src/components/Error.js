import React from 'react';
import { useRouteError } from 'react-router'

const Error = () => {
    const errorObject = useRouteError();
    console.log("err",errorObject)
  return (
    <div><h1>Oops !!</h1> <h2>Something Went Wrong</h2><h3>{errorObject.status}:{errorObject.statusText}</h3></div>
    
  )
}

export default Error