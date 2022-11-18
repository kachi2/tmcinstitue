import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BsSearch} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
function Landing() {
    let url = `${window.location.origin}/`;
    const [hover, Sethover] = useState(0)
    const [cookie, Setcookie] = useState(true)
    const [local, Setlocal] = useState(localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''});
  const handlemouse = (e)=>{
   Sethover(e.target.dataset.id)
  }
  const handleLeave = (e)=>{
    if(e.target){
        Sethover(0)
    }
  }


   const handleCookie =(e)=>{
     if(e.target.innerText == 'Yes'){
     local['status'] = e.target.innerText;
     local['date'] = new Date().toLocaleDateString();
      localStorage.setItem('cookie', JSON.stringify(local));
      setTimeout(()=>{
        Setcookie(false)
      },1000)
     }else if(e.target.innerText == 'No'){
        Setcookie(true)
     }
   }


     useEffect(()=>{
        let data = localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''}
        if(data.date  == new Date().toLocaleDateString()){
            Setcookie(false)
        }else if(data.date != new Date().toLocaleDateString()){
          Setcookie(true)
        }

     },[])


    return (
    <article className='flex flex-col' >
         <article className='w-full bg-white'>
        <div className="w-2/3 m-auto  flex flex-row items-center ">
          <section className='w-1/2 flex flex-col px-5'>
           <div className='w-full text-left text-[#A32926] text-md'>
           Never Stop Learning
           </div>
           <div className='w-full text-left text-[#37226C] mt-4'>
            <h2 className='text-4xl uppercase'>TMC</h2>
            <h2 className='text-4xl  uppercase'>institute</h2>
           </div>
           <div className='w-full text-left text-[#37226C] mt-4'>
             <h4 className='text-sm text-left'>
             We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance,
             Financial Crime Prevention, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.
            </h4>
           </div>

            <div className='w-3/4 flex flex-row items-center  justify-between  rounded-md py-2 text-[#A32926] bordercolor  mt-4 px-4'>
             <span className='w-1/5 flex flex-row items-center border-r py-1'>
                 <h2 className="capitalize text-md">courses</h2>
                 <MdOutlineKeyboardArrowDown className='pointer-events-none'/>
             </span>
             <span className="w-2/5">
              <input type="text" className="w-full outline " />
             </span>
             <span className='w-1/6 grid place-content-center '>
               <button className=' flex flex-row items-center py-1 bg-[#A32926] text-white rounded-md px-2 w-20'>
                <BsSearch className='pointer-events-none text-xs'/>   search
               </button>
             </span>
            </div>
          </section>
          <section className='w-1/2'>
        <img src={mainimg} />
          </section>
        </div>
       </article>

       <article className='w-full grid place-content-center bg-#F7F5FA'>
         <div className='m-auto  w-1/2 grid place-content-center mt-2'>
          <span className=' font-bold text-[#37226C] grid place-content-center'>
        <h2 className='text-3xl capitalize text-center'>High quality video, audio</h2>
        <h2 className='text-3xl capitalize text-center mt-1'>& popular classes</h2>
          </span>
          <section className='text-sm capitalize text-capitalize text-[#37226C] text-center mt-2'>
         TMC INSTITUTE has successfully conveyed the training courses throughout the region with clients that continue to grow every year,
         capitalizing on our in-depth knowledge of the needs of organizations and financial institutions.
         </section>
         <span className='w-full grid place-content-center mt-2'>
           <button className='bg-[#A32926] text-white flex flex-row items-center py-2 px-2 rounded-md '>
               view courses
           </button>
         </span>
         </div>

         <section className='m-auto w-2/3 grid place-content-center mt-2 '>
           <img src={videoimg} className="h-full w-full" />
         </section>

         <section className='m-auto w-2/3 flex  flex-row  items-center justify-content-center space-x-3 '>
         <span className='w-44 flex flex-row items-center bg-[#FFFFFF] px-2 py-3 rounded-md space-x-1 drop-shadow-md'>
          <div className='w-6 h-6'>
              <img src={audio}  className='h-full w-full'/>
          </div>
          <div>
          <h2 className='capitalize text-sm text-left w-32'>Audio classes</h2>
          </div>
         </span>

         <span className='w-44 flex flex-row items-center bg-[#FFFFFF] px-2 py-3 rounded-md space-x-1 drop-shadow-md'>
          <div className='w-6 h-6'>
              <img src={live} className='h-full w-full'/>
          </div>
          <div>
          <h2 className='capitalize text-sm text-left w-32'>live classes</h2>
          </div>
         </span>

         <span className='w-48 flex flex-row items-center border bg-[#FFFFFF] space-x-1 px-2 py-3 rounded-md  space-x-1 drop-shadow-md'>
          <div className='w-6 h-6'>
              <img src={records} className='h-full w-full'/>
          </div>
          <div>
          <span className='capitalize text-sm text-left w-32'>recorded classes</span>
          </div>

         </span>
         </section>
       </article>
       <div className='w-full  grid place-content-center'>
          <section className='w-1/2 m-auto grid place-content-center py-2 mt-4'>
          <span className='text-3xl text-[#37226C] capitalize text-center font-bold mt-2'>Courses Categories</span>
          <span className='text-center m-auto capitalize text-[#37226C] w-2/4  text-center mt-4'>
          We are the leading and specialist provider of specialized corporate training including Governance, Risk & Compliance,
          Financial Crime, and Leadership training focused on cultivating the right attitude and skills in your teams.
          </span>


             <div className='w-full flex flex-row items-center mt-7 space-x-4'>
                 <span className='w-1/3 grid place-content-center'>
                 <button className={hover == 1?'w-32 capitalize rounded-md btn bg-[#A32926] text-white':'w-32 capitalize rounded-md btn'}  onMouseOver={(e)=>handlemouse(e)} onMouseLeave={(e)=>handleLeave(e)} data-id="1">
                first level
                </button>
                 </span>
                 <span className='w-1/3 grid place-content-center'>
                 <button  onMouseOver={(e)=>handlemouse(e)} onMouseLeave={(e)=>handleLeave(e)} data-id="2" className={hover == 2 || hover == 0 ?`w-32 capitalize rounded-md btn bg-[#A32926]  text-white`:'w-32 capitalize rounded-md btn'}>
                   second level
                  </button>
                     </span>
                     <span className='w-1/3 grid place-content-center'>
                     <button onMouseOver={(e)=>handlemouse(e)}  onMouseLeave={(e)=>handleLeave(e)} data-id="3"  className={hover == 3?'w-32 capitalize rounded-md btn bg-[#A32926] text-white':'w-32 capitalize rounded-md btn'} >
                     third level
                  </button>
                     </span>
             </div>
             <article className="w-full  grid grid-cols-3 gap-4  px-2 mt-4">

                       <section className="bg-[#FFFFFF] drop-shadow-md grid place-content-center gap-6  py-2 rounded-md">
                           <span className="rounded-full   w-14  h-14 grid  place-content-center bg-[#F9880D] text-center m-auto text-lg text-white">
                                1
                           </span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center text-2xl">Standard One</span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center ">
                           Standard 1 is a foundation Standard
                            that reflects 7 important concepts...
                           </span>

                              <span className="w-full grid place-content-center">
                                  <button className="px-2 py-2 text-center grid place-content-center bordercolortwo rounded-md text-[#37226C] text-sm w-40 bg-transparent">
                                  Class Details
                                  </button>
                              </span>
                       </section>

                       <section className="bg-[#FFFFFF] drop-shadow-md grid place-content-center gap-6  py-2 rounded-md">
                           <span className="rounded-full   w-14  h-14 grid  place-content-center bg-[#424242] text-center m-auto text-lg text-white">
                                2
                           </span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center text-2xl">Standard Two</span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center ">
                           Standard 1 is a foundation Standard
                            that reflects 7 important concepts...
                           </span>

                              <span className="w-full grid place-content-center">
                                  <button className="px-2 py-2 text-center grid place-content-center bordercolortwo rounded-md text-[#37226C]  text-[#37226C] text-sm w-40 bg-transparent">
                                  Class Details
                                  </button>
                              </span>
                       </section>


                       <section className="bg-[#FFFFFF] drop-shadow-md grid place-content-center gap-6  py-2 rounded-md">
                           <span className="rounded-full   w-14  h-14 grid  place-content-center bg-[#07E5CA] text-center m-auto text-lg text-white">
                                3
                           </span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center text-2xl">Standard Three</span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center ">
                           Standard 1 is a foundation Standard
                            that reflects 7 important concepts...
                           </span>

                              <span className="w-full grid place-content-center">
                                  <button className="px-2 py-2 text-center grid place-content-center bordercolortwo rounded-md text-[#37226C] text-[#37226C] text-sm w-40 bg-transparent">
                                  Class Details
                                  </button>
                              </span>
                       </section>

                       <section className="bg-[#FFFFFF] drop-shadow-md grid place-content-center gap-6  py-2 rounded-md">
                           <span className="rounded-full   w-14  h-14 grid  place-content-center bg-[#424242] text-center m-auto text-lg text-white">
                                4
                           </span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center text-2xl">Standard Four</span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center ">
                           Standard 1 is a foundation Standard
                            that reflects 7 important concepts...
                           </span>

                              <span className="w-full grid place-content-center">
                                  <button className="px-2 py-2 text-center grid place-content-center bordercolortwo rounded-md text-[#37226C] text-sm w-40 bg-transparent">
                                  Class Details
                                  </button>
                              </span>
                       </section>


                       <section className="bg-[#FFFFFF] drop-shadow-md grid place-content-center gap-6  py-2 rounded-md">
                           <span className="rounded-full   w-14  h-14 grid  place-content-center bg-[#07E5CA] text-center m-auto text-lg text-white">
                                5
                           </span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center text-2xl">Standard Four</span>
                           <span className="w-11/12 text-sm  px-2 m-auto text-center ">
                           Standard 1 is a foundation Standard
                            that reflects 7 important concepts...
                           </span>

                              <span className="w-full grid place-content-center">
                                  <button className="px-2 py-2 text-center grid place-content-center bordercolortwo rounded-md text-[#37226C] text-sm w-40 bg-transparent">
                                  Class Details
                                  </button>
                              </span>
                       </section>


                     </article>
          </section>
       </div>


       <article className="w-full flex flex-row items-center  py-4">

                <section className="w-3/4 flex flex-row items-center  border  border-indigo-500  m-auto imageback h-[44rem] py-4 rounded-md shadow-md bg-[#EDE9F2]">
                    <div className="w-1/2  flex flex-col px-8">
                      <span className="w-full ">
                      <span className="w-1/3 float-left">
                   <button className=" bg-[#E4E2F4]  capitalize py-2 text-lg rounded-md text-2xl">
                   College Level
                   </button>
                         </span>
                      </span>
                      <span className="w-full flex flex-col mt-10 ">
                            <h2 className="text-6xl  capitalize text-[#0A033C] font-bold">Don’t waste time in COVID-19 pandemic.</h2>
                            <h2 className="text-6xl capitalize text-[#0A033C] font-bold">Develop your skills.</h2>
                         </span>
                         <span className="w-3/5 mt-10">
                         High-definition video is video of higher resolution and quality than standard-definition.
                          While there is no standardized meaning for high-definition, generally any video
                         </span>
                         <span className="w-3/5 mt-10">
                             <button className="bg-[#A32926] text-white capitalize py-2 rounded-md px-2">
                                  Register Now
                             </button>
                         </span>
                    </div>
                </section>
       </article>
       <article className='w-full '>
           <div className="h-[44rem] w-3/4 flex flex-row items-center m-auto">
           <section className='w-1/2 '>
                 <img src={image} />
                </section>
                <section className='w-1/2 py-3 grid grid-cols-1 gap-2'>
                <div className='w-full font-bold capitalize text-[#37226C]'>
                <h2 className='text-6xl'>Want to share your</h2>
                <h2 className='text-6xl'>knowledge? Join us</h2>
                <h2 className='text-6xl'>a Mentor</h2>
                </div>
                <section className="w-96 capitalize text-[#37226C]  text-sm py-3 mt-2">
                High-definition video is video of higher resolution and quality than standard-definition.
                 While there is no standardized meaning for high-definition, generally any video.
                </section>
                <span className='w-72 mt-4 py-2'>
                    <button className='bg-[#A32926] text-white capitalize px-2 py-2 rounded-md'>
                    Career Information
                    </button>
                </span>
    </section>
           </div>
       </article>


       <div className={cookie?'bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 text-white flex flex-row justify-center':'hidden'} >


       <article className='w-2/3 m-auto bg-white text-black flex flex-col items-center absolute bottom-10 rounded-md py-2 px-2'>
        <span className='px-3 w-full  h-44 overflow-y-scroll'>
            <h2 className=' font-medium text-3xl text-[#A32926] text-left'>Cookie</h2>
            <p className='text-left text-black '>
Cookies are text files placed on your computer to collect standard internet log information and visitor behaviour information. This information is used to track visitor use of the website and to compile statistical reports on website activity. Our website takes advantage of this facility to enhance your experience. The cookies we use are described below.
You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
You can find more general information about cookies at www.allaboutcookies.org

            </p>
            <h2 className=' font-medium text-3xl text-[#A32926] text-left'>Google Analytics cookies</h2>
            <p className='text-left text-black '>
            Technical information which included the IP Address used by the third party to connect the computer to the internet, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
Google Analytics is a website monitoring tool that allows users to see volumes of website visitors, their source, and to analyse how the content of their website is viewed and navigated. This in turn allows optimisation of the content and pages on www.agrc.org and the marketing programs that drive traffic to the website. Google Analytics does not store any personal information about website visitors but does use persistent cookies to identify repeat visitors. You may universally opt-out of all
 Google Analytics tracking used by all websites by visiting the following url https://tools.google.com/dlpage/gaoptout.
Email Marketing Post-Click Tracking Cookies
These cookies are used to report on the pages of www.tmcinstitute.com that have been viewed by visitors to the site who have followed links from our email marketing campaigns. This analysis helps us to understand additional content that is viewed by the contacts in our database and therefore allows us to improve and tailor future campaigns to those contact's specific areas of interest.
Targeting (re-targeting) Cookies
These cookies collect several pieces of information about your browsing habits. This is in order to provide you with targeted adverts more relevant to you and your interests. Cookies are usually placed by advertising networks. They remember that you have visited a website and this information is shared with other organisations or organisations we have asked to do so on our behalf.
Re-targeting cookies remember that you have visited our website and enable us to serve you with advertising when you are visiting other sites (for example to remind you of products and services you were interested in). Other retargeting cookies may remember terms that you have used on search engine queries so that we can serve you with advertising for products and services relevant to those search terms.

            </p>
             </span>

        <span className='w-full py-2'>
            <div className='w-1/4 float-right flex flex-row space-x-4 '>
        <button className='text-2xl capitalize text-[#A32926] bg-white px-4 py-z rounded-md' style={{ border:'1px solid #A32926;' }} onClick={(e)=>handleCookie(e)}>No</button>

             <button className='text-2xl capitalize bg-[#A32926] text-white px-4 py-z rounded-md' style={{ border:'1px solid #A32926;'}} onClick={(e)=>handleCookie(e)}>Yes</button>
            </div>
        </span>
       </article>
       </div>

        </article>
    );
}

export default Landing;

if (document.getElementById('example')) {
    ReactDOM.render(<Landing />, document.getElementById('example'));
}
