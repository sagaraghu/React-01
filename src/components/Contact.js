import React, { useEffect } from 'react'

const Contact = () => {

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("testing mount")
    },1000)

    //unmounting the component 

    return (()=>{
      console.log("unmounted the component");
      clearInterval(timer);
    });
  },[]);

  return (
    <div>Contact</div>
  )
}

export default Contact