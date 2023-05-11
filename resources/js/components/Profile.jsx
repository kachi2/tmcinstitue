import React from 'react';
import ReactDOM from 'react-dom'
 function Profile() {
    let url = `${window.location.origin}`;
    const handleLinks = (e)=>{
        localStorage.clear();
        e.preventDefault();
        let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
    }
    console.log(additional)
    const handleClick =(e)=>{
     let name = e.target.dataset.name
     if(name){
       window.location.href =`${url}/contact`;
     }
    }
    const handleback = ()=>{
        window.location.href = `${url}/newdashboard`
    }
  return (
    <div className='w-full flex flex-col bg-white py-4 font-sans h-auto'>
    <artcle className="w-11/12 flex flex-row justify-between px-3 m-auto">
     <span className='w-28 grid place-content-center' onClick={handleback}>
      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" />
     </span>

     <span className='w-32 capitalize flex flex-row items-center text-lg'>
         <h2>myprofile</h2>/
         <h2 data-name="Logout" onClick={(e)=>handleLinks(e)} className="cursor-pointer">logout</h2>
     </span>
    </artcle>

    <section className="w-11/12 flex flex-row  justify-center mt-2 m-auto text-2xl uppercase  text-[#37226C]">
     my profile
    </section>
    <div className="w-11/12 flex flex-row items-center justify-center space-x-2 mt-2 m-auto text-2xl rounded-md bg-[#37226C] px-6    sm:w-3/4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-2 sm:mt-2 sm:m-auto sm:text-2xl sm:rounded-md sm:bg-[#37226C] sm:px-6  sm:py-10      md:w-3/4 md:flex md:flex-row md:items-center md:justify-center md:space-x-2 md:mt-2 md:m-auto md:text-2xl md:rounded-md md:bg-[#37226C] md:px-6  md:py-10    lg:w-3/4 lg:flex lg:flex-row  lg:justify-center lg:space-x-2 lg:mt-2 lg:m-auto lg:text-2xl lg:rounded-md lg:bg-[#37226C] lg:px-6  lg:py-10">
      <span className='sm:w-20 sm:h-20 sm:rounded-full  md:w-16 md:h-16 md:rounded-full  lg:w-32 lg:h-32 lg:rounded-full'>
          <img src={additional?additional.image:userpic} className="w-full h-full object-cover rounded-full"/>
      </span>
      <span className='flex flex-col w-11/12 text-white'>
       <label className='font-bold text-left text-base uppercase  sm:font-bold sm:text-left sm:text-lg sm:uppercase  md:font-bold md:text-left md:text-lg md:uppercase lg:font-bold lg:text-left lg:text-2xl lg:uppercase'>{username}</label>
       <label className='font-bold text-left text-xs capitalize  sm:font-bold sm:text-left sm:text-sm sm:capitalize   md:font-bold md:text-left md:text-sm md:capitalize lg:font-bold lg:text-left lg:text-sm  lg:capitalize'>{email}</label>
       {/* <label className='font-bold text-left text-xs capitalize   sm:font-bold sm:text-left sm:text-sm   md:font-bold md:text-left mdtext-sm  md:capitalize lg:font-bold lg:text-left lg:text-sm  lg:capitalize'>Admission Process Status : Confirmed</label>
       <label className='font-bold text-left text-xs capitalize  sm:font-bold sm:text-left sm:text-sm sm:capitalize  md:font-bold md:text-left md:text-sm  md:capitalize lg:font-bold lg:text-left lg:text-sm lg:capitalize'>Program : Masters in Strategic Management and Leadership</label> */}
      </span>
    </div>
    <section className="w-11/12 sm:w-3/4 md:w-3/4 lg:w-3/4 flex flex-row  justify-center space-x-2 mt-4 m-auto text-2xl border px-6  py-4">
           <ul className='w-full'>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans '>
                 Full Name
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                   {username}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Name to be printed on the Certificate
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                   {additional === null?"no data":additional.nameprint}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Gender
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                 {additional === null?"no data":additional.gender}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Email
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                   {email}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Phone
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                 {additional === null?"no data":additional.phone_number}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-xs text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Date of Birth (DD/MM/YYYY)
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                  { additional === null?"no data":new Date(additional.dob).toLocaleDateString("en-US")}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Nationality
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
             {additional === null?"no data":additional.nationality}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Country of Birth
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
               {additional === null?"no data":additional.country_of_birth}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Current Address
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                {additional === null?"no data":additional.current_address}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Country of Residence
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
             {additional === null?"no data":additional.country_of_residence}
                 </span>
               </li>
           </ul>
    </section>
    <article className='w-full px-5'>
     <span className='w-1/4 float-left mt-2'>
         {additional === null?
             <button className='bg-[#A32926] py-3 w-44 px-2 rounded-md text-sm text-white  sm:bg-[#A32926] sm:py-3 sm:w-44 sm:px-2 sm:rounded-md sm:text-sm sm:text-white  md:bg-[#A32926] md:py-3 md:w-44 md:px-2 md:rounded-md md:text-sm md:text-white lg:bg-[#A32926] lg:py-3 lg:px-2 lg:rounded-md lg:text-sm lg:text-white' data-name="edit" onClick={(e)=>handleClick(e)}>
               Edit profile
             </button>
         :
            <button className='bg-[#A32926] py-3 w-60 px-2 rounded-md text-sm text-white  sm:bg-[#A32926] sm:py-3 sm:w-60 sm:px-2 sm:rounded-md sm:text-sm sm:text-white  md:bg-[#A32926] md:py-3 md:w-60 md:px-2 md:rounded-md md:text-sm md:text-white lg:bg-[#A32926] lg:py-3 lg:px-2 lg:rounded-md lg:text-sm lg:text-white' onClick={handleback}>
             Back Home
            </button>
         }

     </span>
    </article>
    </div>
  )
}

export default Profile;
if(document.getElementById('profile')){
ReactDOM.render(<Profile/>, document.getElementById('profile'))
}
