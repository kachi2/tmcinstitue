import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-elastic-carousel";
import { FaThLarge, FaRegBuilding, FaClipboardList} from "react-icons/fa";
import {BsBarChartLineFill, BsBellFill, BsThreeDots} from "react-icons/bs";
import {GiClassicalKnowledge} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import {MdAdminPanelSettings, MdCall, MdOutlineDoneAll} from 'react-icons/md';
import {AiFillMessage, AiFillBell, AiFillAudio} from 'react-icons/ai';
import {IoMdSettings} from 'react-icons/io';
export default function Mycourse() {
let url = window.location.origin;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const carouselRef = useRef(null);
const onNextStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the last item, go to first item
    carouselRef.current.goTo(0);
  }
};
const onPrevStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the first item, go to last item
    carouselRef.current.goTo(business.length);
  }
};

 const handleClick =(id)=>{
   window.location.href = `${url}/aboutcourse/${id}`;
 }

    const handleLink =(e)=>{
        let hypelink = e.target.dataset.name;
       window.location.href = `${url}/${hypelink}`;
      }

  return (
    <div className='w-full flex flex-row  space-x-2'>
           <article className="w-1/5 flex flex-col items-center bg-[#37226C] h-auto">


          <ul className="w-full ">
              <li className="w-full flex flex-row items-center justify-center  space-x-2">
                  <div className="w-1/2 flex flex-row items-center space-x-2">
                  <span className="">
                    <FaThLarge className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                  overview
                </span>
                  </div>

              </li>
              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-1/2 flex flex-row items-center space-x-2">
              <span className="">
                    <BsBarChartLineFill className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                graph
                </span>
              </div>
              </li>

              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-1/2 flex flex-row items-center space-x-2">
              <span className="">
                    <GiClassicalKnowledge className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white cursor-pointer" data-name="mycourses" onClick={(e)=>handleLink(e)}>
                 My Course
                </span>
              </div>
              </li>
              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-1/2 flex flex-row items-center space-x-2">
              <span className="">
                    <HiUserGroup className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                  grades
                </span>
              </div>
              </li>
              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-1/2 flex flex-row items-center space-x-2">
              <span className="">
                    <MdAdminPanelSettings className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                   Discussion focus
                </span>
              </div>
              </li>
              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-1/2 flex flex-row items-center space-x-2">
              <span className="">
                    <FaRegBuilding className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                  Message
                </span>
              </div>
              </li>
          </ul>

          <div className="w-full  mt-24">
            <span className="w-1/2 flex flex-row items-center space-x-2 m-auto text-md text-white capitalize">
            teams
            </span>
          </div>
          <ul className="w-full  mt-2">
          <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-2/3 flex flex-row items-center space-x-2">
              <span className="">
                    <AiFillMessage className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                  Message
                </span>
              </div>
              </li>

              <li className="w-full flex flex-row items-center justify-center  space-x-2 mt-2">
              <div className="w-2/3 flex flex-row items-center space-x-2">
              <span className="">
                    <MdCall className="text-white text-md"/>
                </span>
                <span className="text-lg capitalize font-semibold text-white">
                   Call Meeting
                </span>
              </div>
              </li>

          </ul>
      </article>


        <article className='mt-10 flex flex-col items-center w-3/4'>
         <span className='w-full text-3xl  font-bold capitalize text-left p-2'>explore these free courses</span>
         {/* <section className='w-full flex flex-row items-center space-x-6'> */}

    <Carousel breakPoints={breakPoints}
  //  enableAutoPlay
  //  autoPlaySpeed={1500}
  disableArrowsOnEnd={true}
  pagination={false}
   ref={carouselRef}
   onPrevStart={onPrevStart}
   onNextStart={onNextStart}>

{videos.map((item, index) =>{
           return <div key={index}
             style={{
              display:'flex',flexDirection:"column", justifyContent:'center', alignItems:"center", // height:"300px",
               width:"300px", backgroundColor:"white",color:"black", borderRadius:"2px 2px",boxShadow:"1px 2px 3px rgba(0, 0, 0, 0.5)", margin:"6px",
               fontSize:"4em",  borderRadius:'5px 5px',padding:"irem",}}>
                <section className='w-full h-44' >
                    <img src={item.picture?item.picture:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1652449144/Tmc%20institute/Responding-to-Risk_krx85h.png'}  className="h-full w-full"/>
                  </section>
                  <span className='w-full mt-2 py-2 px-2'>
                      <article className='w-1/4 float-right flex flex-row items-center justify-center '>
                           <span className=' w-48 bg-blue-500 rounded-sm text-sm capitalize px-2 py-1 text-white'>
                               purchased
                               </span>
                      </article>
                  </span>
                  <article className='w-full py-2 px-2 mt-2'>
                   <span className='w-11/12  float-left  text-base capitalize px-2 text-[#A32926] mt-1' onClick={()=>handleClick(item.id)}>
                         {item.name}
                   </span>
                   <span className='w-2/3 float-left text-sm capitalize px-2 text-[#A32926] mt-1'>
                      {item.MainHead}
                   </span>
                  </article>
                  <div className='w-full mt-4 py-2 px-2'>
                      <article className='w-1/12'>
                          <span className='w-48 float-left text-black text-sm capitalize'>
                              course
                          </span>
                      </article>
                  </div>

            </div>
})}
  </Carousel>

    </article>


         {/* </section> */}

    </div>
  )
}


if(document.getElementById('mycourse')){
ReactDOM.render(<Mycourse/>, document.getElementById('mycourse'));
}
