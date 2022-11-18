import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
export default function Forgotten() {
    let url = ` ${window.location.origin}/`;


    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [Alert, SetAlert] = useState('');
    const [loader, setloader] = useState(false)

    const handleSubmit = (e)=>{

       e.preventDefault();
       setloader(true)
        let formData = new FormData();
        formData.append('fullname', fullname)
        formData.append('email', email)
        formData.append('status_type', status_type)
          let urltwo = `${url}fogotten`;
          axios.post(urltwo, formData).then(res=>{
               console.log(res)
             if(res.data.success){
               SetAlert(res.data.success)
               setloader(false)
               window.scrollTo(0, 0)
             }else if(res.data.error){
                SetAlert(res.data.error)
               setloader(false)
               window.scrollTo(0, 0)
             }

         }).catch(erorr=>{
            let error = erorr.response.data.errors
            if(error.email){
                SetAlert(error.email[0])
                setloader(false)
            }else if(error.fullname){
                SetAlert(error.fullname[0])
                setloader(false)
            }else if(error.status_type){
                SetAlert(error.status_type[0])
                setloader(false)
            }
         })
        }


  return (
    <div className='w-full py-16 sm:py-16  md:py-6 lg:py-6'>
    <section className='  m-auto  w-11/12 flex flex-row items-center  shadow-md rounded-md    sm:m-auto sm:w-10/12 sm:flex sm:flex-row sm:items-center sm:shadow-md sm:rounded-md        md:m-auto md:w-10/12 md:flex md:flex-row md:items-center  md:shadow-md md:rounded-md   lg:m-auto lg:w-3/4 lg:flex lg:flex-row lg:items-center  lg:shadow-md lg:rounded-md'>
     <div className='hidden sm:hidden  md:w-1/2 md:block  lg:w-1/2 lg:block' >

     <div className="w-full">

     <div className='h-[40rem] imgthree'>
            </div>
       </div>
     </div>
     <div className='w-full grid grid-cols-1 place-content-center      sm:w-full sm:grid sm:grid-cols-1 sm:place-content-center  md:w-1/2 md:grid md:grid-cols-1 md:place-content-center lg:w-1/2 lg:grid lg:grid-cols-1 lg:place-content-center'>

        <article className='w-full flex flex-col items-center justify-center mt-4'>
            <div className='w-10/12 flex flex-row items-center m-auto'>
                <span className='w-1/5 border m-0 border-black'></span>
                <span className='w-3/5 capitalize text-xs sm:text-sm md:text-base lg:text-base px-3'>Forgotten Password</span>
                <span className='w-1/5 border m-0 border-black'></span>
            </div>
              <span className={Alert =='please check your email'?'text-center text-green-400 capitalize text-lg mt-2 py-1':'text-center text-[#E93E30] capitalize text-lg mt-2 py-1'}>{Alert?Alert:""}</span>
            <article className='w-3/4 flex flex-col items-center'>
                <span className='w-full text-left capitalize text-lg'>full name</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" onChange={(e)=>setfullname(e.target.value)} value={fullname} autoComplete="off" />
            </article>

            <article className='w-3/4 flex flex-col items-center mt-4'>
                <span className='w-full text-left capitalize text-lg'>email</span>
                <input type="text" className="w-full border py-2 rounded-md p-3" onChange={(e)=>setemail(e.target.value)} value={email} autoComplete="off"/>
            </article>








            <article className='w-3/4 flex flex-col items-center mt-4'>
               <button className='text-2xl w-60 rounded-md bg-[#A32926] capitalize text-white cursor-pointer' onClick={(e)=>handleSubmit(e)}>
               {loader?'please wait...':'Submit'}
               </button>
                </article>


        </article>
     </div>
    </section>
   </div>
  )
}


if(document.getElementById("forgot")){
ReactDOM.render(<Forgotten/>, document.getElementById("forgot"));
}







