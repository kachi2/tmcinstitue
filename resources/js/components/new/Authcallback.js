import React from 'react'
import ReactDOM from 'react-dom';
export default function Authcallback() {
    let url = window.location.origin
    // if(success){
    //  window.location.href = `${url}/${success}`
    // }else if(user_login && verification_code){
    //     window.location.href = `${url}/question/${user_login}/${verification_code}`
    // }else if(sign){
    //     window.location.href = `${url}/${sign}`
    // }else if(message_error){
    //     window.location.href = `${url}/signup`
    // }
    console.log(nextpage)
    const handleClick =()=>{
      window.location.href = `${url}/newdashboard`
    }
    return (
        <div className={nextpage?'w-full h-screen bg-white grid place-content-center':'hidden'}>
             <h2 className='text-base sm:text-base md:text-lg lg:text-2xl text-[#E93E30] capitalize'>please click here to continue</h2>

             <section className='flex justify-center items-center py-1 mt-2 w-full '>
                <a className='px-2 rounded-md text-center bg-blue-500 text-white capitalize text-base cursor-pointer' onClick={()=>handleClick()}>Click Here</a>
             </section>
        </div>
    )
}

if(document.getElementById('callback')){
    ReactDOM.render(<Authcallback/>, document.getElementById('callback'));
    }
