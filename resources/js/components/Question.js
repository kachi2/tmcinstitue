import React, {useState} from 'react'
import ReactDOM from 'react-dom';
function Question() {
    let url = window.location.origin
  const [company, Setcompany] = useState(null)
  const [btn, Setbtn] = useState(false)
   const [message, Setmessage] = useState('')

    const handleSubmit = ()=>{
        if(company == true || company == false){
            let formData = new FormData();
            formData.append('has_organisation', company)
              let urltwo = `${url}/oathregister`;
              axios.post(urltwo, formData).then(res=>{
                   console.log(res)
                 if(res.data.success || res.data.company){
                    console.log(res.data.success, res.data.company)
                    Setmessage(res.data.success)
                   window.scrollTo(0, 0)
                   setTimeout(()=>{
                    window.location.href = `${url}/newdashboard`;
                   },1100)
                 }else if(res.data.error){
                    console.log(res.data.error)
                    Setmessage(res.data.error)
                 }

             })
           }else{
            Setmessage('please select an option')
           }
    }

  return (
    <div className='w-full flex flex-col'>
    <div className='w-full  px-5 '>
        <section className='w-32 float-left'>
            <img src={picture} className="w-full h-full"/>
        </section>
    </div>

       <div className='w-2/3 flex flex-col text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold m-auto capitalize mt-10'>
       Welcome! your profile is almost complete
       </div>
       <div className={message == 'please select an option'?'w-2/3 flex flex-col text-center text-lg  font-poppins m-auto capitalize text-red-400':'w-2/3 flex flex-col text-center text-lg  font-poppins m-auto capitalize text-green-400'} >
           {message?message:""}
       </div>
       <section className='w-11/12 sm:w-10/12 md:w-2/5 lg:w-2/5 flex flex-col items-center  rounded-md shadow-md py-5 m-auto translate-y-20'>
        <article className='capitalize  text-left font-medium text-base sm:capitalize  sm:text-center sm:font-medium sm:text-lg  md:capitalize  md:text-left md:font-medium md:text-2xl  lg:capitalize  lg:text-left lg:font-medium lg:text-2xl'>do you have an organisation</article>
        <section className='w-full flex flex-row items-center justify-center space-x-6 mt-3'>
            <span className='flex flex-row items-center space-x-1'>
                <h2 className='text-lg' >Yes</h2>
                <input type="radio"  name='company' onChange={()=>Setcompany(true)}/>
            </span>

            <span className='flex flex-row items-center space-x-1'>
                <h2 className='text-lg'>No</h2>
                <input type="radio" name="company" onChange={()=>Setcompany(false)}  />
            </span>
        </section>

        <section className='w-full mt-2 flex flex-row items-center justify-center'>
              {btn?
<button className='text-lg capitalize text-white bg-[#A32926] py-2 rounded-md px-2'>registration complete</button>:
     <button className='text-lg capitalize text-white bg-[#A32926] py-2 rounded-md px-4' onClick={handleSubmit}>submit</button> }
        </section>
       </section>

    </div>
  )
}



export default Question;
if(document.getElementById('quest')){
    ReactDOM.render(<Question/>, document.getElementById('quest'))
}
