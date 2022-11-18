import React,{useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import {AiOutlinePlus} from 'react-icons/ai';
import {FiExternalLink} from 'react-icons/fi';
export default function Study() {
    let url = `${window.location.origin}/`;
    const [fullname, Setfullname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, Setemail] = useState('')
    const [phone, Setphone] = useState('')
    const [address, Setaddress] = useState('')
    const [Educational, SetEducational] = useState('')
    const [school, Setschool] = useState('')
    const [captcha, Setcaptcha] = useState('')
    const [message, Setmessage] = useState('')
    const [load, Setload] = useState(false)
    const [disp, setDisp] = useState(false)
    const handleClick =()=>{
        Setload(true)
        let formData = new FormData();
        formData.append('fullname', fullname)
        formData.append('lastname', lastname)
        formData.append('email', email)
        formData.append("address", address)
        formData.append('educational', Educational)
        formData.append("phone", phone)
        formData.append('school', school)
        formData.append('captcha', captcha)
          let urltwo = `${url}studyabroad`;
          axios.post(urltwo, formData).then(res=>{

             console.log(res)
             if(res.data.success){
                Setload(false)
                Setmessage(res.data.success)
             }
          }).catch(err=>{
            let error = err.response.data.errors
            if(error.email){
                Setload(false)
                Setmessage(error.email[0])
             }else if(error.fullname){
                Setload(false)
                Setmessage(error.fullname[0])
             }else if(error.phone){
                Setload(false)
                Setmessage(error.phone[0])
             }else if(error.address){
                Setload(false)
                Setmessage(error.address[0])
            }else if(error.educational){
                Setload(false)
                Setmessage(error.educational[0])
            }else if(error.school){
                Setload(false)
                Setmessage(error.school[0])
            }else if(error.captcha){
                    // captcha
                    Setload(false)
                    Setmessage(error.captcha[0])
                    window.location.href = `${url}studyabroad`
            }
          })
    }

    const handleShow =()=>{
    if(disp == false){
        setDisp(true)
    }else if(disp == true){
        setDisp(false)
    }
    }


    const handlearden = ()=>{
        window.location.href = `https://arden.ac.uk/agent/themorgansconsortiumconsultinglimited`
    }
  return (
   <div  id="wrapper" className="horizontal bg-white dark:bg-black" >
      <Navbar/>
      {/* top */}
      <section className="w-full flex flex-row container bg-white ">
        <div className="w-full grid place-content-center px-4 tracking-wide   sm:w-full sm:grid sm:place-content-center sm:px-4  sm:tracking-wide  md:w-3/5 md:grid md:place-content-center md:tracking-wide md:px-4  lg:w-3/5 lg:grid lg:place-content-center  lg:tracking-wide lg:px-4 ">
        <h4 class="text-lg  sm:text-lg md:text-4xl lg:text-5xl  lg:leading-normal leading-normal font-medium mb-7 position-relative text-[#A32926] dark:text-[#A32926]">Study Abroad Program </h4>
        <div className="text-black dark:text-black   justify-items-center px-2 py-2 text-justify gap-4">
           <p className='text-sm'> We are your strategic, Study Abroad Buddy with tons of experience and reach to boot!
        <p className='text-sm mt-2'> At TMC Institute, we boast strongly of our Study abroad program; Its structure, and our advisers.</p>
    This is because our advisers have been helping students take their first steps towards building a successful future with international education since 2019 with loads of successful relocations and referrals.</p>

<p className='text-sm mt-2'> As the official, in-country representatives for a ton of international education partners, we will help you every step of the way,
from helping you decide what you would prefer to study
to help you sort out your application and admissions process and also assisting in the application process for your visa.</p>

 <p className='text-sm mt-2'>At TMC Institute, we make sure that all your career pathway needs such as your program selection, study location,
accommodation, course fees, visa requirements and future career options are fulﬁlled in accordance with your preferences.</p>

 <p className='text-sm mt-2'>The success of our students oftentimes reﬂect on our intentional dedication to guiding them through the most appropriate path out of numerous available options.</p>
                                                   </div>

                         <div className="relative mt-10 space-x-3 flex flex-col items-center gap-2 sm:relative sm:mt-10 sm:space-x-3 sm:flex sm:flex-col sm:items-center md:relative md:mt-10 md:space-x-3 md:flex md:flex-col md:items-center lg:relative lg:mt-10 lg:space-x-3 lg:flex lg:flex-row lg:items-center ">
                        <a href="#fill" className="btn btn-primary rounded-full mr-1 px-2 py-2  cursor-pointer">Get Started</a>

                        <a className="btn  rounded-full border-2 border-blue-600 text-blue-600 mr-1 px-2 py-2 capitalize cursor-pointer flex flex-row items-center" onClick={handlearden}>arden university <FiExternalLink className='text-sm text-black' onClick={handlearden}/></a>
                    </div>
        </div>
        <div className=" hidden sm:hidden md:w-2/5 md:bg-white md:block lg:w-2/5 lg:bg-white lg:block">
        <Carousel  infiniteLoop useKeyboardArrows autoPlay swipeable={false} dynamicHeight={true} showThumbs={false} showArrows={false} width={'100%'}>
                <div className='h-[40rem] '>
            <img src='https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1653470591/Tmc%20institute/black_skin_woman_ulalcy.jpg'  className="w-full h-full object-fill "/>
             </div>
             <div className='h-[40rem]'>
            <img src='https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1653470587/Tmc%20institute/brown_skin_woman_tfgagm.jpg' className="w-full h-full object-cover" />
             </div>
             <div className='h-[40rem] '>
            <img src='https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1653470582/Tmc%20institute/feminist_y5k6vm.jpg' className="w-full h-full  object-fill"/>
             </div>
        </Carousel>
        </div>
      </section>
         {/* top */}

        <section className="relative md:py-24 py-16 bg-white" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/q_auto:low/v1657444951/Tmc%20institute/4_gfidd0.jpg" class="rounded-lg shadow-lg relative" alt="" />
                            {/* <div class="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" class="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-primary-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="lg:ml-7">
                            <h6 className="text-primary-600 text-sm lg:text-basefont-medium uppercase mb-2 text-[#A32926] ">What our Study Abroad can do for you  ?</h6>
                            <h3 className="text-sm max-w-2xl mx-auto text-black">Without much ado, we would like to take you through a series of services we offer via our Study Abroad program. Which are; </h3>
                              <h2 className=" md:text-sm text-sm lg:text-base font-medium dark:text-white mt-4 text-[#A32926]">Education search </h2>
                            <div className="text-sm  max-w-2xl mx-auto text-black text-justify gap-4">
                           <p className='text-sm'>We provide you with a catalogue of international universities and educational institutions for you to browse through and do your preliminary findings on what they have to offer.</p>
                         <p className='text-sm mt-2'> In the event that you are looking to register for your first online course, or you are neck-deep in changing study mode, we are right here for you.</p>
                         <p className='text-sm mt-2'>We also understand that returning to studies after a break is never an easy task and finding the right course that leads to the right job is even a harder task, so we proffer our assistance in the form of our time,
                            experience and extensive reach to help make the process easier for you with a selection of our job-ready online courses.</p>
                            <p className='text-sm mt-2'>When you enroll for your online courses through TMC Institute we will ensure that you are supported to be ready to start your studies
                            We provide access to enrollment for online courses from registered university providers. <a className='cursor-pointer' onClick={handlearden}>BROWSE OUR ONLINE COURSES »</a></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="w-full sm:w-full md:w-10/12 lg:w-10/12 mt-lg-11 mx-auto p-4 lg:p-10 ">
    <article className="space-y-2 uk-article">
    <h4 className="font-medium pt-3 text-sm lg:text-base text-[#A32926]">Career and study advice </h4>
        <div className="lead text-black text-sm mx-auto  text-justify">
<p className='text-sm '>As one of the pioneers of the new and renewed Study Abroad Program in West Africa, we’ll guide you through the various study abroad programmes and help you choose what and where to study based on your needs, preferences and circumstances.
 As part of our Career and Study advice, TMC Institute also renders Career Advisory Services.
 Asides from providing accurate guidance and counselling to students across the globe when it comes to their careers, TMC Institute has been successful in helping our students achieve their short and long-term goals.</p>

<p className='text-sm mt-2'>As a result of our understanding of the changing nature of the world we live in today and the evolving impact of technological innovation and legislative requirements, we take a global view when advising students on the right career pathway for their career by ensuring SMART Pathways (Specific, Measurable, Achievable, Relevant and Timely).
AT TMC Institute Study Abroad program, we through our student advisers and our all-inclusive structure, ensure that our pathways produce outcomes that are specific to each student’s goals.
</p>
<p className='text-sm mt-2'>
Our services include a range of activities such as developing career pathways, skills assessment, professional development and of course, mentorship.
We undertake stepwise procedure while giving career advice to our students; after listening to the student, we take into consideration all the related circumstances of the student including but not limited to; student goal, choice of study, previous qualification and experiences, financial situation and student academic capacity.
Our experienced and highly knowledgeable counsellors aim to provide the best guidance to the students for their education pathways by looking out for various recognised institutions.
</p>
<p className='text-sm mt-2'>
Here, we make sure that all the needs are fulfilled such as the course selection, study campus location accommodation, course fees, visa requirements and future career options in accordance with each student’s needs, preferences and circumstances. The success our students have achieved reflects our dedication to guiding them through the most appropriate path out of numerous available options.
We are excited to be a partner in developing and shaping students to be global citizens.
For more information about TMC Institute Career Advisory Services, please contact one of our friendly teams!
</p>
 </div>

<h4 className="font-medium pt-0 sm:pt-0 md:pt-3 lg:pt-3 text-sm lg:text-base text-[#A32926] text-justify mt-0 sm:mt-3 md:mt-3 lg:mt-4">Application and Admissions Processing and Support.</h4>
        <div className="lead text-black text-sm text-justify">
        <p className='text-sm'>
        Technical information which included the IP Address used by the third party to connect the computer to the internet, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
        </p>
        <p  className='text-sm mt-2'>
        Our access to the admissions department at our partner universities and educational institutions ensures that our students get a quicker and far more streamlined application process than other programs.
        </p>
        <p className='text-sm mt-2'>
        In rendering our support towards Admissions Processing, we generally acknowledge that to study in a country, you will need to apply for admission
to an institution in that country and also for a student visa from the Country’s Government.
        </p>
 </div>

     <ul>
        <li className="font-medium  text-sm lg:text-base text-[#A32926] mt-4">Here are a number of steps you must go through:</li>
        <li className="lead text-black text-sm">1. Deciding on your preferred course and institution. </li>
        <li className="lead text-black text-sm">2. Submitting your application to the institution. </li>
        <li className="lead text-black text-sm">3. Receiving and accepting a Letter of Offer. </li>
        <li className="lead text-black text-sm">4. Receiving your electronic Confirmation of Enrolment (eCoE)., </li>
        <li className="lead text-black text-sm">5. Applying for your student visa </li>
     </ul>

     {/* 4. Pre-departure assistance  */}

     <h4 className="font-medium pt-3 text-sm lg:text-base text-[#A32926] mt-4">Pre-departure assistance </h4>
     <div className="lead text-black text-sm text-justify">
      <p className='text-sm '>  As the wholesome institution that we are, we go the extra mile to ensure your comfort. This extends to how seamlessly and swiftly you settle in.
      So, we make sure to help you organise everything from accommodation to airport pickups and orientation in your new home.</p>
      </div>

    </article>
</div>

{/* <div className="w- m-auto border-2 ">
    <span>

    <span className='block text-[#A32926] w-8 h-8 float-right'>
        +
        </span>
    </span>

    </div> */}

<div className="w-11/12 rounded-sm  shadow-md sm:w-11/12 sm:rounded-sm  sm:shadow-md md:w-10/12 md:rounded-sm md:shadow-md   lg:w-10/12 lg:rounded-sm  lg:shadow-md mt-2 mx-auto lg:p-1 p-1">
<section className='w-full flex flex-row items-center justify-between px-2'>
    <span><h4 className="pt-0 sm:pt-0 md:pt-3 lg:pt-3 text-sm sm:text-base md:text-xl lg:text-2xl text-[#A32926] capitalize font-bold">The benefits of a global education </h4></span>
                  <button className='w-6 h-6  rounded-full bg-white text-lg text-[#A32926] font-bold grid place-content-center  float-right ' onClick={handleShow}>
                   {disp == true? '-':'+'}
                    </button>
            </section>
    <article className= {disp == true ?"px-3 py-1 block transition duration-150 ease-in-out ":"hidden transition duration-150 ease-in-out " }>
    <div className="text-center mt-1 sm:mt-2 md:mt-4 mb-6 lg:mt-10">
    {/* <h4 className="font-medium pt-3 text-sm md:text-xl lg:text-2xl text-[#A32926]">The benefits of a global education </h4> */}
    </div>
    <article className="space-y-2 uk-article">
    <h4 className="font-medium pt-3 text-sm lg:text-base text-[#A32926]">Better employment opportunities </h4>
        <p className="lead text-black text-sm text-justify px-0 md:px-2 lg:px-0">
            This is an extremely valid reason to consider getting global education.
        This is because whether you choose to stay abroad after your studies or you choose to return to your home country,
        studying abroad contributes significantly to having a more global mindset, which is highly favoured by employers as it directly converts in work done. </p>

        <h4 className="font-medium pt-3 text-sm lg:text-base text-[#A32926]">Education at top-tier institutions</h4>
        <p className="lead text-black text-sm text-justify px-0 md:px-2 lg:px-0">
        More often than not, the best isn’t always at our doorstep or fingertips.
        Hence the need to explore and put ourselves out there. This is why we encourage students to seek global certification through our study abroad program.
        As it provides them access to the best institutions for their chosen field of study across the globe.
        Hence, students don't have to limit themselves to their home country, as they can choose and apply based on their long-term goals. </p>


        <h4 className="font-medium pt-3 text-base text-[#A32926]">A route to immigration </h4>
        <p className="lead text-black text-sm text-justify px-0 md:px-2 lg:px-0">
        Now although some people choose to return home after studying abroad,
        a lot of them can’t deny the freedom that having the opportunity to stay in their new found country.
         Many countries have reduced immigration requirements if you have chosen to start off by studying there.</p>

         <h4 className="font-medium pt-3 text-base text-[#A32926]">Build international connections  </h4>
        <p className="lead text-black text-sm text-justify px-0 md:px-2 lg:px-0">
        Studying at an international institution provides students with the fantastic opportunity to make friends across the globe,
        not to mention encounter new cultures, languages and experiences. .</p>
    </article>


    <div className="text-center mt-4 mb-6 lg:mt-10">
    <div className="w-full">
        <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-xl text-[#A32926] ">Frequently asked questions about studying abroad  </h4>
    </div>
    </div>
    <article className="space-y-2 uk-article">
        <p className="lead text-black text-sm text-justify px-0 md:px-2 lg:px-0">
        If you don't find the answer to your question below, please don't hesitate to get in touch with us.
         Our skilled study advisers are here to assist you in any and every way they can. </p>
         <div className="w-full">
         <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]">Can you help students from anywhere in the world?  </h4>
         </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        Yes, we can. Our advisers can assist you from any location. Counselling sessions are done via Zoom, Meet or a digital platform that works for you; as well as over the phone.
All paperwork is received via a secure portal so advice and assistance can be offered to anyone without the need to come to our physical offices.  </p>

<div className="w-full ">
<h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]">Do you have a special agreement with the institutions?</h4>
</div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        Yes, we do. In most cases we will have a contract which allows us to represent the institution. This means that the institution will have given us the specialised training to our study advisers so we have direct access to the admissions team.   </p>

        <div className="w-full ">
        <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-base lg:text-base text-[#A32926]">Do I need to do a foundation/pre-university year or can I go direct to the first year? </h4>
        </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        This will depend on your grades. However, in most cases, you should be able to enter the first year if you have attained high
        grades and have studied for at least twelve years. It also depends on your country and your institution of choice.
         So please discuss more with your study adviser.  </p>
         <div className="w-full ">
         <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]">How long will my visa last?  </h4>
         </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        Your visa will generally be valid for the duration of your course. However, it will depend largely on the type of visa you applied for.
        It may be possible to move to a post-study visa,
        depending on your course and country you study in. Please speak to your study adviser for more details.</p>
        <div className="w-full">
        <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]">How long will my visa take once I have applied?  </h4>
        </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        It will depend on the country and the type of visa you’ve applied for.
        There are also fast track visa application services for most countries. Speak to your study adviser to find out more. </p>
        <div className="w-full">
        <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]" >Can I work while I study? </h4>
        </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        It will depend on your visa and country. In most cases, you will be able to work around 20hours per week and full-time during breaks.  </p>
        <div className="w-full ">
        <h4 className="font-medium pt-3 text-lg sm:text-lg  md:text-lg lg:text-base text-[#A32926]">Can I get my tuition deposit back if I decide not to go to the university I applied to or if I get a visa rejection?  </h4>
        </div>
        <p className="lead text-black text-sm text-justify m-auto px-0 md:px-2 lg:px-0">
        This will depend on the institutions refund policy. In most cases you should be able to apply for a refund of your deposit if you have not yet arrived at the institution.</p>


