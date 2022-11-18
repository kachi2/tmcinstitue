import React, {useState} from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import ReactDOM from 'react-dom';
function Footer() {
    let url = window.location.origin;
 const handlelink = ()=>{
  window.location.href = `${url}/privacy`;
 }
  return (
    <div className='flex flex-col item-center mt-4'>
         <div className='w-full flex flex-row items-center'>
           <section className="w-10/12 m-auto bg-[#37226C] holdingbook flex flex-col items-center h-96 rounded-md">
               <div className='w-2/5 m-auto flex flex-col items-center'>
                 <article className='w-full py-2 '>
                      <h2 className='text-4xl font-bold text-center text-white w-full'>Subscribe For Get Update</h2>
                      <h2 className='text-4xl font-bold text-center text-white w-w-full'>Every New Courses</h2>
                     </article>
                     <span className='w-full text-center text-white text-sm mt-2 py-3'>
                     20k+ students daily learn with TMC Institute. Subscribe for new courses.
                     </span>
                     <div className='w-10/12 flex flex-row items-center  py-2 m-auto'>
                         <span className='w-3/5 flex items-center'>
                          <input type="text" className="w-full py-2" />
                         </span>
                         <span className='w-1/5  flex items-center'>
                             <button className='w-full bg-[#A32926] capitalize text-sm py-2 rounded-r-lg '>Subscribe</button>
                         </span>
                     </div>
                     </div>
           </section>
       </div>

       <section className='w-full  grid grid-cols-5 gap-4 py-2'>
          <div className='flex flex-col items-center'>
              <span className=' h-12'>
              <img src={picture}  className="w-full h-full  object-cover"/>
              </span>
              <span className='flex flex-row items-center space-x-3 mt-4'>
              <button className="rounded-full h-8 w-8 grid place-content-center  bg-transparent">
              <FaFacebookF className='text-md pointer-events-none text-[#37226C]'/>
              </button>

              <button  className="rounded-full h-8 w-8 grid place-content-center  bg-transparent">
              <AiOutlineInstagram className='text-md pointer-events-none text-[#37226C]'/>
              </button>
              <button  className="rounded-full h-8 w-8 grid place-content-center  bg-transparent">
                  <AiOutlineTwitter className='text-md pointer-events-none text-[#37226C]'/>
              </button>
              <button  className="rounded-full h-8 w-8 grid place-content-center  bg-transparent">
                  <AiFillLinkedin className='text-md pointer-events-none text-[#37226C]'/>
              </button>
          </span>
          <span className='text-xs px-2 capitalize w-3/5 mt-4 text-left'>
          TMC Institute is a registered
             trademark of TMC
          </span>
          </div>


          <div className='flex flex-col '>
           <span className='text-lg text-left capitalize text-[#37226C] font-bold  '> courses</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Cooperate governance</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Financial crime prevention </span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Insurance courses</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Risk management</span>
          </div>

          <div className='flex flex-col '>
           <span className='text-lg text-left capitalize text-[#37226C] font-bold  '> Community</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Learners</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Parteners</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Developers</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Transactions</span>
          </div>

          <div className='flex flex-col '>
           <span className='text-lg text-left capitalize text-[#37226C] font-bold  '> Quick links</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>TMC</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>SNATIKA</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>LGCA</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Admissions</span>
          </div>

          <div className='flex flex-col '>
           <span className='text-lg text-left capitalize text-[#37226C] font-bold  '> More</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Press</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Investors</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2'>Terms</span>
           <span className='text-sm text-left capitalize text-[#37226C] font-thin mt-2' onClick={handlelink}>Privacy</span>
          </div>

       </section>

    </div>
  )
}
export default Footer;
if(document.getElementById('foot')) {
ReactDOM.render(<Footer/>, document.getElementById('foot'));
}
