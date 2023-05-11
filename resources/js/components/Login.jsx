import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

 function Login() {
    let url = window.location.origin;
    const handleClick =(e)=>{
        e.preventDefault();
        let data = e.target.dataset.name

        if(data == 'signup'){
           window.location.href =url+'/'+data
        }else{
         let link = `${url}/authenticate`;
        window.location.href = link;
        }

       }
       const [Alert, SetAlert] = useState('');
       const [email, setemail] = useState('');
       const [pasword, Setpasssword] = useState('');
       const [loader, setloader] = useState(false);
       const [captcha, Setcaptcha] = useState('')

       const handleSubmit = (e)=>{
        setloader(true)
        let formData = new FormData();
        formData.append('email', email)
        formData.append('captcha', captcha)
        formData.append("password", pasword)
          let urltwo = `${url}/loginusers`;
          axios.post(urltwo, formData).then(res=>{
              console.log(res)
             if(res.data.success){
               SetAlert(res.data.success)
               setloader(false)
               setTimeout(()=>{
                window.location.href = `${url}/newdashboard`;
               },1500)
             }else if(res.data.error){
                setloader(false)
                SetAlert(res.data.error)
             }

            }).catch(erorr=>{
                let error = erorr.response.data.errors
                if(error.email){
                    SetAlert(error.email[0])
                    setloader(false)
                 }else if(error.password){
                  SetAlert(error.password[0])
                  setloader(false)
                 }
                 else if(error.captcha){
                    // captcha
                    SetAlert(error.captcha[0])
                    setloader(false)
                    setTimeout(()=>{
                        window.location.href = `${url}/login`;

                    })
            }
            })
       }

       const [changepass, setChangepass] = useState(false)

  return (
    <div className='w-full py-16 sm:py-16  md:py-6 lg:py-6'>
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
                    <AiOutlineGooglePlus className='text-3xl' onClick={(e)=>handleClick(e)}/>
                </button>
                <span className='capitalize text-xs px-3 sm:capitalize sm:text-xs sm:px-3 md:capitalize md:text-sm md:px-3 lg:capitalize lg:text-sm lg:px-3'>
                Login with google
                </span>
            </div>
        </span> */}
        <article className='w-full flex flex-col items-center justify-center mt-4'>
            <div className='w-10/12 flex flex-row items-center m-auto'>
                <span className='w-1/5 border m-0 border-black'></span>
                <span className='w-3/5 capitalize text-xs sm:text-sm md:text-base lg:text-base px-3'> Login with your email</span>
                <span className='w-1/5 border m-0 border-black'></span>
            </div>
              <span className={Alert =='you have logged in successfully'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>

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



{/*
            <article className='w-3/4 flex flex-row items-center mt-4 '>
                <span className='w-1/12'>
                <input type="checkbox" onChange={(e)=>Setterms(e.target.checked)} value={terms}/>
                </span>
                <span className='w-11/12 text-sm'>
                I agreed to the Terms & Conditions
                </span>
            </article> */}
            <article className='w-3/4 flex flex-col items-center mt-4'>
                <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white cursor-pointer' onClick={(e)=>handleSubmit(e)}>
                   {loader?'please wait...':'login'}
                </button>
                </article>

                <article className='w-3/4 flex flex-col items-center  justify-center mt-4 text-black cursor-pointer' data-name="signup" onClick={(e)=>handleClick(e)}>
                Do not have an account? Sign up
                </article>
        </article>
     </div>
    </section>
   </div>

  )
}
export default Login;
if(document.getElementById('login')){
ReactDOM.render(<Login/>, document.getElementById('login'));
}
