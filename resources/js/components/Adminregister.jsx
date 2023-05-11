import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import PasswordChecklist  from  'react-password-checklist';
export default function Adminregister() {
    let url = `${window.location.origin}/`;
    const handleClick =(e)=>{
     e.preventDefault();
     let data = e.target.dataset.name
     if(data == 'companylogin'){
       window.location.href = url+data
     }else{
    let link = `${url}authenticate`;
     window.location.href = link;
     }

    }
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [pasword, Setpasssword] = useState('');
    const [terms, Setterms] = useState(false);
    const [password_confirmation, Setpassword_confirmation] = useState('');
   const [Alert, SetAlert] = useState('');
   const [captcha, Setcaptcha] = useState('')
   const [loader, setloader] = useState(false)
   const [showbtn, setShowbtn] = useState(false)

    const handleSubmit = (e)=>{
       e.preventDefault();
       let company = 'company'
       setloader(true)
        let formData = new FormData();
        formData.append('fullname', fullname)
        formData.append('email', email)
        formData.append('captcha', captcha)
        formData.append("password", pasword)
        formData.append('password_confirmation', password_confirmation)
        formData.append("term", terms)
        formData.append("company", company)
          let urltwo = `${url}companyregister`;
          axios.post(urltwo, formData).then(res=>{
               //console.log(res)
             if(res.data.success){
               SetAlert(res.data.success)
               setloader(false)
               window.scrollTo(0, 0)
               setTimeout(()=>{
                window.location.href = `${url}activationmail`;
               },1100)
             }

         }).catch(erorr=>{
            let error = erorr.response.data.errors
            if(error.term){
               SetAlert(error.term[0])
               setloader(false)
               window.scrollTo(0, 0)
             } else if(error.fullname){
               SetAlert(error.fullname[0])
               setloader(false)
               window.scrollTo(0, 0)
             }else if(error.email){
               SetAlert(error.email[0])
               setloader(false)
               window.scrollTo(0, 0)
             }else if(error.password){
               SetAlert(error.password[0])
               setloader(false)
               window.scrollTo(0, 0)
             }else if(error.captcha){
                // captcha
                SetAlert(error.captcha[0])
                setloader(false)
                setTimeout(()=>{
                    window.location.href=`${url}companyregister`
                },1000)

        }
         })






    }

    const handleterms = ()=>{
        window.location.href = ` ${url}terms`;
    }

    const [changepass, setChangepass] = useState(false)
    const [conpass, setConpass] = useState(false)


    const handleForget = ()=>{
        window.location.href = `${url}forgotten/Company`;
    }

  return (
    <div className='w-full py-6'>
     <section className='  m-auto  w-11/12 flex flex-row items-center  shadow-md rounded-md    sm:m-auto sm:w-10/12 sm:flex sm:flex-row sm:items-center sm:shadow-md sm:rounded-md        md:m-auto md:w-10/12 md:flex md:flex-row md:items-center  md:shadow-md md:rounded-md   lg:m-auto lg:w-3/4 lg:flex lg:flex-row lg:items-center  lg:shadow-md lg:rounded-md'>
     <div className='hidden sm:hidden  md:w-1/2 md:block  lg:w-1/2 lg:block' >
     <div className="w-full">
     <div className='h-[40rem] imgthree'>
             </div>
     {/* <Carousel  infiniteLoop useKeyboardArrows autoPlay swipeable={false} dynamicHeight={true} showThumbs={false} showArrows={false} width={'100%'}>
               <div className='h-[40rem] imgone'>
            </div>
            <div className='h-[40rem] imgtwo'>
            </div>
            <div className='h-[40rem] imgthree'>
            </div>
       </Carousel> */}
       </div>
     </div>
     <div className='w-full grid grid-cols-1 place-content-center      sm:w-full sm:grid sm:grid-cols-1 sm:place-content-center  md:w-1/2 md:grid md:grid-cols-1 md:place-content-center lg:w-1/2 lg:grid lg:grid-cols-1 lg:place-content-center'>
        {/* <span className='w-full'>
            <div className='border flex items-center w-3/5 m-auto rounded-md'>
                <button className='bg-[#E93E30] text-white w-12'>
                    <AiOutlineGooglePlus className='text-3xl' data-name="auth/google/redirect" onClick={(e)=>handleClick(e)}/>
                </button>
                <span className='capitalize text-xs px-3 sm:capitalize sm:text-xs sm:px-3 md:capitalize md:text-sm md:px-3 lg:capitalize lg:text-sm lg:px-3'>
                Signup with google
                </span>
            </div>
        </span> */}
        <article className='w-full flex flex-col items-center justify-center mt-4'>
            <div className='w-10/12 flex flex-row items-center m-auto'>
                <span className='w-1/5 border m-0 border-black'></span>
                <span className='w-3/5 capitalize text-xs sm:text-sm md:text-base lg:text-base px-3'>sign up with your email</span>
                <span className='w-1/5 border m-0 border-black'></span>
            </div>
              <span className='text-center text-[#E93E30] capitalize text-lg mt-2 py-1'>{message?message:""}</span>
              <span className={Alert =='your account has been created'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>
            <article className='w-3/4 flex flex-col items-center'>
                <span className='w-full text-left capitalize text-lg'>company Name</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" onChange={(e)=>setfullname(e.target.value)} value={fullname} />
            </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg'>email</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" onChange={(e)=>setemail(e.target.value)} value={email} autoComplete="off"/>
            </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <article className='w-full'>
                <span className='w-1/3 text-left capitalize text-lg float-left' >
                <img src={captchaimg} />
                 </span>
                </article>
                 <input type="text" className="w-full border py-2 rounded-md p-3 mt-1" onChange={(e)=>Setcaptcha(e.target.value)} value={captcha} autoComplete="off" />
             </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg' >pasword</span>
                <div className="w-full relative">
                <input type={changepass == false?"password":"text"}  className="w-full border py-2 rounded-md p-3" onChange={(e)=>Setpasssword(e.target.value)} value={pasword} />
                <span className=" absolute   top-3 right-2">
                    {changepass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setChangepass(true)}/>:
                        <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setChangepass(false)}/>
                    }
                 </span>
               </div>
            </article>


            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg' >confirm pasword</span>
                <div className="w-full relative">
                <input type={conpass == false?"password":"text"} className="w-full border py-2 rounded-md p-3" onChange={(e)=>Setpassword_confirmation(e.target.value)} value={password_confirmation} />
                <span className="absolute   top-3 right-2">
                    {conpass == false?<AiOutlineEye className='w-6 h-6' onClick={()=>setConpass(true)}/>:
                    <AiOutlineEyeInvisible className='w-6 h-6' onClick={()=>setConpass(false)}/>}
                 </span>

                 <span className='w-full '>
                    {pasword != "" || password_confirmation != ""?
                        <PasswordChecklist
                        rules={["minLength","specialChar","number", "lowercase", "match"]}
                        minLength={8}
                        value={pasword}
                        valueAgain={password_confirmation}
                        onChange={(isValid) => {
                            setShowbtn(isValid)
                        }}
                            />
                    :""}

                  </span>
                </div>
            </article>

            <article className='w-3/4 flex flex-row items-center mt-1 space-x-1 '>
                 <span className='w-11/12 text-xs cursor-pointer text-right  text-blue-700 sm:w-11/12 sm:text-xs sm:cursor-pointer sm:text-right sm:text-blue-700 md:w-11/12 md:text-sm md:cursor-pointer md:text-right md:text-blue-700 lg:w-11/12 lg:text-sm lg:cursor-pointer lg:text-right lg:text-blue-700' onClick={handleForget}>
                    Forgotten Password
                 </span>
             </article>

            <article className='w-3/4 flex flex-row items-center mt-4 space-x-1'>
                <span className='w-1/12'>
                <input type="checkbox" onChange={(e)=>Setterms(e.target.checked)} value={terms}  style={{width:"20px", height:"20px"}}/>
                </span>
                <span className='w-11/12 text-xs cursor-pointer flex flex-row items-center sm:w-11/12 sm:text-xs sm:cursor-pointer  sm:flex sm:flex-row sm:items-center md:w-11/12 md:text-sm md:cursor-pointer md:flex md:flex-row md:items-center  lg:w-11/12 lg:text-sm lg:cursor-pointer lg:flex lg:flex-row lg:items-center' onClick={handleterms}>
                {/* I agreed to the Terms & Conditions */}
                <h3>I agreed to the</h3> <h3 className='text-blue-600' onClick={handleterms}>Terms & Conditions</h3>
                </span>
            </article>
            <article className='w-3/4 flex flex-col items-center mt-4'>
                {showbtn == false?

                <button className='text-lg w-60 rounded-md bg-[#A32926] capitalize text-white opacity-25' disabled onClick={(e)=>handleSubmit(e)}>
                 {loader?'please wait...':'Sign up'}
                 </button>
                :
                 <button className='text-lg w-60 rounded-md bg-[#A32926] capitalize text-white' onClick={(e)=>handleSubmit(e)}>
                 {loader?'please wait...':'Sign up'}
                 </button>}

                </article>

                <article onClick={(e)=>handleClick(e)} data-name="companylogin"  className='w-3/4 flex flex-col items-center  justify-center mt-4 text-black cursor-pointer'>
                Already have account?  Sign in
                </article>
        </article>
     </div>
    </section>
   </div>
  )
}

if(document.getElementById('adminreg')){
ReactDOM.render(<Adminregister/>, document.getElementById('adminreg'));
}
