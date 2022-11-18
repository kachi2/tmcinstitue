import React from 'react';
import ReactDOM from 'react-dom';
export default function Companyemail() {
    let url = window.location.origin;
    const handleClick =(e)=>{
       e.preventDefault();
       window.location.href = `${url}/companylogin`;
    }
  return (
    <div className="grid place-content-center">
    <article className="w-[50rem] bg-white rounded-md flex flex-row items-center mt-10">
         <div className="w-1/2 grid grid-cols-1 gap-4">
           <article className="text-6xl text-[#37226C] w-full capitalize">
           Email Verified
           </article>
           <span className="text-lg mt-3 text-[#37226C] w-full">
           You have succesfully registering on our website.
           </span>

           <span className="w-full flex flex-row items-center justify-center mt-4">
               <button onClick={(e)=>handleClick(e)} className="px-4 py-1 rounded-md bg-[#A32926] text-white  w-36 capitalize text-2xl">
                   Sign in
               </button>
           </span>
         </div>
         <div className="w-1/2">
           <img src={lay} className="w-full"/>
        </div>
    </article>
 </div>
  )
}

if(document.getElementById('emailcompany')){
ReactDOM.render(<Companyemail/>, document.getElementById('emailcompany'));
}
