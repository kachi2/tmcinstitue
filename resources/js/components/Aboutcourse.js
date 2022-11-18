import React from 'react';
import ReactDOM from 'react-dom';
import { Markup } from 'interweave';
import { FaThLarge, FaRegBuilding, FaClipboardList} from "react-icons/fa";
import {BsBarChartLineFill, BsBellFill, BsThreeDots} from "react-icons/bs";
import {GiClassicalKnowledge} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import {MdAdminPanelSettings, MdCall, MdOutlineDoneAll} from 'react-icons/md';
import {AiFillMessage, AiFillBell, AiFillAudio} from 'react-icons/ai';
import {IoMdSettings} from 'react-icons/io';
export default function Aboutcourse() {
    let url = window.location.origin;
    const handleLink =(e)=>{
        let hypelink = e.target.dataset.name;
       window.location.href = `${url}/${hypelink}`;
      }

  return (
    <div className='w-full flex flex-row'>
              <article className="w-1/5 flex flex-col items-center bg-[#37226C] h-auto">
          <ul className="w-full  mt-4">
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


        <article className='w-3/4'>
        <section className='w-11/12 m-auto capitalize text-6xl text-blue-500 text-left font-bold mt-4 '>
            About this course
        </section>
        <article className='w-11/12 m-auto h-[30rem] mt-2'>
            <img src={coursedetail.picture?coursedetail.picture:""} className='h-full w-full object-cover' />
        </article>


         <article className='w-11/12 m-auto flex flex-row  mt-1'>
         <div className='w-10/12 m-auto flex flex-col items-center'>
        <section className='text-2xl text-left font-medium capitalize w-full  text-[#A32926]'>{coursedetail.coursename}</section>
        <div className='text-sm capitalize text-left  w-full m-auto py-2 tracking-widest'>
         <Markup content={coursedetail.coursedetails?coursedetail.coursedetails:""}/>
        </div>

         {coursedetail.certification == null?"":<span className=' text-lg text-left  w-full mt-2 font-medium capitalize text-[#A32926]'>certification</span>}
        {coursedetail.certification == null? "":<div className='text-sm capitalize text-left  w-full m-auto tracking-widest'>
          <Markup content={coursedetail.certification?coursedetail.certification:""}/>
        </div>}

         {coursedetail.whothiscoursefor == "<p><br></p>"?"":<span className='text-lg text-left  w-full mt-2 font-medium capitalize text-[#A32926]'>who this course for</span>}
         {coursedetail.whothiscoursefor == "<p><br></p>"?"":  <div className='text-sm capitalize text-left  w-full m-auto tracking-widest'>
         <Markup content={coursedetail.whothiscoursefor?coursedetail.whothiscoursefor:""}/>
        </div>}



        </div>
           <article className='w-1/6 py-2'>
            <ul className='w-full mt-9'>
              <li className='flex flex-row gap-3 '>
                <span className='text-base capitalize font-bold'>instructor:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.instructor == null?'no iinstructor yet':coursedetail.instructor}</span>
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <span className='text-base capitalize font-bold'>price:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.price == null?"":coursedetail.price}</span>
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <span className='text-base capitalize font-bold'>duration:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.duration == null?"":coursedetail.duration}</span>
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <span className='text-base capitalize font-bold'>venue:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.venue == null?"":coursedetail.venue}</span>
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <span className='text-base capitalize font-bold'>language:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.language == null?"":coursedetail.language}</span>
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <span className='text-base capitalize font-bold '>access:</span>
                <span className='text-base font-thin capitalize'>{coursedetail.access == null?"":coursedetail.access}</span>
              </li>
            </ul>
           </article>
         </article>
        </article>



    </div>
  )
}

if(document.getElementById('aboutcorse')){
ReactDOM.render(<Aboutcourse/>, document.getElementById('aboutcorse'));
}