</article>
</article>
</div>



<section className="relative md:py-24 py-16 bg-white" id="fill">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-primary-600 text-base font-medium uppercase mb-2">Contact us</h6>
                    <h3 className="mb-4 md:text-2xl text-xl font-medium text-[#A32926]">Get In Touch !</h3>

                    <p className=" text-[#A32926] max-w-xl mx-auto caplitalize text-xl">please complete all fields</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6" >

                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow bg-white ">
                        <p className={message == 'Thank you for completing our form'?"text-center flex justify-center align-center text-green-500":"text-center flex justify-center align-center text-red-500"}>{message?message:""}</p>
                            <form method="post" name="myForm" id="myForm" >
                                <p claclassNamess="mb-0" id="error-msg"></p>
                                <div id="simple-msg"></div>
                                {/* grid lg:grid-cols-12 lg:gap-10 */}
                                <div className="lg:flex lg:flex-row lg:items-center lg:justify-between ">
                                    <div className="lg:col-span-4 mb-5">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">First Name</span>
                                        <input type="text"name="name" id="name"  className="form-input border" onChange={(e)=>Setfullname(e.target.value)} value={fullname}/>
                                    </div>

                                    <div class="lg:col-span-4 mb-5 flex flex-col items-center">
                                        <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">Last Name</span>
                                        <input type="text" name="lastname" id="lastname"  className="form-input border" onChange={(e)=>setlastname(e.target.value)} value={lastname} placeholder=""/>
                                    </div>

                                    {/* <div class="lg:col-span-4 mb-5">
                                        <input type="email" name="email" id="email" onChange={(e)=>Setemail(e.target.value)} value={email} className="form-input border" placeholder="Email:"/>
                                    </div> */}
                                </div>

                                <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
                                    <div className="lg:col-span-4 mb-5 flex flex-col items-center">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">Educational background</span>
                                        <input type="text"name="Educational" id="Educational" onChange={(e)=>SetEducational(e.target.value)} value={Educational}  className="form-input border" />
                                    </div>

                                    <div class="lg:col-span-4 mb-5 flex flex-col items-center">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">School of Choice</span>
                                        <input type="text" name="school" id="school" className="form-input border" onChange={(e)=>Setschool(e.target.value)} value={school} />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">Phone Number</span>
                                        <input type="tel" name="phone" id="phone" onChange={(e)=>Setphone(e.target.value)} value={phone} className="form-input border"/>
                                    </div>
                                    </div>

                                    <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">Email</span>
                                        <input type="email" name="email" id="email" onChange={(e)=>Setemail(e.target.value)} value={email} className="form-input border"/>
                                    </div>
                                    </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                    <span className="text-black text-sm text-left w-full capitalize px-1 font-medium">Address</span>
                                        <input type="text" name="subject" id="Address" onChange={(e)=>Setaddress(e.target.value)} value={address} className="form-input border" />
                                    </div>

                                    <div class="mb-5">
                                        <span className="text-black text-sm text-left  w-1/3 capitalize px-1 font-medium">
                                         <img src={captchaimg}  />
                                        </span>
                                        <input name="comments" id="comments" className="form-input border p-3" onChange={(e)=>Setcaptcha(e.target.value)} value={captcha} />
                                    </div>
                                </div>


                                <a type="submit" id="submit" name="send" className="px-2 py-2 bg-blue-500 text-white  rounded-md h-11 justify-center flex items-center" onClick={handleClick}> {load?'please wait':'Submit'}  </a>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:ml-8">
                            <div className="flex">
                                <div className="flex-1 ml-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Phone</h5>
                                    <a  className="text-slate-400">+23417001770, 09153414314, +44-7466588324</a>
                                </div>
                            </div>

                            <div className="flex mt-4">

                                <div className="flex-1 ml-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                    <a  class="text-slate-400">enquiries@tmcinstitute.com</a>
                                </div>
                            </div>

                            <div className="flex mt-4">

                                <div className="flex-1 ml-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Location</h5>
                                    <p className="text-slate-400 mb-2">Nigeria: 2nd Floor 1, Adeola Adeoye Street Off Toyin Street ikeja, Lagos Nigeria</p>
                                    <p className="text-slate-400 mb-2">United Kingdom: 24 Holborn Viaduct London EC1A 2BN United Kingdom </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




</div>
  );
}

if(document.getElementById('study')){
    ReactDOM.render(<Study/>, document.getElementById('study'));
}


