import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from 'axios';
export default function Course_info() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [data, Setdata] = useState(allcourse.length > 0?allcourse:[]);
// stephen


    const handleCart = (id)=>{
            let cart = data.find((item)=>item.id == id)
            // console.log(cart)
            let object =   cart.standard_price?{
                certification: cart.certification,
                coursedetails: cart.coursedetails,
                coursename: cart.coursename,
                coursetype: cart.coursetype,
                created_at: cart.created_at,
                currency_name:cart.currency_name ,
                duration: cart.duration,
                firstletter: cart.firstletter,
                id:cart.id,
                instructor: cart.instructor,
                language: cart.language,
                learning:cart.learning ,
                lesson: cart.lesson ,
                picture: cart.picture,
                quizzes:cart.quizzes,
                rating: cart.rating,
                price:cart.standard_price,
                updated_at:cart.updated_at,
                whothiscoursefor:cart.whothiscoursefor,
            }:cart
            let Awnser =  Cart.map(item=>item.id != id)
            let ans =   Awnser.includes(false)
          if(ans == false){
            SetCart([
                ...Cart,
                object,

            ])
            let AddCart = [...Cart, object]
            localStorage.setItem('Cart', JSON.stringify(AddCart))
              let stringdata =  JSON.stringify(AddCart)
            let formData = new FormData();
            formData.append("cartitems", stringdata)
              let urltwo = `${url}/addcart`;
              axios.post(urltwo, formData).then(res=>{
                 console.log(res)
                })

          }

     }

     useEffect(()=>{
        const interval =  setInterval(()=>{
         var storage = !!localStorage.getItem('Cart')
         if(storage == true){
          let cart =   JSON.parse(localStorage.getItem('Cart'));
          SetCart(cart)

         }

        },1000)
        return () => clearInterval(interval);
     },[])


     const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

    const handleLearn=(id)=>{
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
         apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(additional == false){
                    window.location.href = `${url}/profile`;
                }else if(additional == true && res.data){
                    window.location.href =`${url}/coursevideos/${word}/${res.data}`;
                }
                })
            })

    }

    const handleEnrol = ()=>{
        window.location.href =`${url}/signup`;
    }

    const handleEnrolCom =()=>{
        window.location.href =`${url}/companyregister`;
    }
