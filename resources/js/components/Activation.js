import React from 'react'
import ReactDOM from 'react-dom'
 function Activation() {
    let url = `http://127.0.0.1:8000`;
     const handleClick =(e)=>{
        e.preventDefault();
        window.location.href = `${url}/login`;
     }
  return (
    <div className="w-full grid place-content-center">
       <article className="w-10/12 bg-white rounded-md m-auto flex flex-col items-center mt-10 sm:w-11/12 sm:m-auto sm:bg-white sm:rounded-md sm:flex sm:flex-col sm:items-center sm:mt-10  md:w-[50rem] md:bg-white md:rounded-md md:flex md:flex-row md:items-center md:mt-10  lg:w-[50rem] lg:bg-white lg:rounded-md lg:flex lg:flex-row lg:items-center lg:mt-10">
            <div className="w-full grid grid-cols-1 gap-4 p-4 sm:w-full sm:grid sm:grid-cols-1 sm:gap-4 sm:p-4 md:w-1/2 md:grid md:grid-cols-1 md:gap-4 md:p-4 lg:w-1/2 lg:grid lg:grid-cols-1 lg:gap-4 lg:p-4">
              <article className="text-3xl text-[#37226C] w-full capitalize font-bold">
                   Thank you for Signing up!
              </article>
              <span className="text-base mt-1 text-[#37226C] w-full">
                A confirmation email has been sent to your email address.
              </span>
              <span className="text-sm mt-1 text-[#37226C] w-full">
                Note: If you do not receivce  email few minutes:
              </span>
              <ul className='text-sm list-disc px-4'>
                <li>Check spam folder </li>
                <li>Verfy you entered the correct email</li>
                <li>If it is not resolved, please contact <a href='mailto:tmcinstitute-support@tmcinstitute.com' className="text-[#A32926]">tmcinstitute-support@tmcinstitute.com</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-full   md:w-1/2 md:block  lg:w-1/2  lg:block">
              <img src={layout} className=" sm:h-24 md:w-full md:h-full lg:h-full lg:w-full"/>
           </div>
       </article>
    </div>
  )
}

export default Activation;
if(document.getElementById('active')){
ReactDOM.render(<Activation/>, document.getElementById('active'));
}
