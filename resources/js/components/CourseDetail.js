import React, {useState, useRef, useEffect}from 'react'
import ReactDOM from 'react-dom';
import {FaLock, FaStopCircle} from 'react-icons/fa';
import {AiFillStar} from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { Markup } from 'interweave';
import {BsFillPlayFill, BsFillPauseFill, } from 'react-icons/bs';
import { Player, ControlBar, BigPlayButton  } from 'video-react';
import PaystackPop from '@paystack/inline-js';
import { data } from 'autoprefixer';
import axios from 'axios';
import { play } from 'video-react/lib/actions/player';
import { Document, Page, pdfjs } from "react-pdf";
import { useSpeechSynthesis } from 'react-speech-kit';
import {FcSpeaker} from 'react-icons/fc';
import Naira from 'react-naira';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
 function CourseDetail() {
    let  priceofprice =   parseInt(fetchdata.price)
    let usersfilm =  window.sessionStorage.getItem('videoinfo')?JSON.parse(window.sessionStorage.getItem('videoinfo')):[]
    let urllink = `http://127.0.0.1:8000`;
    const [hover, Sethover] = useState(0)
    const[playon, Setplayon] = useState(false)
    const [videohover, Setvideohover] = useState(false)
    const [staticdata, Setstatic] = useState(0)
    const [played, Setplayed] = useState(0)
    const [links, Setlinks] = useState(usersfilm.length > 0?usersfilm[0].url:'')
    const [episode, Setepisode] = useState('')
    const [email, Setemail] = useState(usersemail?usersemail:'');
    const [Amount, SetAmount] = useState(priceofprice?priceofprice:'');
    const [Message, SetMessage] = useState('');
    const [Coursepurhased, SetCoursepurhased ] = useState(purchasecourse?purchasecourse:"");
    const [Loader, SetLoader] = useState(false);
    const [videoid, Setvideoid] =useState('');
    const [videoduration, Setvideoduration] = useState(0)
    const [videocurrenttime, Setvideocurrenttime] = useState(0)
    const [check, Setcheck] = useState(false)
    const [terms, Setterms] = useState(false)
    const [show, Setshow] = useState(false)
    const { speak, stop } = useSpeechSynthesis();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [all, setall] = useState([])
    const [voicestatus, setvoicestatus] = useState(false)
    let steve = [];

    const handref = useRef(null)
 const handlecheck =(e)=>{
     let checked =e.target.checked;
        Setcheck(checked)
 }


    const handlemouse = (e)=>{
     Sethover(e.target.dataset.id)
    }
    const handleLeave = (e)=>{
      if(e.target){
          Sethover(0)
      }
    }
    const handleplay = ()=>{
        if(!playon){
            Setplayon(true)
        }else{
            Setplayon(false)
        }
    }

    const handleHover = ()=>{
        if(!videohover){
            Setvideohover(true)
        }
    }
    const handleleave = ()=>{
      if(videohover){
        Setvideohover(false)
      }
    }
    const onduration = (data)=>{
     let answer = data / 60
   let show =  answer.toFixed(2)
   Setstatic(show)
    }
    const onprogress = (data)=>{

      let playedSeconds = data.playedSeconds / 60
     let show =  playedSeconds.toFixed(2)
     Setplayed(show)
    }





const Nextvideo =(hypelink, episodes, ids)=>{

    // console.log(hypelink, episodes, ids)
    Setlinks(hypelink)
    Setvideoid(ids?ids:fetchdata.videoslinks[0].id)
    Setepisode(episodes?episodes:fetchdata.videoslinks[0].courseepisode)
  let detail = {url:hypelink, episode:episodes, courseid:fetchdata.id}
  let videoinfo = []
 videoinfo = [...videoinfo, detail]
 // localStorage.setItem('videoinfo', JSON.stringify(videoinfo));
  window.sessionStorage.setItem("videoinfo", JSON.stringify(videoinfo));
    let urltwo = `${urllink}/uservideowatch/${fetchdata.id}/${ids}`;
    axios.get(urltwo).then(res=>{
        //  console.log(res)
         if(res.data.success){
           let zoom = res.data.success
          let videocurrenttime = parseInt(zoom.videocurrenttime)
         let videoduration =  parseInt(zoom.videoduration)
          let answer =  videoduration - videocurrenttime
         let ans =  answer == 0?0:videocurrenttime

let dur =  handref.current
let currentTime = handref.current.getState().player.currentTime
dur.seek(currentTime + ans)
         }else if(res.data.error){

         }
        })

}


 const [puase, setpause] = useState(false)
useEffect(()=>{
//code work
//     let dur =  handref.current
// let currentTime = handref.current.getState().player.currentTime
//   dur.seek(currentTime + 10)
//code work
let sessionstorage = !!window.sessionStorage.getItem('videoinfo')
if(sessionstorage == true){
    let  son = JSON.parse(window.sessionStorage.getItem('videoinfo'))
    if (son[0].courseid == fetchdata.id){
        Setlinks(son[0].url)
        Setepisode(son[0].episode)
    }

}
   const interval =  setInterval(()=>{
    let paused =  handref.current?handref.current.getState().player.paused:handref.current
    setpause(paused)
      let Duration =  handref.current?handref.current.getState().player.duration:handref.current
      let CurrentTime = handref.current?handref.current.getState().player.currentTime:handref.current
      Setvideoduration(Duration)
      Setvideocurrenttime(CurrentTime)



   },1000)
 return () => clearInterval(interval);
},[])


if(puase  && videoduration && videocurrenttime && fetchdata.id){
    let ansvideoid = videoid?videoid:fetchdata.videoslinks[0].id
     let ansepisode =  episode?episode:fetchdata.videoslinks[0].courseepisode
    let formData = new FormData();
    formData.append('videoid', ansvideoid)
    formData.append("course_id", fetchdata.id)
    formData.append("episode", ansepisode)
    formData.append("videoduration", videoduration)
    formData.append("videocurrenttime", videocurrenttime)
      let urltwo = `${urllink}/userwatch`;
      axios.post(urltwo, formData).then(res=>{
        //  console.log(res)
         if(res.data.success){
            Setvideoid('')
            Setvideoduration('')
            Setvideocurrenttime('')
            // Setepisode('')
         }else if(res.data.error){

         }
        })
}else{
    // console.log(videoid,episode, videoduration, videocurrenttime, fetchdata.id)
    // console.log('not sending')
}


useEffect(()=>{
    //let ansvideoid = videoid?videoid:fetchdata.videoslinks[0].id
    let urltwo = `${urllink}/uservideowatch/${fetchdata.id}/${videoid?videoid:fetchdata.videoslinks[0].id}`;
    axios.get(urltwo).then(res=>{
        //  console.log(res)
         if(res.data.success){
           let zoom = res.data.success
          let videocurrenttime = parseInt(zoom.videocurrenttime)
         let videoduration =  parseInt(zoom.videoduration)
          let answer =  videoduration - videocurrenttime
         let ans =  answer == 0?0:videocurrenttime

let dur =  handref.current
let currentTime = handref.current.getState().player.currentTime
dur.seek(currentTime + ans)
         }else if(res.data.error){

         }
        })
},[])

const [number, Setnum] = useState(0)
const handleContinue = ()=>{
    // const interval =  setInterval(()=>{
        let dur =  handref.current
        let currentTime = handref.current.getState().player.currentTime
       // let answer = currentTime =+ 20
          dur.seek(currentTime + 20)
       // console.log(currentTime += 12)


    //   },1000)
    //   return () => clearInterval(interval);
}



const starcont = star => {
    let content = [];
    for (let i = 0; i < star; i++){
     content.push(   <label className='w-8' key={i}>
     <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
    </label>)
    }
    return content;
}


const handleSubmit = ()=>{
    SetLoader(true)
    //money.result.toFixed(2)
    if(check == true){
        let paystack = PaystackPop.setup({
            key: 'pk_test_717211460dbb54580490c8c657c4b42e4e35da03',
            email:email,
            amount:Amount *100.00,
            callback: function(response){
                console.log(response)
                let ref = response.reference
                if(ref){
                    console.log(ref)
                 let hypelink = `${urllink}/paystack_verify/${ref}`
                 axios.get(hypelink).then(res=>{

                    if(res.data.status){

                        let formData = new FormData();
                        formData.append('email', email);
                        formData.append('amount', priceofprice);
                        formData.append('referencecode', ref);
                        formData.append('status', res.data.message);
                        formData.append('course_id', fetchdata.id);
                        formData.append("terms_and_condition",check)
                        let sendlink =  `${urllink}/purchasecourse`
                        axios.post(sendlink, formData).then(res=>{
                            if(res.data.success && res.data.data){
                                SetMessage(res.data.success)
                                SetCoursepurhased(res.data.data)
                                SetLoader(false)
                            }else if(res.data.error){
                             SetMessage(res.data.error)
                            }

                          })
                    }


                })
                }
            },
            onClose: function(){

            }
          });
          paystack.openIframe();
    }else if (check == false){
        SetMessage('please accept the term and condition')
        Setterms(true)
        SetLoader(false)
    }
}



function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 const handleBack =(e)=>{
  window.location.href = `${urllink}/${e.target.dataset.name}`;
 }
 //episode?episode:fetchdata.videoslinks[0].courseepisode
 let answerone = links.includes(".pdf");
 let answertwo = fetchdata.videoslinks[0].courselink.includes(".pdf")
 if(answerone  == true || answertwo == true){
    console.log(links, fetchdata.videoslinks[0].courselink)
    }
    const handlenext = ()=>{
        if(pageNumber != numPages){
            let answer = pageNumber + 1
            setPageNumber(answer)
          }else if (pageNumber == numPages){
            setPageNumber(1)

        }
    }


    const handleprev = ()=>{
    if(pageNumber == 1){
        setPageNumber(numPages)
    }else if (pageNumber < numPages){
        let answer = pageNumber - 1
        setPageNumber(answer)
    }else if (pageNumber === numPages){
        let answer = numPages - 1
        setPageNumber(answer)
    }
    }

    // useEffect(()=>{
    //     const interval =  setInterval(()=>{
    //         async function getContent(src){
    //             const doc = await pdfjs.getDocument(src).promise
    //             //getDocument(src).promise
    //             const page = await doc.getPage(pageNumber)
    //             return await page.getTextContent()
    //             }

    //             async function getItems(){
    //             const content = await getContent(links)
    //             const items = content.items.map((item)=>{

    //             // setall([
    //             //     ...all,
    //             //     item.str
    //             // ])
    //             steve.push(item.str)
    //             setall(steve?steve:[])

    //             })
    //             return items;
    //             }
    //             getItems()
    //        },1000)
    //      return () => clearInterval(interval);
    // },[pageNumber])

    const handleclick =()=>{
       setTimeout(()=>{
        async function getContent(src){
            const doc = await pdfjs.getDocument(src).promise
            const page = await doc.getPage(pageNumber)
            return await page.getTextContent()
            }

            async function getItems(){
            const content = await getContent(links?links:fetchdata.videoslinks[0].courselink)
            const items = content.items.map((item)=>{

            // setall([
            //     ...all,
            //     item.str
            // ])
            steve.push(item.str)
            setall(steve?steve:[])

            })
            return items;
            }
            getItems()
        let ans = all.filter((item)=>item !== ' ' && item !== '')
          let talk = ans.join()
          console.log(talk)
          speak({text:talk})
          window.speechSynthesis.resume()
          setall([])
       },1000)
        }

        const handlechangstatus = ()=>{
            //setvoicestatus
            if(voicestatus){
                window.speechSynthesis.pause()
                setvoicestatus(false)
            }else if(!voicestatus){
                window.speechSynthesis.resume()
                setvoicestatus(true)
            }

        }
  return (
    <div className='w-full flex flex-col items-center'>

      <article className="w-10/12 m-auto rounded-md bg-[#EFEBF5]  flex flex-row items-center mt-3 px-4 space-x-3">

         <div className='w-3/4 flex flex-col '>
           <span className='w-full space-x-1 py-2 font-poppins'>
               <label className=' capitalize text-[#0A033C] text-lg border-r  border-white '>home</label>
               <label className='capitalize text-[#0A033C] text-lg border-r  border-white cursor-pointer' data-name="courses" onClick={(e)=>handleBack(e)}>courses</label>
               <label className='capitalize text-[#A32926] text-lg '>courses details</label>
           </span>
          {answerone || answertwo?
             <div className="w-full rounded-md  mt-2 relative border border-purple-400 h-[30rem] overflow-y-scroll">

        <Document
        file={links?links:fetchdata.videoslinks[0].courselink} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
      </Document>

             </div>:<div className="w-full rounded-md h-auto mt-2 relative border border-purple-400">
          <Player
          width="100%"
          height="100%"
          ref={handref}
          startTime={number}
          onPl
             src={links?links:fetchdata.videoslinks[0].courselink}
          >

             <BigPlayButton   position="center" />
          </Player>

        </div>

          }

       <div className="text-3xl mt-1 text-[#0A033C] capitalize py-2 font-sans relative flex flex-row items-center">

      {answerone || answertwo?    <section className='w-1/2 flex flex-row items-center space-x-3'>
            <button className=' w-10 h-10 text-sm flex items-center justify-center rounded-l-sm  bg-blue-700 text-white' onClick={handlenext}>next</button>

            <button className='w-10 rounded bg-white  mt-2' onClick={()=>handleclick()}><FcSpeaker className="text-2xl  " onClick={()=>handleclick()}/></button>

            <button className='w-10 rounded bg-white  mt-2' onClick={()=>handlechangstatus()}>
                {voicestatus? <BsFillPlayFill className="text-2xl text-red-500 " onClick={()=>handlechangstatus()}/>
               : <FaStopCircle className="text-2xl text-red-500 " onClick={()=>handlechangstatus()}/>}


                </button>

            <button className=' w-10 h-10 text-sm flex items-center justify-center rounded-l-sm  bg-blue-700 text-white' onClick={handleprev}>prev</button>

          </section>:""}


          <section className='w-1/2 flex flex-row items-center space-x-3 text-left'>
              <div className='w-full'>
              <span className=' w-1/6 float-right text-sm' >{pageNumber} of {numPages}</span>
              </div>
          </section>
       </div>
           <article className="text-3xl mt-1 text-[#0A033C] capitalize py-2 font-sans relative" onClick={handleContinue} >
           {fetchdata.coursename} | {episode?episode:fetchdata.videoslinks[0].courseepisode}
           </article>
         </div>

         <div className='w-1/3'>
         <span className='text-left text-[#37226C] text-2xl capitalize w-full px-3 font-sans'>
         Course Playlists
         </span>
         <section className='w-full h-96 overflow-y-scroll px-3'>
           {fetchdata.videoslinks.map((item, index)=>{

            if(!Coursepurhased){
            return <article  data-id={item.id} className="flex flex-row items-center  rounded-md bg-white px-1 py-1 w-full mt-1" key={index} onClick={()=>Nextvideo(index == 0 || index == 1?item.courselink:fetchdata.videoslinks[0].courselink,   index == 0 || index == 1?item.courseepisode:fetchdata.videoslinks[0].courseepisode,  index == 0 || index == 1?item.id:fetchdata.videoslinks[0].id)} onMouseOver={handlemouse} onMouseLeave={handleLeave}>
                <span  className=' w-1/5  h-14 rounded-md relative'   >
                        <img src={img2} className='w-full h-full rounded-md'/>
                 <article className={index == 0 || index == 1?"hidden":"absolute jojo w-full h-full grid place-content-center border top-0 rounded-md"} >
                    <FaLock className={index == 0 || index == 1?"hidden":"block"}/>
                 </article>
                </span>
                <span className='w-2/3'>
                    <label className='w-full text-sm text-[#37226C]  font-bold px-2 font-sans'>
                    {item.courseepisodetitle.substring(0, 20)+"..."}
                    </label>
                    <label className='w-full text-sm text-[#A32926] px-2 font-sans'>
                     {item.courseduration}
                    </label>
                    </span>
              </article>
            }else if(Coursepurhased){
                return <article  data-id={item.id} className="flex flex-row items-center  rounded-md bg-white px-1 py-1 w-full mt-1" key={index} onClick={()=>Nextvideo(item.courselink, item.courseepisode, item.id)} onMouseOver={handlemouse} onMouseLeave={handleLeave}>
                <span  className=' w-1/5  h-14 rounded-md relative'  >
                 <img src={img2} className='w-full h-full rounded-md'/>
                 <article className="hidden">
                    <FaLock className="hidden"/>
                 </article>
                </span>
                <span className='w-2/3'  >
                    <label className='w-full text-lg text-[#37226C]  font-bold px-2 font-sans'>
                    {item.courseepisodetitle.substring(0, 20)+"..."}
                    </label>
                    <label className='w-full text-lg text-[#A32926] px-2 font-sans'>
                     {item.courseduration}
                    </label>
                    </span>
              </article>
            }

           })}



         </section>

         </div>
      </article>

      <div className=' flex flex-row w-10/12   justify-between mt-4'>
        <article className='w-3/4 flex flex-col items-center'>
        <span className='w-full capitalize text-2xl text-[#37226C] font-bold text-left  font-sans'>Course Details</span>
        {/* <span className='w-full capitalize text-lg text-[#37226C] font-thin text-left font-sans'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
        </span>
        <span className='w-full capitalize text-lg text-[#37226C] font-thin text-left mt-4 font-sans'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
        </span> */}
        <div className="w-full capitalize text-lg text-[#37226C] font-thin text-left font-sans">
            <Markup content={fetchdata.coursedetails?fetchdata.coursedetails:""}/>
        </div>
        <span className='w-full capitalize text-2xl text-[#37226C] font-bold text-left mt-4 font-sans'>Certification</span>
          <span className='w-full capitalize text-lg text-[#37226C] font-thin text-left font-sans'>
         <Markup  content={fetchdata.certification?fetchdata.certification:''}/>
        </span>

        <span className='w-full capitalize text-2xl text-[#37226C] font-bold text-left mt-4 font-sans'>Who this course is for</span>
        <span className='w-full capitalize text-lg text-[#37226C] font-thin text-left font-sans'>
        <Markup content={fetchdata.whothiscoursefor?fetchdata.whothiscoursefor:''} />
        </span>

        <span className='w-full capitalize text-2xl text-[#37226C] font-bold text-left mt-4 font-sans'>What you'll learn in this course:</span>
        <span className='w-full capitalize text-sm text-[#37226C] font-thin text-left'>
         {/* <ul>
             <li className='list-disc text-left text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
             <li  className='list-disc text-left text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
             <li  className='list-disc text-left text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
             <li  className='list-disc text-left text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
             <li  className='list-disc text-left text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
         </ul> */}
              <Markup content={fetchdata.learning?fetchdata.learning:""}/>

        </span>
        </article>
        <article className='w-1/3  flex flex-col items-center'>
            <section className='w-10/12 bg-white  rounded-md px-2 py-2'>
            <div className='w-full flex flex-row items-center '>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                price
            </span>
            <span className='w-1/2 text-right text-[#A32926] text-lg font-sans'>
            <Naira>{fetchdata.price?fetchdata.price:""}</Naira>
            </span>
         </div>
         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                Instructor
            </span>
            <span className='w-1/2 text-right  underline underline-offset-1 text-bold text-lg'>
             {fetchdata.instructor?fetchdata.instructor:""}
            </span>
         </div>
         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                Rating
            </span>
            <span className='w-1/2 text-right  underline underline-offset-1 '>
            <span className='w-full flex flex-row space-x-1 mt-2 float-right'>
             {starcont(fetchdata.rating)}
              </span>
            </span>
         </div>

         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                duration
            </span>
            <span className='w-1/2 text-right  text-lg  text-bold font-sans'>
              {fetchdata.duration}
            </span>
         </div>

         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                lesson
            </span>
            <span className='w-1/2 text-right  text-lg text-bold font-sans'>
            {fetchdata.lesson}
            </span>
         </div>


         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
                quizzes
            </span>
            <span className='w-1/2 text-right  text-lg text-bold font-sans'>
             {fetchdata.quizzes}
            </span>
         </div>

         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
            Certificate
            </span>
            <span className='w-1/2 text-right  text-lg text-bold font-sans capitalize'>
             {fetchdata.certificate == 1?'yes':'no'}
            </span>
         </div>

         <div className='w-full flex flex-row items-center bg-white mt-2'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
            Language
            </span>
            <span className='w-1/2 text-right  text-lg text-bold font-sans capitalize'>
             {fetchdata.language}
            </span>
         </div>

         <div className='w-full flex flex-row items-center bg-white'>
            <span className='w-1/2 text-left capitalize text-lg font-medium font-sans'>
            Access
            </span>
            <span className='w-1/2 text-right  text-lg text-bold font-sans'>
            {fetchdata.access}
            </span>
         </div>
            </section>

            <article className='flex flex-row items-center mt-4 '>
                <button className={Coursepurhased?'py-2 px-2 grid place-content-center text-lg font-semibold text-white bg-green-400 capitalize w-48 rounded-md':'py-2 px-2 grid place-content-center text-lg font-semibold text-white bg-[#A32926] capitalize w-48 rounded-md'}  onClick={handleSubmit}>
                 {Loader?<div className="loader simple-circle"></div>:Coursepurhased?'Purchased':'Purchase Course'}

                </button>
            </article>
            {Coursepurhased?"":
              <section className=' flex flex-row items-center mt-2'>
              <span className='w-10 flex items-center justify-center'>
                  <input type="checkbox" value={check} onChange={(e)=>handlecheck(e)}></input>
              </span>
              <span className='w-11/12 text-xs capitalize' onClick={()=>Setshow(true)}>
                  please accept the terms and conditions
              </span>
             </section>
            }

        </article>
      </div>



      <section className={terms?"z-40  grid place-items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed":"hidden"}>

                  <div className=" w-11/12  bg-white py-1 rounded-md  md:w-1/2  md:bg-white md:py-1 md:rounded-md ">
                     <article className="w-full px-3">
                         <label className="float-right">
                         <button className="rounded-full h-6 w-6 flex items-center justify-center bg-purple-600 text-white text-xs" onClick={()=>Setterms(false)}  >x</button>
                         </label>
                     </article>
                     <div className="w-full place-items-center grid font-semibold text-xl py-2">
                       <div className='text-center text-lg capitalize'>{Message?Message:""}</div>
                     </div>
                  </div>
            </section>


            <section className={show?"z-40  grid place-items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed":"hidden"}>

                <div className=" w-11/12  bg-white py-1 rounded-md  md:w-1/2  md:bg-white md:py-1 md:rounded-md ">
                <article className="w-full px-3">
                    <label className="float-right">
                    <button className="rounded-full h-6 w-6 flex items-center justify-center bg-purple-600 text-white text-xs" onClick={()=>Setshow(false)}  >x</button>
                    </label>
                </article>
                <div className="w-full place-items-center grid  text-xl py-2 px-2">
                    <div className='text-center  text-xl capitalize text-[#37226C] font-bold'>Terms and Conditions</div>
                    <div className='h-64 overflow-y-scroll'>
                     <span className='w-full text-sm'>
                      <p>Memberships, Handbooks, Event Tickets, and Exam Fees</p>
                      <p>All of our products will be delivered digitally within 48-72 hours of purchase, either via</p>
                      <p>1. email</p>
                      <p>2. access to our Member’s Portal, or</p>
                      <p>3. access to one of our training partner’s certificate and course portal.</p>
                      <p>If after 72 hours you haven’t received access to your Member Portal or exam or your product via email,
                          please get in touch at info@tmcinstitute.com
                    TMC Institute does not grant refunds or returns for TMC Institute membership, student handbooks, or exam fees.
                    Substitutions are not permitted for TMC Institute membership programs.
                     </p>
                     <p className='mt-3'>For our refund policy on Event Tickets, please see below.</p>
                     </span>
                     <span className='w-full text-sm'>
                         <p className='mt-2'>Exams</p>
                         <p>Students have three (3) months upon the purchase date to sit their online exam.
                             If they want an additional three (3) month extension, this should be requested in writing via email to info@tmcinstitute.com
                    If a student doesn’t sit their exam within the allotted three (3) month period or the extended six (6) month period,
                    the student will have to pay for the full exam to be able to take it.
                       Students have two (2) chances to pass the exam for any of TMC Institute’s certificates or courses.
                             </p>
                             <p className='mt-2'>Conferences & Live Events</p>
                             <p>Attendance at paid TMC Institute conferences and live events (whether online or in-person) cannot be guaranteed until full payment has been received.
 If a participant is unable to attend an in-person conference, they must send an email to info@tmcinstitute.com Cancellations received up to one (1) month prior to the in-person conference will receive a full refund minus a processing fee that is equivalent to 10% of the total cost paid for the ticket.
 Cancellations received  one (1) month or less before the start date of the in-person conference will be issued a credit voucher that may be applied to registration fees for another TMC Institute  event.
 If the event is to be held online, participants must send a notice of cancellation to info@tmcinstitute.com up to one (1) week prior to the event date in order to receive a full refund. Late cancellations will be charged in full.
 If you do not attend the conference or live seminar or log on to the webinar at the scheduled date and time, you will be considered a no show. No shows are treated as late cancellations.
 Substitutions may be made at any time prior to the beginning of a conference or live event. Substitutions must be requested in writing by sending an email to info@tmcinstitute.com
 If applicable, please note that if the transfer is made from an TMC Institute member to a non- TMC Institute member, the person making the transfer will be charged the difference in cost.
 TMC Institute reserves the right to cancel or reschedule a conference or live event at any time. Registrants will have the opportunity to attend the rescheduled event or request a full refund.
 Refund requests in conformity with the above are to be addressed to the TMC Institute Support Team at info@tmcinstitute.com citing the participant’s name, e-mail address, the title of the event they would like refunded, and the date of the purchase.
  </p>
                     </span>
                    </div>
                </div>
                </div>
          </section>
    </div>
  )
}

export default CourseDetail;

if(document.getElementById('course')){
ReactDOM.render(<CourseDetail />, document.getElementById('course'));
}


