import React,{useState} from 'react';
import ReactDOM  from 'react-dom';
export default function Comfirmresult() {
let url = window.location.origin;
let bool = new Date(data.date)
var dd = String(bool.getDate()).padStart(2, '0');
var mm = String(bool.getMonth() + 1).padStart(2, '0');
var yyyy = bool.getFullYear();
let bday = dd+ '/' + mm + '/' + yyyy;

const [status, Setstatus] = useState('')
const [color, Setcolor] = useState(false)

    const handleClick = (e)=>{
        Setstatus('please wait...')
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
          "code":data.unique_code,
          '_token':token,
          '_method':'PATCH'
        });

        var requestOptions = {
          method:'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

          let urlone = `${url}/approvestatus`;
            fetch(urlone, requestOptions)
            .then(response => response.json())
            .then(result =>{
              if(result.success){
                Setstatus(result.success)
              }
            })
            .catch(error => console.log('error', error));
    }

  return (
    <div className='w-full flex flex-col bg-white py-4 font-sans h-auto'>
    <artcle className="w-11/12 flex flex-row justify-between px-3 m-auto">
     <span className='w-28 grid place-content-center'>
      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" />
     </span>

     <span className='w-32 capitalize flex flex-row items-center text-lg'>

     </span>
    </artcle>

    <div className="w-3/4 flex flex-row items-center justify-center space-x-2 mt-2 m-auto text-2xl rounded-md bg-[#37226C] px-6    sm:w-3/4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-2 sm:mt-2 sm:m-auto sm:text-2xl sm:rounded-md sm:bg-[#37226C] sm:px-6  sm:py-10      md:w-3/4 md:flex md:flex-row md:items-center md:justify-center md:space-x-2 md:mt-2 md:m-auto md:text-2xl md:rounded-md md:bg-[#37226C] md:px-6  md:py-10    lg:w-3/4 lg:flex lg:flex-row  lg:justify-center lg:space-x-2 lg:mt-2 lg:m-auto lg:text-2xl lg:rounded-md lg:bg-[#37226C] lg:px-6  lg:py-10">
      <span className='sm:w-20 sm:h-20 sm:rounded-full  md:w-16 md:h-16 md:rounded-full  lg:w-32 lg:h-32 lg:rounded-full'>
          <img src={data.picture} className="w-full h-full object-cover rounded-full"/>
      </span>
      <span className='flex flex-col w-11/12 text-white'>
       <label className='font-bold text-left text-base uppercase  sm:font-bold sm:text-left sm:text-lg sm:uppercase  md:font-bold md:text-left md:text-lg md:uppercase lg:font-bold lg:text-left lg:text-2xl lg:uppercase'>{data.fullname}</label>
       <label className='font-bold text-left text-xs capitalize  sm:font-bold sm:text-left sm:text-sm sm:capitalize   md:font-bold md:text-left md:text-sm md:capitalize lg:font-bold lg:text-left lg:text-sm  lg:capitalize'>{data.coursename}</label>
      </span>
    </div>
    <section className="w-3/4 flex flex-row  justify-center space-x-2 mt-4 m-auto text-2xl border px-6  py-4">
           <ul className='w-full'>

               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                  Course Code
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                  {data.unique_code}
                 </span>
               </li>
               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Percentage Score
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                   {data.totalpercentage}
                 </span>
               </li>

               <li className='w-full flex flex-row items-center py-2'>
                 <span className='w-1/3 text-left font-semibold text-sm text-black font-sans    sm:w-1/3 sm:text-left sm:font-semibold sm:text-base sm:text-black sm:font-sans   md:w-1/3 md:text-left md:font-semibold md:text-base md:text-black md:font-sans lg:w-1/3 lg:text-left lg:font-semibold lg:text-md lg:text-black lg:font-sans'>
                 Request Date(DD/MM/YYYY)
                 </span>
                 <span className='w-2/3  text-left  font-thin text-sm text-black font-sans    sm:w-2/3  sm:text-left  sm:font-thin sm:text-base sm:text-black sm:font-sans      md:w-2/3  md:text-left  md:font-thin md:text-base md:text-black md:font-sans  lg:w-2/3  lg:text-left  lg:font-thin lg:text-md lg:text-black lg:font-sans'>
                {bday}
                 </span>
               </li>
           </ul>
    </section>
    <article className='w-full px-5 flex justify-center'>
     <span className='w-1/4 m-auto mt-2'>
             <button className={status == 'Approved'?'bg-green-500 py-3 w-44 px-2 rounded-md text-sm text-white  sm:bg-green-500 sm:py-3 sm:w-44 sm:px-2 sm:rounded-md sm:text-sm sm:text-white  md:bg-green-500 md:py-3 md:w-44 md:px-2 md:rounded-md md:text-sm md:text-white lg:bg-green-500 lg:py-3 lg:px-2 lg:rounded-md lg:text-sm lg:text-white':'bg-[#A32926] py-3 w-44 px-2 rounded-md text-sm text-white  sm:bg-[#A32926] sm:py-3 sm:w-44 sm:px-2 sm:rounded-md sm:text-sm sm:text-white  md:bg-[#A32926] md:py-3 md:w-44 md:px-2 md:rounded-md md:text-sm md:text-white lg:bg-[#A32926] lg:py-3 lg:px-2 lg:rounded-md lg:text-sm lg:text-white'} data-name="edit" onClick={(e)=>handleClick(e)}>
               {status == ''?'Approve':status}
             </button>
     </span>
    </article>
    </div>
  )
}

if(document.getElementById("result")){
ReactDOM.render(<Comfirmresult/>, document.getElementById("result"));
}
