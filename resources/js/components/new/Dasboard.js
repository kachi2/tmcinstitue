import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import { AES, enc } from 'crypto-js';
// https://github.com/brainfoolong/cryptojs-aes-php
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import { Markup } from 'interweave';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
export default function Dasboard() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
    const [cookie, Setcookie] = useState(true)
    const [showned, setShowned] = useState('')
    const [local, Setlocal] = useState(localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''});
    // const encrypt= AES.encrypt(JSON.stringify('stephen software'), 'MYKEY4DEMO').toString();
    // console.log(encrypt);
    const handleCart = (id)=>{
        let cart = data.find((item)=>item.id == id)
         let Awnser =  Cart.map(item=>item.id != id)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
           console.log(stringdata)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }
     let currencycode = currencysymbol.currency.code


    const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
    useEffect(()=>{
        let data = localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{status:'', date:''}
        if(data.date  == new Date().toLocaleDateString()){
            Setcookie(false)
        }else if(data.date != new Date().toLocaleDateString()){
          Setcookie(true)
        }


        const interval =  setInterval(()=>{
         var storage = !!localStorage.getItem('Cart')
         if(storage == true){
          let cart =   JSON.parse(localStorage.getItem('Cart'));
          SetCart(cart)

         }

        },1000)
        return () => clearInterval(interval);
     },[])
     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const handleLink =(cousetype, id)=>{
         let formData = new FormData();
         let myHeader = new Headers();
         myHeader.append('Content-Type', 'application/json')
         formData.append("id", id)
         apiClient.get('/sanctum/csrf-cookie').then( ()=> {
             let urltwo = 'api/encrypt';
            let ans = apiClient.post(urltwo, formData, myHeader).then(res=>{
                 setShowned(res.data);
                  if(res.data){
            window.location.href =`${url}/courseinfo/${cousetype}/${res.data}`;
                    }else{
                        window.location.href =`${url}`;
                    }

           })
         })


     }
    //stephen

     const handleView=()=>{
       window.location.href= `${url}/listcourses`;
     }

     function moneyTalks(converted, price){
        let naira = JSON.parse(currencyex);
        // currencysymbol, currencyex

          let answer = naira.result.NGN


        if(converted){
         return Math.round(price/ answer);
        }
        else{
         if(currencycode != 'NGN'){
             return Math.round(price / answer)
         }else{
             return Math.round(price/ answer);

         }

        }
       }


       const handleCookie =(e)=>{
        if(e.target.innerText == 'Yes'){
        // let object = localStorage.getItem('cookie')?JSON.parse(localStorage.getItem('cookie')):{}
        local['status'] = e.target.innerText;
        local['date'] = new Date().toLocaleDateString();
         localStorage.setItem('cookie', JSON.stringify(local));
         setTimeout(()=>{
           Setcookie(false)
         },1000)
        }else if(e.target.innerText == 'No'){
          let data = {status:'', date:''}
          localStorage.setItem('cookie', JSON.stringify(data));
          setTimeout(()=>{
            Setcookie(false)
          },1000)
        }
      }

  return (
    <>
    <div id="wrapper" className="horizontal">
        {/* heading */}
        <Navbar />
        {/* heading */}
        <div className="uk-position-relative uk-visible-toggle overflow-hidden mb-8 lg:-mt-4" tabindex="-1" uk-slideshow="animation: scale ;min-height: 200; max-height: 500 ;autoplay: true">

        <ul className="uk-slideshow-items rounded">
            <li>
                <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1667898233/Tmc%20institute/Group_37329_hhrub1.png" className=" w-full h-full object-contain" alt="" uk-cover />
                </div>
                <div class="container relative p-20 lg:mt-12 h-full">
                  <div uk-slideshow-parallax="scale: 1,1,0.8" className="flex flex-col justify-center h-full w-full space-y-3">
                  <span className="w-1/2 md:w-1/2 lg:w-1/2" ><h1 uk-slideshow-parallax="y: 100,0,0" className="text-lg sm:text-3xl md:text-4xl lg:text-6xl text-blue-900 font-semibold">Learn from the best</h1></span>
                  <span className="w-10/12 md:w-10/12 lg:w-10/12" ><p uk-slideshow-parallax="y: 150,0,0" className="text-xs sm:text-sm lg:text-base text-blue-900 font-medium pb-4 lg:w-1/2"> Fire up your career trajectory with a learning plan from TMC Institute</p></span>
                      {/* <a uk-slideshow-parallax="y: 200,0,50" href="#feature" className="bg-opacity-90 bg-blue-900 text-white py-1 sm:py-1 md:py-2.5 lg:py-2.5 rounded-md text-base text-center w-32"> Get Started </a> */}
                  </div>
                </div>
            </li>
            <li>
              <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                  <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1667898233/Tmc%20institute/Group_37329_hhrub1.png" className=" w-full h-full object-contain" alt="" uk-cover />
              </div>
              <div className="container relative p-20 lg:mt-12 h-full ">
                  <div uk-slideshow-parallax="scale: 1,1,0.8" className="flex flex-col justify-center h-full w-full space-y-3">
                  <span className="w-1/2 md:w-1/2 lg:w-1/2" ><h1 uk-slideshow-parallax="y: 100,0,0" className="text-lg sm:text-3xl md:text-4xl lg:text-6xl  text-red-500 font-semibold"> Learn from the best</h1></span>
                  <span className="w-10/12 md:w-10/12 lg:w-10/12" ><p uk-slideshow-parallax="y: 150,0,0" className="text-xs sm:text-sm lg:text-base text-red-500 font-medium pb-4 lg:w-1/2"> Come for the knowledge, stay for the experience. </p></span>
                      {/* <a uk-slideshow-parallax="y: 200,0,0"href="#feature" className="bg-opacity-90 bg-red-500 text-white py-1 sm:py-1 md:py-2.5 lg:py-2.5 rounded-md text-base text-center w-32"> Get Started </a> */}
                  </div>
                </div>
          </li>
        </ul>

        <a className="uk-position-center-left-out uk-position-small uk-hidden-hover slidenav-prev" href="#"
            uk-slideshow-item="previous">
                <AiOutlineArrowLeft className='block sm:block md:block lg:block'/>
            </a>
        <a className="uk-position-center-right-out uk-position-small uk-hidden-hover slidenav-next" href="#"
            uk-slideshow-item="next">
               <AiOutlineArrowRight className="block sm:block md:block lg:block" />
            </a>

        </div>


        <div className="mx-auto max-w-5xl p-4" id="feature">
        <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
                <h2 className="text-2xl font-semibold"> Featured Courses   </h2>
            </div>
            <div className="relative -mt-3" uk-slider="finite: true">
                <div className="uk-slider-container px-1 py-3">
                    <ul className="uk-slider-items uk-child-width-1-1@m uk-grid">
                        {featured.map((item, index)=>{
                        return <li key={index}>
                        <div className="bg-white shadow-sm rounded-lg uk-transition-toggle md:flex">
                            <div className="md:w-5/12 md:h-60 h-40 overflow-hidden rounded-l-lg relative"  onClick={()=>handleLink(item.coursetype, item.id)}>
                                <img src={item.picture} alt="" className="w-full h-full absolute inset-0 object-cover"/>
                                {/* <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661244034/Tmc%20institute/icon-play_ge6wgz.svg" className="w-16 h-16 uk-position-center uk-transition-fade" alt=""/> */}
                            </div>
                            <div className="flex-1 md:p-6 p-4">
                                <div className="font-semibold line-clamp-2 md:text-xl md:leading-relaxed  cursor-pointer" onClick={()=>handleLink(item.coursetype, item.id)}>{item.coursename}</div>
                                <div className="line-clamp-2 mt-2 md:block hidden"><Markup content={item.coursedetails.substring(0, 200)+'...'}/></div>
                            {username?<div className="font-semibold mt-3">{item.instructor == null?"":'By'} {item.instructor} </div>:""}
                                <div className="mt-1 flex items-center justify-between">
                                    {item.purchased?username?
                                    <div className="flex space-x-2 items-center text-sm pt-2">
                                        <button className="w-32 bg-blue-600 text-white rounded-sm py-2" onClick={()=>handleLink(item.coursetype, item.id)}>
                                            purchased
                                        </button>
                                    </div>
                                     :"":
                                     username?
                                     <div className="flex space-x-2 items-center text-sm pt-2">
                                           <div className="flex flex-row items-center" onClick={()=>handleCart(item.id)}>    {getBtnText(item.id) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                         <AiOutlineShopping  className={getBtnText(item.id)} /> </div>
                                            <div>·</div>
                                        <div> {item.lesson} lectures </div>
                                    </div>:""}

                                    {/* <div className="text-lg font-semibold"><Naira>{item.price}</Naira></div> */}
                                    {/* {moneyTalks(item.converted, item.price, item.currency_name)} */}
                                    <div className='text-lg font-semibold'>   <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={currencysymbol.currency.symbol} /></div>
                                </div>
                            </div>
                        </div>

                    </li>
                        })}


                    </ul>
                </div>

                <a className="absolute bg-white uk-position-center-left -ml-3 flex items-center justify-center p-2 rounded-full shadow-md text-xl w-11 h-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <AiOutlineArrowLeft/></a>
                <a className="absolute bg-white uk-position-center-right -mr-3 flex items-center justify-center p-2 rounded-full shadow-md text-xl w-11 h-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <AiOutlineArrowRight/></a>
            </div>

            <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
                    <h2 className="text-2xl font-semibold"> Popular Courses  </h2>
                    {/* <div className=" border-b  border-black w-full"></div> */}
            {username? <a className="text-blue-500 sm:block cursor-pointer" onClick={handleView} style={{color:'#4169E1'}}> See all Tmc Institute</a>:''}
            </div>


            <div className="mt-3">

<h4 className="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden> <ion-icon name="star"></ion-icon> Featured today </h4>

<div className="relative" uk-slider="finite: true">

    <div className="uk-slider-container px-1 py-3">
        <ul className="uk-slider-items uk-child-width-1-4@m uk-child-width-1-2@s uk-grid-small uk-grid">
          {popular.map((item, index)=>{
            return<li key={index}>
               <a className="uk-link-reset">
                <div className="bg-white shadow-sm rounded-lg uk-transition-toggle">
                    <div className="w-full h-40 overflow-hidden rounded-t-lg relative cursor-pointer" onClick={()=>handleLink(item.coursetype, item.id)}>
                        <img src={item.picture} alt="" className="w-full h-full absolute inset-0 object-cover" />
                        {/* <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661244034/Tmc%20institute/icon-play_ge6wgz.svg" className="w-12 h-12 uk-position-center uk-transition-fade" alt="" /> */}
                    </div>
                    <div className="p-4">
                        {/* .substring(0, 35) */}
                        <div className="font-semibold line-clamp-2 cursor-pointer" onClick={()=>handleLink(item.coursetype, item.id)}>{item.coursename+'...'}</div>
                        {username?item.purchased?
                          <button className="w-32 bg-blue-600 text-white rounded-sm py-2" onClick={()=>handleLink(item.coursetype, item.id)}>
                          purchased
                      </button>:<div className="flex space-x-2 items-center text-sm pt-3">
                          <div className="flex flex-row items-center" onClick={()=>handleCart(item.id)}>    {getBtnText(item.id) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                    <AiOutlineShopping  className={getBtnText(item.id)} /> </div>
                       <div>·</div>
                       <div> {item.lesson} lectures </div>
                   </div> :''}

                        <div className="pt-1 flex items-center justify-between">
                       {item.instructor == null?"":<div className="text-sm font-semibold"> {item.instructor == null?'':'By'+item.instructor}</div>}
                            {/* <div className="text-lg font-semibold"> <Naira>{item.price}</Naira> </div> */}
                            <div className='text-lg font-semibold'>

                            <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={currencysymbol.currency.symbol} />
                            </div>

                        </div>
                    </div>
                </div>
            </a>
        </li>
          })}
        </ul>

        <a className="absolute bg-white top-1/4 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <AiOutlineArrowLeft/></a>
        <a className="absolute bg-white top-1/4 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <AiOutlineArrowRight/></a>

    </div>
</div>


            {/* <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
                                            <h2 className="text-2xl font-semibold"> Latest Books </h2>
                                        <a href="#" className="text-blue-500 sm:block hidden"> See all </a>
                                    </div> */}
                            </div>

                            {/* <div className="relative" uk-slider="finite: true">
                <div className="uk-slider-container px-1 py-3">
                    <ul className="uk-slider-items uk-child-width-1-6@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387604/newimage/book/book2_oydmlj.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate">HTML Breaker</div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387605/newimage/book/book5_wpa2qj.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate"> CSS Master </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387603/newimage/book/book1_c7hfxu.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate"> Vue.js Basics </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387604/newimage/book/book2_oydmlj.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate"> HTML5 & CSS3 </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387604/newimage/book/book3_rmzepv.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate"> Learn CSS </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387605/newimage/book/book4_baaxng.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate">HTML Breaker</div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="relative overflow-hidden bg-white shadow-sm md:rounded-lg rounded-md">
                                <a href="book-description.html">
                                    <img src="https://res.cloudinary.com/okpeku/image/upload/v1655387605/newimage/book/book5_wpa2qj.png" alt="" className="w-full h-52 object-cover"/>
                                    <div className="p-3 truncate"> CSS Master </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                        href="#" uk-slider-item="previous"><AiOutlineArrowLeft/></a>
                    <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                        href="#" uk-slider-item="next"><AiOutlineArrowRight/></a>
                </div>



            </div>*/}

       {/*  this part*/}
       <div className="tube-card p-4 mt-3" uk-toggle="cls: tube-card p-4; mode: media; media: 640">
            <div className="w-full sm:my-4 my-3 flex items-end justify-between pt-3">
            <h4 className="py-3 px-5  font-semibold text-grey-700 -mx-4 -mt-3 mb-4 text-2xl"> Latest Courses </h4>
       {username? <a className="text-blue-500 sm:block cursor-pointer" onClick={handleView} style={{color:'#4169E1' }}> See all Tmc Institute </a>:""}
            </div>
            <div className="relative -mx-1" uk-slider="finite: true">
            <div className="uk-slider-container md:px-1 px-2 py-3">
                            <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid">
                                {recent.map((item, index)=>{
                                   return  <li key={index}>
                                     <a>
                                         <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                                             <img src={item.picture} alt="" className="w-full h-full absolute inset-0 object-cover"/>
                                 {/* <span class="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">12:21</span> */}
                                             {/* <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661244034/Tmc%20institute/icon-play_ge6wgz.svg" className="w-12 h-12 uk-position-center" alt=""/> */}
                                         </div>
                                     </a>
                                     <div className="pt-3">
                                         <a  className="font-semibold line-clamp-2">  {item.coursename.substring(0, 35)+'...'}  </a>
                                     {item.instructor == null?"": <p className="text-sm pt-1"> By <a href="#">  {item.instructor == null?'':item.instructor} </a> </p>}
                                     </div>
                                 </li>
                                })}



                            </ul>

                        <a className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous">  <AiOutlineArrowLeft/></a>
                        <a className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <AiOutlineArrowRight/> </a>

                        </div>
                        </div>
               </div>

      {/*  this part*/}
</div>





<Footer/>


<div className={cookie?'bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 text-white flex flex-row justify-center':'hidden'} >


<article className='w-10/12 m-auto bg-white text-black flex flex-col items-center absolute bottom-10 rounded-md py-2 px-2 lg:w-2/3 lg:m-auto lg:bg-white lg:text-black lg:flex lg:flex-col lg:items-center lg:absolute lg:bottom-10 lg:rounded-md lg:py-2 lg:px-2'>
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
     <div className='md:w-1/3 md:float-right md:flex md:flex-row md:space-x-2 lg:w-1/3 lg:float-right lg:flex lg:flex-row lg:space-x-4 '>
 <a className='text-2xl capitalize text-[#A32926] bg-white px-4 py-z rounded-md cursor-pointer' style={{ border:'1px solid #A32926;' }} onClick={(e)=>handleCookie(e)}>No</a>

      <a className='text-2xl capitalize bg-[#A32926] text-white px-4 py-z rounded-md cursor-pointer' style={{ border:'1px solid #A32926;'}} onClick={(e)=>handleCookie(e)}>Yes</a>
     </div>
 </span>
</article>
</div>

    </div>
    </>
  )
}

if(document.getElementById('newdash')){
    ReactDOM.render(<Dasboard/>, document.getElementById('newdash'));
    }


