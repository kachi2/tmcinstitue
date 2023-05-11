import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PasswordChecklist  from  'react-password-checklist';
export default function Gifted() {
    const [fullname, setfullname] = useState(personname?personname:'');
    const [email, setemail] = useState(gifted_email?gifted_email:'');
    const [pasword, Setpasssword] = useState('');
    const [terms, Setterms] = useState(false);
    const [password_confirmation, Setpassword_confirmation] = useState('');
   const [Alert, SetAlert] = useState('');
    const [loader, setloader] = useState(false)
    const [showbtn, setShowbtn] = useState(false)

   let url = `${window.location.origin}/`;
   const handleClick =(e)=>{
    e.preventDefault();
    let data = e.target.dataset.name
    if(data == 'login'){
     window.location.href = url+'login'
    }else{
      let link = `${url}auth/google/redirect`;
    window.location.href = link;
    }

   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    setloader(true)
    let company = 'user'
     let formData = new FormData();
     formData.append('fullname', fullname)
     formData.append('email', email)
     formData.append("password", pasword)
     formData.append('password_confirmation', password_confirmation)
     formData.append("term", terms)
     formData.append('company', company)
     formData.append('code', code);
       let urltwo = `${url}register`;
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
            setloader(false)
            SetAlert(error.term[0])
            window.scrollTo(0, 0)
          } else if(error.fullname){
            setloader(false)
            SetAlert(error.fullname[0])
            window.scrollTo(0, 0)
          }else if(error.email){
            setloader(false)
            SetAlert(error.email[0])
            window.scrollTo(0, 0)
          }else if(error.password){
            setloader(false)
            SetAlert(error.password[0])
            window.scrollTo(0, 0)
          }
      })
 }

 const handleterms = ()=>{
    window.location.href = ` ${url}terms`;
}
  return (
    <div className='w-full py-6'>
     <section className='  m-auto  w-10/12 flex flex-row items-center  shadow-md rounded-md py-2    sm:m-auto sm:w-10/12 sm:flex sm:flex-row sm:items-center sm:shadow-md sm:rounded-md sm:py-2      md:m-auto md:w-10/12 md:flex md:flex-row md:items-center  md:shadow-md md:rounded-md md:py-2   lg:m-auto lg:w-3/4 lg:flex lg:flex-row lg:items-center lg:py-2  lg:shadow-md lg:rounded-md'>
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
        <span className='w-full'>
            {/* <div className='border flex items-center w-3/5 m-auto rounded-md'>
                <button className='bg-[#E93E30] text-white'>
                    <AiOutlineGooglePlus className='text-3xl' data-name="auth/google/redirect" onClick={(e)=>handleClick(e)}/>
                </button>
                <span className=' capitalize text-sm px-3'>
                Signup with google
                </span>
            </div> */}
        </span>
        <article className='w-full flex flex-col items-center justify-center mt-4'>
            <div className='w-10/12 flex flex-row items-center m-auto'>
                <span className='w-1/5 border m-0 border-black'></span>
                <span className='w-3/5 capitalize text-xl px-3'>signup with your email</span>
                <span className='w-1/5 border m-0 border-black'></span>
            </div>
              <span className='text-center text-[#E93E30] capitalize text-lg mt-2 py-1'>{message?message:""}</span>
              <span className={Alert =='your account has been created'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>
            <article className='w-3/4 flex flex-col items-center'>
                <span className='w-full text-left capitalize text-lg'>fullname</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" onChange={(e)=>setfullname(e.target.value)} value={fullname} disabled/>
            </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg'>email</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" disabled onChange={(e)=>setemail(e.target.value)} value={email}/>
            </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg' >pasword</span>
                <input type="password" className="w-full border py-2 rounded-md p-3" onChange={(e)=>Setpasssword(e.target.value)} value={pasword} />
            </article>


            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg' >confirm pasword</span>
                <input type="password" className="w-full border py-2 rounded-md p-3" onChange={(e)=>Setpassword_confirmation(e.target.value)} value={password_confirmation} />

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
            </article>

            <article className='w-3/4 flex flex-row items-center mt-4 '>
                <span className='w-1/12'>
                <input type="checkbox" onChange={(e)=>Setterms(e.target.checked)} value={terms}/>
                </span>
                <span className='w-11/12 text-sm cursor-pointer' onClick={handleterms}>
                I agreed to the Terms & Conditions
                </span>
            </article>
            <article className='w-3/4 flex flex-col items-center mt-4 py-2'>
                {showbtn == false?
                <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white opacity-25' disabled onClick={(e)=>handleSubmit(e)}>
                {loader?"Please Wait...":"Sign up"}
              </button>

                :
                  <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white' onClick={(e)=>handleSubmit(e)}>
                  {loader?"Please Wait...":"Sign up"}
                </button> }

                </article>

                {/* <article onClick={(e)=>handleClick(e)} data-name="login"  className='w-3/4 flex flex-col items-center  justify-center mt-4 text-black cursor-pointer'>
                Alreay have account?  Sign in
                </article> */}
        </article>
     </div>
    </section>
   </div>
  )
}
if(document.getElementById('gifted')){
ReactDOM.render(<Gifted/>, document.getElementById('gifted'))
}
