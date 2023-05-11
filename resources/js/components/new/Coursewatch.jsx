import React, {useState, useRef, useEffect}from 'react'
import ReactDOM from 'react-dom';
import {FaStopCircle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Player, ControlBar, BigPlayButton  } from 'video-react';
import {BsFillPlayFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {GrFormSubtract} from 'react-icons/gr';
import {FcCancel} from 'react-icons/fc';
import { Markup } from 'interweave';
import ProgressBar from "@ramonak/react-progress-bar";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import axios from 'axios';
import { useSpeechSynthesis} from 'react-speech-kit';
import {FcSpeaker, FcPrevious, FcNext} from 'react-icons/fc';

export default function Coursewatch() {
    let url = window.location.origin;
    let usersfilm =  window.sessionStorage.getItem('videoinfo')?JSON.parse(window.sessionStorage.getItem('videoinfo')):[];
    let textspeech = localStorage.getItem('textspeech')?JSON.parse(localStorage.getItem('textspeech')):[]

    const [links, Setlinks] = useState(usersfilm.length > 0?usersfilm[0].id == fetchdata.id?usersfilm[0].url:fetchdata.videoslinks[0].courselink:fetchdata.videoslinks[0].courselink)
    const [videoid, Setvideoid] =useState('');
    const [episode, Setepisode] = useState('')
    const [videoduration, Setvideoduration] = useState(0)
    const [videocurrenttime, Setvideocurrenttime] = useState(0)
    const [all, setall] = useState([])
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [voicestatus, setvoicestatus] = useState(false)
    const { speak, stop, cancel, voices, speaking } = useSpeechSynthesis();
    const [coursenum, Setcoursenum] = useState(textspeech.length > 0?textspeech[0].number:0)
    const [Question, SetQuestion] = useState([])
    const [totalpercent, settotalper] = useState(0)
    const [open, Setopen] = useState(false)
    // const [coursecomplete, setcoursecomplete] = useState(coursecomplete.length > 0?coursecomplete:[])
    // voices[32]['localService'] = true;
    // voices[32]['default'] = true;

    console.log(fetchdata)
     const handleopen = ()=>{
        if(!open){
            Setopen(true)
        }else{
            Setopen(false)
        }
     }
    const handref = useRef(null)
    let steve = [];
    let urllink = window.location.origin;


    const Nextvideo =(hypelink, episodes, ids)=>{

        //  console.log(hypelink, episodes, ids)
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
    let currentTime = handref.current?handref.current.getState().player.currentTime:handref.current
    dur.seek(currentTime + ans)
             }else if(res.data.error){

             }
            })

    }

    let answerone = links.includes(".pdf");
 let answertwo = fetchdata.videoslinks[0].courselink.includes(".pdf")

 if(answerone  == true || answertwo == true){
    // console.log(links, fetchdata.videoslinks[0].courselink)
    }

    const [puase, setpause] = useState(false)
    const [sen, Setsen] = useState(word?word:'')
    // if(word){
    //     localStorage.setItem('word', word)
    // }
    useEffect(()=>{
        SetQuestion(question)
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
    // console.log(fetchdata.videoslinks)


       const interval =  setInterval(()=>{
        let paused =  handref.current?handref.current.getState().player.paused:handref.current
        setpause(paused)
          let Duration =  handref.current?handref.current.getState().player.duration:handref.current
          let CurrentTime = handref.current?handref.current.getState().player.currentTime:handref.current
          Setvideoduration(Duration)
          Setvideocurrenttime(CurrentTime)
        //   console.log(Duration, CurrentTime)
        //  console.log('currenttime'+CurrentTime, 'duration'+Duration)
        let anstotal =  CurrentTime * (100/Duration)
        let  percenttotal =  Math.round(anstotal)
                if(Duration != null && CurrentTime !=  null ){
                    if(Duration == CurrentTime){
                        let vid_id =  videoid?videoid:fetchdata.videoslinks[0].id
                        let formData = new FormData();
                        formData.append('videoid', vid_id)
                        formData.append("course_id", fetchdata.id)
                        formData.append("percentage", percenttotal)
                        formData.append("status",  'complete')
                          let urltwo = `${urllink}/percentcompleted`;
                          axios.post(urltwo, formData).then(res=>{

                          })
                     }else if(Duration != CurrentTime){
                        let vid_id =  videoid?videoid:fetchdata.videoslinks[0].id
                        let formData = new FormData();
                        formData.append('videoid', vid_id)
                        formData.append("course_id", fetchdata.id)
                        formData.append("percentage", percenttotal)
                        formData.append("status",  'incomplete')
                          let urltwo = `${urllink}/percentcompleted`;
                          axios.post(urltwo, formData).then(res=>{

                          })
                     }

                }



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
        let totalper =   coursecomplete.map((item)=>item.percentage)
        let totalarr = totalper.reduce((a, b) => a + b, 0)
       let final =  fetchdata.videoslinks.length
        let ansfinal =   totalarr/final
        settotalper(ansfinal)
        // coursecomplete[0].page
        coursecomplete.map((item)=>{
            if(item.course_type != null){
                setPageNumber(item.page!=null?item.page:1)
            }
        })
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

    const handdleBack=()=>{
        cancel()
        window.location.href = `${urllink}/newdashboard`;
    }


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }


   const handlenumsele = (e)=>{
    let gift = voices.map((item, index)=>{
      if(item.name == e.target.value){
        let textspeech = localStorage.getItem('textspeech')?JSON.parse(localStorage.getItem('textspeech')):[]
          let bobo =  [{name:item.name, number:index}];
          localStorage.setItem("textspeech", JSON.stringify(bobo));
        Setcoursenum(index)

      }

    })

   }


    const handleclick =()=>{
        setTimeout(()=>{
            setvoicestatus(true)
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
             return item.str;

             })

             let ans = items.filter((item)=>item !== ' ' && item !== '')
              let talk = ans.join()
             let   voice = voices[coursenum]
             let rate = 0.7;
              speak({text:talk, voice, rate})
              window.speechSynthesis.resume()
             }
             getItems()

        },1000)
         }


    const handlechangstatus = ()=>{
        //setvoicestatus
        //  stop, cancel
        if(voicestatus){
            window.speechSynthesis.pause()
            setvoicestatus(false)
        }else if(!voicestatus){
            window.speechSynthesis.resume()
            setvoicestatus(true)
        }

    }

    const handleCancel =()=>{
        // window.speechSynthesis.cancel()
        cancel()
    }


    const handlenext = ()=>{
        if(pageNumber != numPages){
            let answer = pageNumber + 1
            setPageNumber(answer)


            setTimeout(()=>{
                async function getContent(src){
                    const doc = await pdfjs.getDocument(src).promise
                    const page = await doc.getPage(answer)
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
                    return item.str;

                    })

                    let ans = items.filter((item)=>item !== ' ' && item !== '')
                     let talk = ans.join()
                    let   voice = voices[coursenum]
                    let rate = 0.7;
                     speak({text:talk, voice, rate})
                    }
                    getItems()

               },1000)



          let anstotal =  answer * (100/numPages)
            let  percenttotal =  Math.round(anstotal)
              if(percenttotal < 100) {
                let page = answer?answer:0
                // console.log('less than',percenttotal);
               let vid_id =  videoid?videoid:fetchdata.videoslinks[0].id

              let formData = new FormData();
              formData.append('videoid', vid_id)
              formData.append("course_id", fetchdata.id)
              formData.append("course_type", sen)
              formData.append("percentage", percenttotal)
              formData.append('page', page)
              formData.append("status",  'incomplete')
                let urltwo = `${urllink}/percentcompleted`;
                axios.post(urltwo, formData).then(res=>{
                    if(res.data.success){
                       let numback = parseInt(res.data.success)
                       setTimeout(()=>{
                        setcoursecomplete(parseInt(res.data.success))
                        settotalper(numback)
                       },1000)

                    }
                })

              }else if(percenttotal == 100){
                // console.log('great than',percenttotal);
                let page = answer?answer:0
            let vid_id =  videoid?videoid:fetchdata.videoslinks[0].id
              let formData = new FormData();
              formData.append('videoid', vid_id)
              formData.append("course_id", fetchdata.id)
              formData.append("course_type", sen)
              formData.append("percentage", percenttotal)
              formData.append('page', page)
              formData.append("status",  'complete')
                let urltwo = `${urllink}/percentcompleted`;
                axios.post(urltwo, formData).then(res=>{
                    if(res.data.success){
                        let numback = parseInt(res.data.success)
                        setTimeout(()=>{
                         setcoursecomplete(parseInt(res.data.success))
                         settotalper(numback)
                        },1000)

                     }
                     })

              }
              //   videoid fetchdata.id



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

        // console.log(numPages)
        const apiClient = axios.create({
            baseURL: `${url}/`,
            withCredentials: true
          });
        useEffect(()=>{
            async function getContent(src){
                const doc = await pdfjs.getDocument(src).promise
                // console.log(doc.numPages)
                // const page = await doc.getPage(pageNumber)
                // return await page.getTextContent()
                }

                async function getItems(){
                    const content = await getContent(links?links:fetchdata.videoslinks[0].courselink)

                }
                getItems();
        },[])

        const handleQuest = (id, course_type)=>{
            let formData = new FormData();
            let myHeader = new Headers();
            myHeader.append('Content-Type', 'application/json')
            formData.append("id", fetchdata.id)
            apiClient.get('/sanctum/csrf-cookie').then( ()=> {
                let urltwo = 'api/encrypt';
                   apiClient.post(urltwo, formData, myHeader).then(res=>{
                     if(res.data){
                        cancel()
                        window.location.href = `${url}/quiz/${course_type}/${id}/${res.data}`
                     }
                   })
                })


        }


         const [message,  Setmessage] = useState('');
         const [pop, Setpop] = useState(false);
        const handleDownload = ()=>{
            let formData = new FormData();
            formData.append("coursename",  fetchdata.coursename)
            formData.append("course_id", num)
            formData.append("course_type", sen)
              let urltwo = `${urllink}/downloadcetificate`;
              axios.post(urltwo, formData).then(res=>{
                  if(res.data.success){
                   Setmessage(res.data.message);
                   Setpop(true)
                   }
                   })
          // window.location.href = `${urllink}/downloadcetificate/${fetchdata.coursename}/${num}/${sen} `;
        }

        const handleDowncert =()=>{
            // let formData = new FormData();
            // formData.append("coursename",  fetchdata.coursename)
            // formData.append("course_id", num)
            // formData.append("course_type", sen)
              window.location.href = `${urllink}/downloadresult/${num}/${sen}`;
            //   axios.post(urltwo, formData).then(res=>{
            //       if(res.data.success){
            //     //    Setmessage(res.data.message);
            //     //    Setpop(true)
            //        }
            //        })
        }

  return (


    <div id="wrapper" className="course-watch">
      <div className="sidebar">
      {/*  slide_menu for mobile */}
            <span className="btn-close-mobi right-3 left-auto  grid place-items-center" uk-toggle="target: #wrapper ; cls: is-active">
            <GiHamburgerMenu className='m-auto'/>
            </span>
              {/*  slide_menu for mobile */}

              {/* back to home link  */}
            <div className="flex justify-between lg:-ml-1 mt-1 mr-2">
                <a className="flex items-center text-blue-500" onClick={()=>handdleBack()}>
                    <ion-icon name="chevron-back-outline" className="md:text-lg text-2xl"></ion-icon>
                    <span className="text-sm md:inline hidden cursor-pointer"> back</span>
                </a>
            </div>
             {/* end back to home link  */}


             {/*  title  */}
            <h1 className="lg:text-2xl text-lg font-bold mt-2 line-clamp-2"> {fetchdata.coursename}</h1>
               {/* end title  */}
               {/*  sidebar list */}
            <div className="sidebar_inner is-watch-2" data-simplebar>

                <div className="lg:inline hidden">
                    <div className="relative overflow-hidden rounded-md bg-gray-200 h-1 mt-4">
                        {/* percentage */}
                        <div className="w-100">
                        <ProgressBar completed={totalpercent} maxCompleted={100} customLabel=" " height="3px" animateOnRender={true}  />
                        </div>
                    </div>
                    <div className="mt-2 mb-3 text-sm border-b pb-3">
                    <div> {totalpercent}% Complete</div>
                        {/* <div> Last activity on April 20, 2021</div> */}
                    </div>
                </div>

                <div id="curriculum">
                        <div uk-accordion="multiple: true" className="divide-y space-y-3">

                            <div className="pt-2 uk-open">
                                <a className="uk-accordion-title text-md mx-2 font-semibold" href="#" onClick={handleopen}>
                                     {open?
                                      <GrFormSubtract className='plaec' />
                                     :<AiOutlinePlus className='plaec'/>}

                                      <div class="mb-1 text-sm font-medium">  </div> Course </a>

                                <div className="uk-accordion-content mt-3">

                            <ul className="course-curriculum-list" uk-switcher="connect: #video_tabs; animation: uk-animation-fade">
                                    {fetchdata.videoslinks.map((item, index)=>{
                                        if(coursepurshase){
                                         return<li className='uk-active'  key={index} onClick={()=>Nextvideo(item.courselink, item.courseepisode, item.id)}>
                                         <a href="#" key={index}>
                                         {item.courseepisodetitle.substring(0, 20)+"..."} <span className="">{item.courseduration}</span>
                                         </a>
                                     </li>
                                        }
                                    })}


                                </ul>

                            </div>
                        </div>
                        {/* <div className="pt-2">
                            <a className="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div className="mb-1 text-sm font-medium"> Section 2 </div> Your First webpage  </a>
                            <div className="uk-accordion-content mt-3">

                                <ul className="course-curriculum-list">
                                    <li>
                                        <a href="#modal-example" uk-toggle>
                                             Headings
                                            <span> 4 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#modal-example" uk-toggle>
                                             Paragraphs
                                            <span> 5 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#modal-example" uk-toggle>
                                            Emphasis and Strong Tag
                                            <span> 8 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#modal-example" uk-toggle>
                                            Brain Streak
                                            <span> 4 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#modal-example" uk-toggle>
                                            Live Preview Feature
                                            <span> 5 min </span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div> */}
                        {/* <div className="pt-2">
                            <a className="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div className="mb-1 text-sm font-medium"> Section 3 </div> Build Complete Webste  </a>
                            <div className="uk-accordion-content mt-3">

                                <ul className="course-curriculum-list font-medium">
                                    <li>
                                        <a href="#">
                                             The paragraph tag
                                            <span className="hidden"> 4 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                             The break tag
                                            <span className="hidden"> 5 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Headings in HTML
                                            <span className="hidden"> 8 min </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Bold, Italics Underline
                                            <span className="hidden"> 4 min </span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="mt-5">
                    {/* <h3 className="mb-4 text-lg font-semibold"> Quizzes</h3> */}
                    <ul>
                        {Question.map((item)=>{
                              return  <li className="capitalize text-lg font-semibold cursor-pointer list-disc px-2" onClick={()=>handleQuest(item.id, item.course_type)}>{item.question_name} </li>
                        })}
                    </ul>

                </div>

                <div className="mt-1">

                    {/* <ul>
                     {downresult?

         <li className="capitalize text-sm font-semibold cursor-pointer px-2" onClick={handleDowncert}>Download Certificate</li>

                     :
                     greatereight?  <li className="capitalize text-sm font-semibold cursor-pointer px-2" onClick={handleDownload}>request for Certificate</li>:""}

                    </ul> */}

                </div>

            </div>
       {/*end   sidebar list */}
       {/*  overly for mobile */}
            <div className="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>
     {/*  end overly for mobile  */}
      </div>

        {/* Main Contents  */}
      <div className="main_content">
      <div className="relative">

<ul className="uk-switcher relative z-10" id="video_tabs">

    {/* <li className="uk-active"> */}
        {/* <!-- to autoplay video uk-video="automute: true" --> */}
        {answerone || answertwo?<div className=" embed-video uk-active overflow-y-scroll">
        <Document
        className="flex flex-row justify-center items-center w-full sm:w-full sm:flex sm:flex-row sm:justify-center sm:items-center md:flex md:flex-row md:justify-center md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center"
        file={links?links:fetchdata.videoslinks[0].courselink} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
      </Document>

        </div>: <div className="embed-video uk-active">
        <Player
          width="100%"
          height="100%"
          ref={handref}
             src={links?links:fetchdata.videoslinks[0].courselink}>

             <BigPlayButton   position="center" />
          </Player>

        </div>}


    {/* </li> */}

</ul>
<div className="bg-gray-200 w-full h-full absolute inset-0 animate-pulse"></div>
</div>
<nav className="cd-secondary-nav border-b md:p-0 lg:px-6 bg-white " uk-sticky="cls-active:shadow-sm ; media: @s">
                <ul uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
                    <li><a href="#" className="lg:px-2">   Overview </a></li>
                </ul>
            </nav>

<div className="container">

            <div className="max-w-2xl lg:py-6 mx-auto uk-switcher" id="course-tabs">
            <div className="text-3xl mt-1 text-[#0A033C] capitalize py-2 font-sans relative grid place-content-center grid-cols-1 sm:text-3xl sm:mt-1 gap-4 sm:text-[#0A033C] sm:capitalize sm:py-2 sm:font-sans sm:relative sm:grid sm:place-content-center sm:grid-cols-1 sm:gap-4   md:text-3xl md:mt-1 md:text-[#0A033C] md:capitalize md:py-2 md:font-sans md:relative md:grid md:place-content-center md:grid-cols-2    lg:text-3xl lg:mt-1 lg:text-[#0A033C] lg:capitalize lg:py-2 lg:font-sans lg:relative lg:flex lg:flex-row lg:items-center">

{answerone || answertwo?    <section className='w-1/2 flex flex-row items-center space-x-3'>
      <a className=' w-10 h-10 text-sm flex items-center justify-center rounded-l-md  bg-blue-700 text-white cursor-pointer' onClick={handleprev}>
      <FcPrevious onClick={handleprev}/>
      </a>
     {voicestatus?
        <a className='w-10 h-10 rounded bg-white  mt-2 grid place-content-center cursor-pointer' onClick={()=>handlechangstatus()}>
        <FaStopCircle className="text-2xl text-red-500 " onClick={()=>handlechangstatus()}/>
     </a>
     :
 <a className='w-10 h-10 rounded bg-white  mt-2 grid place-content-center cursor-pointer' onClick={()=>handleclick()}><BsFillPlayFill className="text-2xl  " onClick={()=>handleclick()}/></a>
}

      {/* <a className='w-10 h-10 rounded bg-white  mt-2 grid place-content-center cursor-pointer'>
          {voicestatus?  <FaStopCircle className="text-2xl text-red-500 " onClick={()=>handlechangstatus()}/>
         : <BsFillPlayFill className="text-2xl text-red-500 " onClick={()=>handlechangstatus()}/> }
          </a> */}

       <a className='w-10 h-10 text-lg flex items-center justify-center rounded-l-sm  bg-white cursor-pointer ' onClick={()=>handleCancel()}><FcCancel onClick={()=>handleCancel()}/></a>
       {speaking == true?
       <a className=' w-10 h-10 text-sm flex items-center justify-center rounded-r-lg bg-blue-700 text-white opacity-20 cursor-pointer' disabled>
        <FcNext/>
       </a>
       :
     <a className=' w-10 h-10 text-sm flex items-center justify-center rounded-r-lg  bg-blue-700 text-white cursor-pointer' onClick={handlenext}>
        <FcNext onClick={handlenext}/>
        </a>}


    </section>:""}

    {answerone || answertwo?<section className='w-full flex flex-row items-center space-x-3 text-left   md:w-2/5 md:flex md:flex-row md:items-center md:space-x-3 md:text-left lg:w-1/5 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:text-left'>
            <select className='w-60 rounded-md outline-none border-none text-xs'  onChange={(e)=>handlenumsele(e)}  >
               {voices.map((item, index)=><option className="text-xs" value={coursenum} key={index}>{item.name}</option>)}
            </select>
         </section> :""}

  {answerone || answertwo? <section className='w-1/4 flex flex-row items-center space-x-3 text-left'>
        <div className='w-full flex flex-row items-center'>
        <span className='w-full float-right text-sm  flex flex-row items-center md:w-full md:float-right md:text-sm  md:flex md:flex-row md:items-center lg:w-1/3 lg:float-right lg:text-sm  lg:flex lg:flex-row lg:items-center' >{pageNumber} of {numPages}</span>
        </div>
    </section>:""}
 </div>






                {/* <!--  Overview --> */}
                <div>

                    <h4 className="text-2xl font-semibold"> About this course </h4>

                    {/* <p> Learn Web Development Without Writing Much Code </p> */}

                    <hr className="my-5"/>

                    <div className="grid lg:grid-cols-3 mt-8 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold"> Description </h3>
                        </div>
                        <div className="col-span-2">
                            <p>

                              <Markup content={fetchdata.coursedetails}></Markup>
                                <br/>
                                {/* <a href="#" className="text-blue-500">Read more .</a> */}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold"> What You’ll Learn </h3>
                        </div>
                        <div className="col-span-2">
                            {fetchdata.whothiscoursefor}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold"> Certification </h3>
                        </div>
                        <div className="col-span-2">
                           {fetchdata.certification}
                        </div>

                    </div>


                </div>

                {/* <!--  Announcements --> */}


                {/* <!-- faq --> */}



            </div>
        </div>

   <article className={pop?'bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 grid place-content-center overflow-y-scroll py-4':'hidden'} >
        <section className='p-3 bg-white  w-11/12 h-32 grid  place-content-center text-black text-base sm:text-base md:text-base lg:text-lg'>
            <div className="w-full">
                <section className='w-1/5 float-right gird place-content-center'>
                    <a className='w-6 h-6  rounded-full bg-blue-500 text-white grid place-content-center cursor-pointer' onClick={()=>Setpop(false)}>x</a>
                </section>
            </div>
          <h2 className='text-black text-base sm:text-base md:text-base lg:text-base capitalize'>an email has be sent to your email address</h2>
        </section>
   </article>
</div>






    </div>

  );
}

if(document.getElementById('watch')){
ReactDOM.render(<Coursewatch/>, document.getElementById('watch'))
}
