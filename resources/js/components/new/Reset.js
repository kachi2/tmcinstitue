import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import PasswordChecklist  from  'react-password-checklist';
export default function Reset() {
    const [pasword, Setpasssword] = useState('');
    const [password_confirmation, Setpassword_confirmation] = useState('');
    const [changepass, setChangepass] = useState(false)
    const [conpass, setConpass] = useState(false)
    const [Alert, SetAlert] = useState('');
    const [showbtn, setShowbtn] = useState(false)
    const [loader, setloader] = useState(false)

    let url = `${window.location.origin}/`;
    const handleSubmit = (e)=>{

        e.preventDefault();
        setloader(true)
         let formData = new FormData();
         formData.append("password", pasword)
         formData.append('password_confirmation', password_confirmation)
         formData.append('code', code)
           let urltwo = `${url}reset`;
           axios.post(urltwo, formData).then(res=>{
                console.log(res)
              if(res.data.success){
                SetAlert(res.data.success)
                setloader(false)
                window.scrollTo(0, 0)
                // 'Individual' || $status != 'Company'
                let link =  status_type == 'Individual'?'login':'companylogin'
                setTimeout(()=>{
                    window.location.href=`${url}${link}`
                },1000)
              }

          }).catch(erorr=>{
            console.log(erorr)
             let error = erorr.response.data.errors
             if(error.password){
                SetAlert(error.password[0])
                setloader(false)
                window.scrollTo(0, 0)
              }


            //   code
          })
     }


    return (
        <div className='w-full  py-16 sm:py-16  md:py-6 lg:py-6'>
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
                    <span className='w-3/5 capitalize text-xs sm:text-sm md:text-base lg:text-base px-3'>Reset Password</span>
                    <span className='w-1/5 border m-0 border-black'></span>
                </div>
                  <span className={Alert =='you have successfully updated your password'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>


                <article className='w-3/4 flex flex-col items-center mt-4'>
                    <span className='w-full text-left capitalize text-lg' >New password</span>
                    <div className="w-full relative">
                   <input type={changepass == false?"password":"text"}    className="w-full border py-2 rounded-md p-3" onChange={(e)=>Setpasssword(e.target.value)} value={pasword} />
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



                <article className='w-3/4 flex flex-col items-center mt-4'>

                {showbtn == false?
                    <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white cursor-pointer opacity-25' disabled onClick={(e)=>handleSubmit(e)}>
                    {loader?'please wait...':'Submit'}
                    </button>
                :
                <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white cursor-pointer' onClick={(e)=>handleSubmit(e)}>
                {loader?'please wait...':'Submit'}
                </button>
                }


                    </article>

            </article>
         </div>
        </section>
       </div>

    )
}

if(document.getElementById("resetpas")){
    ReactDOM.render(<Reset/>, document.getElementById("resetpas"));
    }
