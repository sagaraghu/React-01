import React, { useEffect } from 'react'

const Contact = () => {

  // useEffect(()=>{
  //   // const timer = setInterval(()=>{
  //   //   // console.log("testing mount")
  //   // },1000)

  //   //unmounting the component 

  //   return (()=>{
  //     // console.log("unmounted the component");
  //     clearInterval(timer);
  //   });
  // },[]);

  return (
    <div>
      <h1 className='m-2 p-4 font-bold text-3xl'>Contact</h1>
      <form>
        <input type="text" className='border border-black p-2 m-2' placeholder='name'/>
        <input type="text" className='border border-black p-2 m-2' placeholder='message'/>
        <button className='border border-black bg-gray-100 rounded-lg p-2 m-2'>Submit</button>
      </form>
      </div>
  )
}

export default Contact