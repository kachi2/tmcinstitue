import React from 'react'
import ReactDOM from 'react-dom'
 function EmailVerified() {
    let url = window.location.origin;
    const handleClick =(e)=>{
       e.preventDefault();
       window.location.href = `${url}/login`;
    }
  return (
    <div className="  md:flex md:items-center  lg:grid lg:place-content-center">
    <article className="md:w-full  lg:w-[50rem] bg-white rounded-md flex flex-col-reverse sm:flex sm:flex-col-reverse  md:flex md:flex-row md:items-center  lg:flex lg:flex-row lg:items-center mt-10">
         <div className="w-full sm:w-full  md:w-full lg:w-1/2 grid grid-cols-1 gap-4">
           <article className=" text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold text-[#37226C] w-full capitalize">
           Email Verified
           </article>
           <span className="text-lg mt-3 text-[#37226C] w-full">
           You have succesfully registering on our website.
           </span>

           <span className="w-full flex flex-row items-center justify-center mt-4">
               <button onClick={(e)=>handleClick(e)} className="px-4 py-1 rounded-md bg-[#A32926] text-white w-28 sm:w-28 md:w-32 lg:w-36 capitalize  text-sm sm:texttext-base md:text-lg lg:text-2xl">
                   Sign in
               </button>
           </span>
         </div>
         <div className=" md:w-full lg:w-1/2">
           <img src={lay} className="w-full"/>
        </div>
    </article>
 </div>
  )
}

export default EmailVerified;
if(document.getElementById('email')){
ReactDOM.render(<EmailVerified />, document.getElementById('email'))
}