// dhdghdg
  return (
    <div id="wrapper" className="horizontal">
       <Navbar/>
       {/* hero */}
       <div className="bg-gradient-to-bl from-red-600 to-red-400 text-white lg:-mt-20 lg:pt-20">
            <div className="container p-0">
                <div className="lg:flex items-center lg:space-x-12 lg:py-14 lg:px-20 p-3">

                    <div className="lg:w-4/12">
                        <div className="w-full lg:h-52 h-40 overflow-hidden rounded-lg relative lg:mb-0 mb-4">
                            <img src={single.picture} alt="" className="w-full h-full absolute inset-0 object-cover" />
                            <a href="#trailer-modal" className="uk-position-center" uk-toggle>
                                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661244034/Tmc%20institute/icon-play_ge6wgz.svg" className="w-16 h-16" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-8/12">

                        <h1 className="lg:leading-10 lg:text-3xl text-white text-xl leading-8 font-bold">{single.coursename}</h1>
                        <p className="lg:w-4/5 mt-4 md:text-lg md:block hidden"> <Markup content={single.coursedetails.substring(0, 200)+'...'}/> </p>

                        <ul className="flex text-gray-300 gap-4 mt-4 mb-3">
                            <li className="flex items-center">
                                <span className="avg bg-yellow-500 mr-2 px-2 rounded text-white font-semiold">{single.rating == null?5:single.rating} </span>
                                <div className="star-rating text-yellow-300">
                                    <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star-half"></ion-icon>
                                </div>
                            </li>
                            <li> <ion-icon name="people-circle-outline"></ion-icon> {single.MainHead} </li>
                        </ul>
                        <ul className="lg:flex items-center text-gray-200">
                        {single.instructor == null?'':<li> Created by <a href="#" className="text-white fond-bold hover:underline hover:text-white"> {single.instructor == null?'':single.instructor} </a> </li>}
                            {/* <li> <span className="lg:block hidden mx-3 text-2xl">·</span> </li> */}
                            {/* <li> Last updated 10/2019</li> */}
                        </ul>

                    </div>

                </div>
            </div>
        </div>
       {/* end hero */}
         {/* course tabs */}
        <div className="bg-white border-b z-20 mb-4 overflow-hidden" uk-sticky="media: 992 ; offset:70">
            <div className="mcontainer py-0 lg:px-32 flex justify-between items-center">

                <nav className="cd-secondary-nav flex-1">
                    <ul className="space-x-3" uk-scrollspy-nav="closest: li; scroll: true">
                        <li><a href="#Overview" uk-scroll>Overview</a></li>
                        <li><a href="#curriculum" uk-scroll>Curriculum</a></li>
                        {/* <li><a href="#faq" uk-scroll>FAQ</a></li>
                        <li><a href="#announcement">Announcement</a></li>
                        <li><a href="#reviews">Reviews</a></li> */}
                    </ul>
                </nav>

                <div className="flex space-x-3 lg:-mr-5">
                {usercourse?
                    <a className="flex items-center justify-center h-10 px-6 rounded-md bg-gray-100 w-40 outline-none border-none cursor-pointer" onClick={()=>handleLearn(single.id)}> Start Learning</a>:username?"":
                    <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer" onClick={handleEnrolCom} > Enrol as a Company </a>
                    }
                    {usercourse?
                     <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-green-500 text-white cursor-pointer" style={{color:'white' }}> Purchased </a>:
                     username?
                     <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-blue-600 text-white cursor-pointer" onClick={()=>handleCart(single.id)} style={{color:'white' }}> {getBtnText(single.id) == 'text-2xl text-green-400'? 'In Cart': 'Add to Cart'}  </a>:
                     <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer" onClick={handleEnrol} > Enrol as a Student </a>
                    }
                </div>

            </div>
        </div>
        {/* end course tabs */}

        <article className="container p-0">
        <section className="space-y-5 lg:w-8/12 mx-auto">
            {/* course description */}
            <div className="tube-card p-5 lg:p-8" id="Overview">
                        <div className="space-y-7">
                            <div>
                                {/* <h3 className="text-lg font-semibold mb-3"> Description </h3> */}
                                <p>
                                <Markup content={single.coursedetails}/>
                                </p>
                            </div>
                            {single.whothiscoursefor == '<p><br></p>'?"":
                              <div>
                              {/* <h3 className="text-lg font-semibold mb-1"> What You’ll Learn </h3> */}
                              <p className=" w-full" >
                                  {/* <li> <i className="uil-check text-xl font-bold mr-2"></i>Setting up the environment</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Advanced HTML Practices</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Build a portfolio website</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Responsive Designs</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Understand HTML Programming</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Code HTML</li>
                                  <li> <i className="uil-check text-xl font-bold mr-2"></i>Start building beautiful websites</li> */}
                                  <Markup style={{ width:'100%' }} content={single.whothiscoursefor}/>
                              </p>
                          </div>

                            }
                           {single.certification == null?"":
                             <div>
                             {/* <h3 className="text-lg font-semibold mb-1"> Certification</h3> */}
                         </div>
                           }
                             {single.certification == null?"":<div>
                                    <p>
                                    <Markup content={single.certification}/>
                                    </p>
                            </div>}

                        </div>
                        </div>
             {/* end course description */}
              {/* course Curriculum  */}
                <div id="curriculum">
                    <h3 className="mb-4 text-xl font-semibold lg:mb-5"> Course Curriculum </h3>
                    <ul uk-accordion="multiple: true" className="tube-card p-4 divide-y space-y-3">

                        <li className="uk-open">
                            <a className="uk-accordion-title text-md mx-2 font-semibold" href="#">
                            <div className="mb-1 text-sm font-medium"> {single.MainHead} </div> {single.coursename} </a>
                            <div className="uk-accordion-content mt-3 text-base">

                                <ul className="course-curriculum-list font-medium">
                                   {video.map((item, index)=>{
                                    if(usercourse == true){
                                        return<li className=" hover:bg-gray-100 p-2 flex rounded-md items-center" key={index}>
                                        <BsFillPlayFill/> {item.courseepisodetitle} <span className="text-sm ml-auto"> {item.courseduration} </span>
                                     </li>
                                    }else{
                                        return<li className=" hover:bg-gray-100 p-2 flex rounded-md items-center" key={index}>
                                        <AiFillLock/> {item.courseepisodetitle} <span className="text-sm ml-auto"> {item.courseduration} </span>
                                     </li>
                                    }

                                   })}



                                </ul>

                            </div>
                        </li>


                    </ul>
                </div>
                  {/* end course Curriculum  */}
        </section>

        </article>

        <Footer/>
        </div>
  )
}

if(document.getElementById('courseinfo')){
ReactDOM.render(<Course_info />, document.getElementById('courseinfo'));
}

