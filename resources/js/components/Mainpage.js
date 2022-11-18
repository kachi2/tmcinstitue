import React from 'react'
import ReactDOM from 'react-dom';
import { FaThLarge, FaRegBuilding, FaClipboardList} from "react-icons/fa";
import {BsBarChartLineFill, BsBellFill, BsThreeDots} from "react-icons/bs";
import {GiClassicalKnowledge} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import {MdAdminPanelSettings, MdCall, MdOutlineDoneAll} from 'react-icons/md';
import {AiFillMessage, AiFillBell, AiFillAudio} from 'react-icons/ai';
import {IoMdSettings} from 'react-icons/io';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFusioncharts from "react-fusioncharts";
import Navbar from './new/Navbar';
// https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript
 function Mainpage() {
let url = window.location.origin;
    const handleLink =(e)=>{
        let hypelink = e.target.dataset.name;
       window.location.href = `${url}/${hypelink}`;
      }

      ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
      const chartData = [
          {
            label: "Sem 1",
            value: "290"
          },
          {
            label: "Sem 2",
            value: "260"
          },
          {
            label: "Sem 3",
            value: "180"
          },
          {
            label: "Sem 4",
            value: "140"
          },
          {
            label: "Sem 5",
            value: "115"
          },
          {
            label: "Sem 6",
            value: "100"
          },
          {
            label: "Sem 7",
            value: "30"
          },
          {
            label: "Sem 8",
            value: "30"
          }
        ];

        const chartConfigs = {
          type: "column2d", // The chart type
          width: "100%", // Width of the chart
          height: "50%", // Height of the chart
          dataFormat: "json", // Data type
          dataSource: {
            // Chart Configuration
            chart: {
              //Set the chart caption
              caption: "Semester Grade",
              //Set the chart subcaption
              //subCaption: "In MMbbl = One Million barrels",
              //Set the x-axis name
              xAxisName: "Semesters",
              //Set the y-axis name
              yAxisName: "Grade",
              numberSuffix: "K",
              //Set the theme for your chart
              theme: "fusion"
            },
            // Chart Data
            data: chartData
          }
        };

        Charts(FusionCharts);
        const dataSource = {
          chart: {
            caption: "Market Share of Web Servers",
            plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
            showlegend: "1",
            showpercentvalues: "1",
            legendposition: "bottom",
            usedataplotcolorforlabels: "1",
            theme: "fusion",
          },
          data: [
            {
              label: "Apache",
              value: "32647479"
            },
            {
              label: "Microsoft",
              value: "22100932"
            },
            {
              label: "Zeus",
              value: "14376"
            },
            {
              label: "Other",
              value: "18674221"
            }
          ]
        };

        const handlpage=(e)=>{
            e.preventDefault();
          console.log(e.target)
        //   usercourses
        let hypelink = e.target.dataset.name;
        window.location.href = `${url}/${hypelink}`;
        }

  return (
    <div id="wrapper" class="horizontal">
    <Navbar/>

    <div className="w-full flex flex-row ">

      <article className=" hidden  md:w-1/6 md:flex md:flex-col md:items-center md:bg-[#37226C] md:h-auto lg:w-1/6 lg:flex lg:flex-col lg:items-center lg:bg-[#37226C] lg:h-auto">
          {/* <span className="w-32">
            <img src={picture} alt="logo" className="w-full h-full"/>
          </span> */}

          <ul className="w-full  mt-32">
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
                <span className="text-lg capitalize font-semibold text-white cursor-pointer"  data-name="usercourses"  onClick={(e)=>handlpage(e)}>
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

      <div className="  w-full flex flex-col item-center bg-[#F7F5FA] md:w-10/12 md:flex md:flex-col md:item-center md:bg-[#F7F5FA]  lg:w-10/12 lg:flex lg:flex-col lg:item-center lg:bg-[#F7F5FA]">
      <section  className="w-full  m-auto flex flex-col item-center bg-[#F7F5FA]     md:w-11/12  md:m-auto md:flex md:flex-row md:item-center md:bg-[#F7F5FA] lg:w-11/12 lg:m-auto lg:flex lg:flex-row lg:item-center  lg:bg-[#F7F5FA]">
          <div className="w-11/12 flex flex-col items-center">
              <span className="w-full text-left capitalize text-sm">
              Hello {username}, Welcome back 👋🏻
              </span>
              <span className="w-full text-left capitalize text-3xl">
              Your Dashboard today
              </span>
          </div>
          <div className=" w-1/6 h-full flex items-center space-x-4 bg-[#F7F5FA] float-right px-3      md:w-1/6 md:h-full md:flex md:items-center md:space-x-5 md:bg-[#F7F5FA]  lg:w-1/6 lg:h-full lg:flex lg:items-center lg:space-x-8 lg:bg-[#F7F5FA]">
            <span className="relative">
                <BsBellFill className=" text-base  md:text-2xl lg:text-2xl"/>
                <span className="rounded-full bg-red-500 absolute h-4 w-4 grid place-content-center text-white top-2 left-3">
                    0
                </span>
            </span>
            <span className="">
                <IoMdSettings className=" text-base  md:text-2xl lg:text-2xl" />
            </span>
            <span className="">
                  <article className="w-10 rounded-md bg-[#EAEEFD] flex flex-row items-center justify-center py-2   md:w-16 md:rounded-md md:bg-[#EAEEFD] md:flex md:flex-row md:items-center md:justify-center md:py-2   lg:w-16 lg:rounded-md lg:bg-[#EAEEFD] lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-2">
                   <img src={userimage}  className="h-full w-8 rounded-full  md:h-full md:w-10 md:rounded-full  lg:h-full lg:w-10 lg:rounded-full"/>
                  </article>
            </span>
          </div>
      </section>
      <article className=" w-full flex flex-col md:w-full md:flex md:flex-row  lg:w-full  lg:flex lg:flex-row  ">

          <div className=" w-full flex flex-col items-center justify-center px-8 py-2 m-auto gap-4  md:w-3/4 md:flex md:flex-col md:items-center md:px-8 md:py-2   lg:w-3/4 lg:flex lg:flex-col lg:items-center lg:px-8 lg:py-2">
              <section className="w-full  bg-red-600 m-auto mt-2 flex flex-col items-center  justify-center py-8  rounded-md">
                 <span className="w-full text-left px-4 text-2xl capitalize text-white">
                 Creative outdoor ads
                 </span>
                 <div className="w-full flex flex-col items-center px-4 mt-2 gap-3 md:w-full md:flex md:flex-row md:items-center md:px-4 md:mt-2 lg:w-full lg:flex lg:flex-row lg:items-center lg:px-4 lg:mt-2">
                 <span className="w-4/5 text-left text-sm text-white  md:w-1/2 md:text-left md:text-sm md:text-white  lg:w-1/2 lg:text-left lg:text-sm lg:text-white">
                 Every large design company whether
                 it’s a multi-national branding corporation or a regular down at
                  heel tatty magazine publisher needs to fill holes in the workforce.
                 </span>
                 <span className=" w-full flex item-center justify-center px-2  md:w-1/2 md:flex md:item-center md:px-2 lg:w-1/2 lg:flex lg:item-center lg:px-2">
                  <div className="w-full">
                      <span className="w-48 float-right">
                      <a className="px-4 bg-white text-red-600 py-2 rounded-md m-auto w-full cursor-pointer"  onClick={(e)=>handlpage(e)}>
                        Get Started
                    </a>
                      </span>
                  </div>
                 </span>
                 </div>
              </section>

              <div className="w-full flex flex-col item-center  justify-center  mt-4 space-x-3 gap-3     md:w-full md:flex md:flex-col md:item-center  md:justify-center md:mt-4 md:space-x-3 md:gap-3  lg:w-full lg:flex lg:flex-row lg:item-center  lg:justify-between lg:mt-4 lg:space-x-3">
                <article className=' w-full bg-white  md:w-full md:bg-white  lg:w-[23rem]  lg:bg-white   '>
                   <ReactFC {...chartConfigs}

                   />

                    </article>

                    <div className='w-full md:w-full  lg:w-[20rem]'>
                        <ReactFusioncharts
                                type="pie2d"
                                width="100%"
                                height="340"
                                dataFormat="JSON"
                                dataSource={dataSource}
                            />
                    </div>
              </div>

              <article className=" w-full flex flex-col item-center  justify-between mt-4 gap-4  md:w-full md:flex md:flex-row md:item-center  md:justify-between md:mt-4 lg:w-full lg:flex lg:flex-row lg:item-center  lg:justify-between lg:mt-6">
                  <section className='w-full flex flex-col items-center md:w-1/2 md:flex md:flex-col md:items-center lg:w-1/2 lg:flex lg:flex-col lg:items-center'>
                    <div className=' w-full  text-2xl capitalize text-left  md:w-full md:text-lg md:capitalize md:text-left lg:w-full lg:text-2xl lg:capitalize lg:text-left'>
                       Your documents
                    </div>
                    <ul className='w-full'>
                      <li className='w-full flex flex-row items-center  px-3 py-2 bg-white rounded-md'>
                         <span className='w-10 bg-purple-400  grid place-content-center py-2 rounded-md'>
                         <FaClipboardList className="text-2xl text-[#8F00FF]"/>
                         </span>
                         <span className='w-11/12 flex flex-col items-center'>
                           <label className='w-full'>
                             <span className='w-44 float-right grid place-content-center'>
                                 <a className='w-20 rounded-md px-2 bg-[#EAEEFD] text-black capitalize'>
                                   submitted
                                 </a>
                             </span>
                           </label>
                           <div className='w-full capitalize text-sm text-left px-2'>
                           Submisson NLP Programming
                           </div>
                           <div className=' md:w-full md:capitalize md:text-xs md:text-left md:px-2 lg:w-full lg:capitalize lg:text-sm lg:text-left lg:px-2'>
                           04 Jan, 09:20AM
                           </div>
                         </span>
                      </li>

                      <li className='w-full flex flex-row items-center  px-3 py-2 bg-white rounded-md mt-2'>
                         <span className='w-10 bg-purple-400  grid place-content-center py-2 rounded-md'>
                         <FaClipboardList className="text-2xl text-[#8F00FF]"/>
                         </span>
                         <span className='w-11/12 flex flex-col items-center'>
                           <label className='w-full'>
                             <span className='w-44 float-right grid place-content-center'>
                                 <a className='w-20 rounded-md px-2 bg-[#EAEEFD] text-black capitalize'>
                                   submitted
                                 </a>
                             </span>
                           </label>
                           <div className='w-full capitalize text-sm text-left px-2'>
                           Submisson NLP Programming
                           </div>
                           <div className=' md:w-full md:capitalize md:text-xs md:text-left md:px-2 lg:w-full lg:capitalize lg:text-sm lg:text-left lg:px-2'>
                           04 Jan, 09:20AM
                           </div>
                         </span>
                      </li>
                    </ul>
                  </section>

                    <article className='w-full flex flex-col md:w-2/5 md:flex md:flex-col lg:w-2/5 lg:flex lg:flex-col'>
                    <div className='w-full text-2xl capitalize text-left  md:w-full md:text-lg md:capitalize md:text-left lg:w-full lg:text-2xl lg:capitalize lg:text-left'>
                       Progress Learning
                    </div>
                     <section className="w-full bg-white">
                     <span className='w-10 float-right grid place-content-center'>
                                 <a className='w-10 rounded-md px-2  text-black capitalize'>
                                 <BsThreeDots className="text-2xl text-black"/>
                                 </a>
                             </span>
                     </section>
                     <ul className='w-full bg-white'>
                       <li className='flex flex-row items-center px-2'>
                        <span className='w-1/5 grid place-content-center'>
                          <a className='text-base  uppercase font-semibold bg-[#CCCCCC] text-black px-3 py-2 rounded-md  w-10 flex flex-row justify-center cursor-pointer    md:text-base  md:uppercase md:font-semibold md:bg-[#CCCCCC] md:text-black md:px-3 md:py-2 md:rounded-md  md:w-10 md:flex md:flex-row md:justify-center md:cursor-pointer    lg:text-lg  lg:uppercase lg:font-semibold lg:bg-[#CCCCCC] lg:text-black lg:px-3 lg:py-2 lg:rounded-md  lg:w-14 lg:flex lg:flex-row lg:justify-center lg:cursor-pointer'>
                            ui
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className=' md:w-full md:text-left md:text-base md:capitalize lg:w-full lg:text-left lg:text-base lg:capitalize'>
                          Part Typography
                          </label>
                          <article className='full flex flex-row text-xs text-left '>
                          User Interface
                            {/* <div className='w-1/2 text-xs text-left px-2'>

                            </div> */}
                          </article>
                        </span>
                       </li>

                       <li className='flex flex-row items-center px-2 mt-2'>
                        <span className='w-1/5 grid place-content-center'>
                          <a className='text-base  uppercase font-semibold bg-[#CCCCCC] text-black px-3 py-2 rounded-md  w-10 flex flex-row justify-center cursor-pointer    md:text-base  md:uppercase md:font-semibold md:bg-[#CCCCCC] md:text-black md:px-3 md:py-2 md:rounded-md  md:w-10 md:flex md:flex-row md:justify-center md:cursor-pointer    lg:text-lg  lg:uppercase lg:font-semibold lg:bg-[#CCCCCC] lg:text-black lg:px-3 lg:py-2 lg:rounded-md  lg:w-14 lg:flex lg:flex-row lg:justify-center lg:cursor-pointer'>
                            ds
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className=' md:w-full md:text-left md:text-base md:capitalize lg:w-full lg:text-left lg:text-base lg:capitalize'>
                          Part Data Structure
                          </label>
                          <article className='full flex flex-row text-xs text-left '>
                          Computer Science
                            {/* <div className='w-1/2 '>
                            </div> */}
                          </article>
                        </span>
                       </li>


                       <li className='flex flex-row items-center px-2 mt-2'>
                        <span className='w-1/5 grid place-content-center'>
                          <a className='text-base  uppercase font-semibold bg-[#CCCCCC] text-black px-3 py-2 rounded-md  w-10 flex flex-row justify-center cursor-pointer    md:text-base  md:uppercase md:font-semibold md:bg-[#CCCCCC] md:text-black md:px-3 md:py-2 md:rounded-md  md:w-10 md:flex md:flex-row md:justify-center md:cursor-pointer    lg:text-lg  lg:uppercase lg:font-semibold lg:bg-[#CCCCCC] lg:text-black lg:px-3 lg:py-2 lg:rounded-md  lg:w-14 lg:flex lg:flex-row lg:justify-center lg:cursor-pointer'>
                            as
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className=' md:w-full md:text-left md:text-base md:capitalize lg:w-full lg:text-left lg:text-base lg:capitalize'>
                          Part Architecture
                          </label>
                          <article className='full flex flex-row text-xs text-left '>
                          Engineering
                            {/* <div className='w-1/2 '>
                            </div> */}
                          </article>
                        </span>
                       </li>

                     </ul>
                    </article>
              </article>

          </div>

          <article className='w-3/4 h-auto flex flex-col justify-center m-auto md:w-1/4 md:h-auto md:flex md:flex-col md:justify-between lg:w-1/4 lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-between '>

                  <div className='w-full flex flex-col items-center mt-10'>
                  <section className="w-full  flex flex-row items-center ">
                    <span className='md:w-10/12 md:text-left md:font-medium md:text-base md:capitalize lg:w-10/12 lg:text-left lg:font-medium lg:text-xl lg:capitalize'>
                      Upcoming
                    </span>
                     <span className='w-10  grid place-content-center'>
                                 <a className='w-10 rounded-md px-2  text-black capitalize'>
                                 <BsThreeDots className="text-2xl text-black"/>
                                 </a>
                             </span>
                     </section>

                     <div className=' w-full flex flex-row items-center px-2 mt-2'>
                        <span className='w-1/5 grid place-content-center'>
                          <a className=' md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-[#FFE4C2] md:w-10 md:flex md:flex-row md:justify-center  lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-[#FFE4C2] lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                            <AiFillBell className='text-2xl text-[#FFAD47] '/>
                          </a>
                        </span>
                        <span className=' md:w-11/12 md:px-1  lg:w-4/5 lg:px-1'>
                          <label className=' md:w-full md:text-left md:text-base md:capitalize lg:w-full lg:text-left lg:text-base lg:capitalize'>
                          Meeting with Mr Lurah
                          </label>
                          <article className='w-full text-xs text-left  flex flex-row items-center space-x-2'>
                              <h2>09:20AM</h2><h2> Due Soon</h2>
                             {/* <span className='w-20 grid place-content-center'>
                             </span>
                             <span className='w-20 grid place-content-center'>
                             </span> */}
                          </article>
                        </span>
                       </div>

                       <div className='w-full flex flex-row items-center px-2 mt-2'>
                        <span className='w-1/5 grid place-content-center'>
                        <a className=' md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-[#FFE4C2] md:w-10 md:flex md:flex-row md:justify-center  lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-[#FFE4C2] lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                            <AiFillBell className='text-2xl text-[#FFAD47]'/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                        <label className=' md:w-full md:text-left md:text-base md:capitalize lg:w-full lg:text-left lg:text-base lg:capitalize'>
                          Meeting with Mr Lurah
                          </label>
                          <article className='w-full text-xs text-left  flex flex-row items-center space-x-2'>
                          <h2>09:20AM</h2><h2> Due Soon</h2>
                             {/* <span className='w-20 grid place-content-center'>
                             09:20AM
                             </span>
                             <span className='w-20 grid place-content-center'>
                             Due Soon
                             </span> */}
                          </article>
                        </span>
                       </div>
                  </div>
                  <br/>
                     <br/>
                    <br/>
                   <br/>

                  <div className='w-full flex flex-col items-center mt-10'>
                  <section className="w-full  flex flex-row items-center ">
                    <span className='md:w-10/12 md:text-left md:font-medium md:text-base md:capitalize lg:w-10/12 lg:text-left lg:font-medium lg:text-xl lg:capitalize'>
                    Recent Activity
                    </span>
                     <span className='w-10  grid place-content-center'>
                                 <a className='w-10 rounded-md px-2  text-black capitalize '>
                                 <BsThreeDots className="text-2xl text-black"/>
                                 </a>
                             </span>
                     </section>

                     <div className=' w-full flex flex-row items-center px-2 mt-2'>
                        <span className='w-1/6 grid place-content-center'>
                          <a className='md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-purple-400 md:w-10 md:flex md:flex-row md:justify-center   lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-purple-400 lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                          <FaClipboardList className="text-2xl text-[#8F00FF]"/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className='px-2 w-full text-left text-sm capitalize'>
                          Submisson NLP Programming
                          </label>
                          <article className='w-full text-xs text-left px-2 flex flex-row items-center space-x-1 '>
                          04 Jan,  09:20AM
                             {/* <span className='w-32 grid place-content-center text-left float-left'>

                             </span> */}
                          </article>
                        </span>
                       </div>

                        <div className=' w-full flex flex-row items-center px-2 mt-3'>
                        <span className='w-1/6 grid place-content-center'>
                          <a className=' md:text-base  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-[#D4FFDA] md:w-10 md:flex md:flex-row md:justify-center   lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-[#D4FFDA] lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                          <MdOutlineDoneAll className="text-2xl text-[#008E13]"/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className='px-2 w-full text-left text-sm capitalize'>
                          Outcome administration
                          </label>
                          <article className='w-full text-xs text-left px-2 flex flex-row items-center space-x-1'>
                          04 Jan,  09:20AM
                             {/* <span className='w-32 grid place-content-center text-left'>
                             </span> */}
                          </article>
                        </span>
                       </div>

                       <div className=' w-full flex flex-row items-center px-2 mt-3'>
                        <span className='w-1/6 grid place-content-center'>
                          <a className=' md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-blue-300 md:w-10 md:flex md:flex-row md:justify-center   lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-blue-300 lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                          <AiFillAudio className="text-2xl text-[#008AD8]"/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className='px-2 w-full text-left text-sm capitalize'>
                          Teacher Panel Discussion
                          </label>
                          <article className='w-full text-xs text-left px-2 flex flex-row items-center space-x-1'>
                          04 Jan,  09:20AM
                             {/* <span className='w-32 grid place-content-center text-left'>
                             </span> */}
                          </article>
                        </span>
                       </div>

                       <div className=' w-full flex flex-row items-center px-2 mt-3'>
                        <span className='w-1/6 grid place-content-center'>
                        <a className='md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-purple-400 md:w-10 md:flex md:flex-row md:justify-center   lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-purple-400 lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                          <FaClipboardList className="text-2xl text-[#8F00FF]"/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className='px-2 w-full text-left text-sm capitalize'>
                          Submisson NLP Programming
                          </label>
                          <article className='w-full text-xs text-left px-2 flex flex-row items-center space-x-1'>
                          04 Jan,  09:20AM
                             {/* <span className='w-32 grid place-content-center text-left'>
                             </span> */}
                          </article>
                        </span>
                       </div>

                       <div className=' w-full flex flex-row items-center px-2 mt-3'>
                        <span className='w-1/6 grid place-content-center'>
                        <a className='md:text-lg  md:uppercase md:font-semibold  md:text-black md:px-3 md:py-2 md:rounded-md md:bg-purple-400 md:w-10 md:flex md:flex-row md:justify-center   lg:text-lg  lg:uppercase lg:font-semibold  lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:bg-purple-400 lg:w-14 lg:flex lg:flex-row lg:justify-center'>
                          <FaClipboardList className="text-2xl text-[#8F00FF] "/>
                          </a>
                        </span>
                        <span className='w-4/5 px-1'>
                          <label className='px-2 w-full text-left text-sm capitalize'>
                          Submisson NLP Programming
                          </label>
                          <article className='w-full text-xs text-left px-2 flex flex-row items-center space-x-1'>
                          04 Jan,  09:20AM
                             {/* <span className='w-32 grid place-content-center text-left'>
                             </span> */}
                          </article>
                        </span>
                       </div>
                  </div>

                  <br/>
                     <br/>
                    <br/>
                   <br/>

                  <div className='w-full flex flex-col items-center mt-10'>
                  <section className="w-full  flex flex-row items-center ">
                    <span className='w-10/12 text-left font-medium text-xl capitalize'>
                    Lastest Messages
                    </span>
                    </section>
                    <article className='w-full grid grid-cols-3 gap-2'>

                     <div className='w-14 h-14 rounded-full grid place-content-center bg-[#EAEEFD]'>
                       <img src={Cris}  />
                     </div>


                     <div className='w-14 h-14 rounded-full grid place-content-center bg-[#EAEEFD] uppercase'>
                      AK
                     </div>


                     <div className='w-14 h-14 rounded-full grid place-content-center bg-[#EAEEFD]'>
                       <img src={Dusig}  />
                     </div>


                     <div className='w-14 h-14 rounded-full grid place-content-center bg-[#EAEEFD]'>
                       <img src={Exra}  />
                     </div>

                     <div className='w-14 h-14 rounded-full grid place-content-center bg-[#EAEEFD]'>
                       <img src={J0ne}  />
                     </div>
                    </article>
                    </div>

          </article>

      </article>
      </div>

    </div>
    </div>
  )
}
export default Mainpage;
if(document.getElementById('page')){
ReactDOM.render(<Mainpage/>, document.getElementById('page'))
}


