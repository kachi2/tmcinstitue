import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import ProgressBar from "@ramonak/react-progress-bar";
import ProgressBar from "@ramonak/react-progress-bar";
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';
import { nationalities } from './Part/Nationality';
// Nationality
// import Countries from './Part/Coutries';

function Contactdetails() {
    let url = `${window.location.origin}/`;
    let obj = localStorage.getItem('personal')?JSON.parse(localStorage.getItem('personal')):{}
    const [startDate, setStartDate] = useState(new Date());
   const [message, SetMessage] = useState('')
   const [file, setFile] = useState(obj.image?obj.image:null);
   const fileTypes = ["JPG", "PNG", "GIF"];
   const [Alert, SetAlert] = useState('');



//additional
    let object = {fullname:username?username:'',
     email:email?email:"",
     nameprint:obj.nameprint?obj.nameprint:additional == null?"":additional.nameprint,
      gender:obj.gender?obj.gender:additional == null ?'':additional.gender,
      dateofbirth:additional !== null?new Date(additional.dob):obj.dateofbirth?new Date(obj.dateofbirth):new Date(),
      currentpage:obj.currentpage?obj.currentpage:0,
      nationality:additional !== null?additional.nationality:obj.nationality?obj.nationality:'',
      country_of_birth:obj.country_of_birth?obj.country_of_birth:additional !== null?additional.country_of_birth:'',
      country_of_residence:obj.country_of_residence?obj.country_of_residence:additional !== null?additional.country_of_residence:userinfoma.country_name?userinfoma.country_name:'',
       phone_number:obj.phone_number?obj.phone_number:additional !== null ?additional.phone_number:'', current_address:obj.current_address?obj.current_address:additional !== null?additional.current_address:'', image:obj.image?obj.image:''}
// localStorage.setItem('personal', JSON.stringify(object))
   const [fields, setfields] = useState(object)
    //@ramonak/react-progress-bar
    const handleNext = (e)=>{
      let name =  e.target.dataset.name
      if(name == 'first'){
          if(fields.fullname && fields.email && fields.nameprint && fields.gender !== 'Select option' && fields.gender !== '' && fields.dateofbirth){
             fields['currentpage'] = 1;
            setfields({...fields})
            localStorage.setItem('personal', JSON.stringify(fields))
          }else{
            SetMessage('please fill all fields')
          }
      }else if(name == 'second'){
   if(fields.nationality && fields.country_of_birth !== 'Select option' && fields.country_of_birth  !== '' && fields.country_of_residence !== 'Select option' && fields.country_of_residence !== '' && fields.current_address && fields.phone_number){
    fields['currentpage'] = 2;
    setfields({...fields})
    localStorage.setItem('personal', JSON.stringify(fields))
   }
  }else if(name == 'secondback'){
 fields['currentpage'] = 0;
 setfields({...fields})
 localStorage.setItem('personal', JSON.stringify(fields))
}
    }


    const handleChange = data => {
          const reader = new FileReader();
         reader.readAsDataURL(data);
        console.log(reader)
         if(data){
             setTimeout(()=>{
                  setFile(data);
                    fields['image'] = data;
                    setfields({...fields})
                    localStorage.setItem('personal', JSON.stringify(fields))
             },200)
         }



      };
     const [wait, setWait] = useState(false)
     const handleSubmit = ()=>{
         setWait(true)
        if(file && fields.email && fields.nationality != 'Select option'){

           let formData = new FormData();
            formData.append('country_of_birth', fields.country_of_birth)
            formData.append('country_of_residence', fields.country_of_residence)
            formData.append("current_address", fields.current_address)
            formData.append("fullname", fields.fullname)
            formData.append('gender', fields.gender)
            formData.append("image", file)
            formData.append('nameprint', fields.nameprint)
            formData.append("nationality", fields.nationality)
            formData.append('phone_number', fields.phone_number)
            formData.append('dateofbirth', fields.dateofbirth)
            let urltwo = `${url}additional_info`;
            axios.post(urltwo, formData).then(res=>{
                 //console.log(res)
               if(res.data.success){
                 SetAlert(res.data.success)
                 setWait(false)
                 let object = {fullname:'', email:"", nameprint:'', gender:'', dateofbirth:new Date(), currentpage:0, nationality:'', country_of_birth:'', country_of_residence:'', phone_number:'', current_address:'', image:''}
                 localStorage.setItem('personal', JSON.stringify(object))
                 setfields(object)
                 window.scrollTo(0, 0)
                 setTimeout(()=>{
                  window.location.href = `${url}profile`;
                 },1100)
               }

           }).catch(err=>{
            let error = err.response.data.errors
             if(error.country_of_birth){
                SetAlert(error.country_of_birth[0])
                setWait(false)
             }else if(error.country_of_residence){
                SetAlert(error.country_of_residence[0])
                setWait(false)
             }else if(error.current_address){
                SetAlert(error.current_address[0])
                setWait(false)
             }else if(error.fullname){
                SetAlert(error.fullname[0])
                setWait(false)
             }else if(error.gender){
                SetAlert(error.gender[0])
                setWait(false)
             }else if(error.image){
                SetAlert(error.image[0])
                setWait(false)
             }else if(error.nameprint){
                SetAlert(error.nameprint[0])
                setWait(false)
             }else if(error.nationality){
                SetAlert(error.nationality[0])
                setWait(false)
             }else if(error.phone_number){
                SetAlert(error.phone_number[0])
                setWait(false)
             }

           })
        }else{
            SetAlert('please complete all the fields')
        }
     }

     const handleBack = ()=>{
        fields['currentpage'] = 1;
        setfields({...fields})
        localStorage.setItem('personal', JSON.stringify(fields))
     }

     var date = new Date();
    let sixteenyear = date.getFullYear() - 16;
    let sixteenday = date.getDate()
    let sixteenmonth =  date.getMonth()
  let  six =  new Date(sixteenyear, sixteenmonth, sixteenday )
  return (
    <div className='w-full flex flex-col items-center justify-center'>

        <section className={fields.currentpage == 0?' w-11/12 m-12 rounded-md  border flex flex-col items-center py-2 sm:w-3/4 sm:m-12 sm:rounded-md  sm:border sm:flex sm:flex-col sm:items-center  md:w-3/4 md:m-12 md:rounded-md  md:border md:flex md:flex-col md:items-center  md:py-3 md:shadow-sm  lg:w-2/3 lg:m-12 lg:rounded-md  lg:border lg:flex lg:flex-col lg:items-center  lg:py-3 lg:shadow-sm':'hidden'}>

        <article className='w-full flex flex-row items-center px-3  justify-center'>
             <span className={fields.currentpage == 0? 'w-12 h-12 rounded-full bg-[#37226C] text-white grid place-content-center':'w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'} >
                 1
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={10} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 2
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={0} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 3
             </span>
             {/* <article className='w-1/5 px-2'>
             <ProgressBar completed={0} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 4
             </span> */}
             </article>

          <div className='w-full py-2 text-3xl text-left text-[#37226C] px-3'>
          Contact details
          </div>
          <div className='w-full capitalize text-red-400 text-center text-2xl'>{message?message:''}</div>
          <article className='w-11/12 m-auto mt-1'>
         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
             Full Name
            </span>
            <input type="text" className="p-3 rounded-md w-full" value={fields.fullname}  onChange={(e)=>setfields({...fields, fullname:e.target.value})} disabled/>
         </section>

         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
             Email
            </span>
            <input type="text" className="p-3 rounded-md w-full" value={fields.email} onChange={(e)=>setfields({...fields,email:e.target.value})} disabled/>
         </section>

         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Name to be printed on certificate
            </span>
            <input type="text" className="p-3 rounded-md w-full" value={fields.nameprint} onChange={(e)=>setfields({...fields,nameprint:e.target.value})} autoComplete="off"/>
         </section>

         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
              Gender
            </span>
            <select  className="p-3 rounded-md w-full" value={fields.gender} onChange={(e)=>setfields({...fields, gender:e.target.value})} autoComplete="off">
                <option>Select option</option>
                 <option>Male</option>
                 <option>Female</option>
                 <option>other</option>
            </select>
         </section>

         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
              Date of Birth
            </span>
            {/* className="w-full p-3 rounded-md" */}
            <DatePicker selected={fields.dateofbirth} maxDate={six} onChange={(date) =>setfields({...fields, dateofbirth:date})}   yearDropdownItemNumber={100}  scrollableYearDropdown={true} showYearDropdown showMonthDropdown  placeholderText="DD/MM/YYYY"  />
         </section>

         <section className="w-full  mt-10">
          <article className='w-1/3 float-left flex  items-center justify-center'>
            <button className='px-2 py-2 bg-[#A32926] w-44 capitalize text-white  rounded-md   sm:px-4 sm:py-3 sm:bg-[#A32926] sm:w-32 sm:capitalize sm:text-white  sm:rounded-md  md:px-4 md:py-3 md:bg-[#A32926] md:w-32 md:capitalize md:text-white  md:rounded-md lg:px-4 lg:py-3 lg:bg-[#A32926] lg:capitalize lg:text-white  lg:rounded-md' data-name="first" onClick={(e)=>handleNext(e)}>
                Next page
            </button>
          </article>
         </section>
        </article>
        </section>


        <section className={fields.currentpage == 1?'w-11/12 m-12 rounded-md  border flex flex-col items-center py-2 sm:w-3/4 sm:m-12 sm:rounded-md  sm:border sm:flex sm:flex-col sm:items-center  md:w-3/4 md:m-12 md:rounded-md  md:border md:flex md:flex-col md:items-center  md:py-3 md:shadow-sm  lg:w-2/3 lg:m-12 lg:rounded-md  lg:border lg:flex lg:flex-col lg:items-center  lg:py-3 lg:shadow-sm':'hidden'}>
        <article className='w-full flex flex-row items-center px-3  justify-center'>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center' >
                 1
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={100} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className={fields.currentpage == 1? 'w-12 h-12 rounded-full bg-[#37226C] text-white grid place-content-center':'w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'}>
                 2
             </span>
             <article className=' w-1/4 px-2'>
             <ProgressBar completed={0} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 3
             </span>

             </article>
          <div className='w-full py-2 text-4xl text-left text-[#37226C] px-3'>
          Residential details
          </div>
          <article className={Alert == 'success'?'w-full text-center flex flex-row justify-center text-green-500 items-center mt-2 text-lg':'w-full text-center flex flex-row justify-center text-red-500 items-center mt-2 text-lg'}>{Alert?Alert:''}</article>

          <article className='w-11/12 m-auto mt-1'>
         <section className='w-full flex flex-col items-center mt-2 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Nationality
            </span>
            {/* <input type="text" className="p-3 rounded-md w-full" value={fields.nationality} onChange={(e)=>setfields({...fields,nationality:e.target.value})}  /> */}
            <select  className="p-3 rounded-md w-full" value={fields.nationality} onChange={(e)=>setfields({...fields,nationality:e.target.value})} autoComplete="off" >
                {nationalities.map((item)=>{
                    return <option key={item.NationalityID}>{item.Nationality}</option>
                })}


            </select>
         </section>

         <section className='w-full flex flex-col items-center mt-3 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Country of birth
            </span>

                 <select  className="p-3 rounded-md w-full"  value={fields.country_of_birth} onChange={(e)=>setfields({...fields,country_of_birth:e.target.value})} autoComplete="off">
                 {countries.map((item, index)=><option key={index} >{item}</option>  )}
              </select>


         </section>

         <section className='w-full flex flex-col items-center mt-3 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Country of Residence
            </span>

                <select  className="p-3 rounded-md w-full"  value={fields.country_of_residence} onChange={(e)=>setfields({...fields,country_of_residence:e.target.value})} autoComplete="off">
                 {countries.map((item, index)=><option  key={index} >{item}</option>  )}
               </select>


         </section>

         <section className='w-full flex flex-col items-center mt-3 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Current address
            </span>


            <input type="text" className="p-3 rounded-md w-full" value={fields.current_address} onChange={(e)=>setfields({...fields,current_address:e.target.value})}/>


         </section>

         <section className='w-full flex flex-col items-center mt-3 px-2'>
            <span className='w-full text-lg capitalize font-sans'>
            Phone number
            </span>
            <div className="w-full flex flex-row items-center  space-x-0">
            <span className="w-24 grid  place-items-center text-lg text-[#A32926]  ">
                    {userinfoma.calling_code}
                </span>
            <input type="text" className="p-3 rounded-md w-11/12" value={fields.phone_number} onChange={(e)=>setfields({...fields,phone_number:e.target.value})}/>
                </div>
         </section>

         <section className="w-full  mt-10 flex flex-row items-center  justify-between">
          <article className='w-1/3 float-left flex  items-center justify-center'>
            <button className='px-2 py-2 w-32  change capitalize text-[#A32926]  rounded-md   sm:px-2 sm:py-2 sm:w-32  sm:change sm:capitalize sm:text-[#A32926]  sm:rounded-md  md:px-4 md:py-3 md:change md:capitalize md:text-[#A32926]  md:rounded-md lg:px-4 lg:py-3 lg:change lg:capitalize lg:text-[#A32926]  lg:rounded-md' data-name="secondback" onClick={(e)=>handleNext(e)}>
                Back page
            </button>
          </article>

          <article className='w-1/3 float-left flex  items-center justify-center'>
            <button className='px-2 py-2 bg-[#A32926] w-44 capitalize text-white  rounded-md   sm:px-2 sm:py-2 sm:bg-[#A32926] sm:w-32 sm:capitalize sm:text-white  sm:rounded-md  md:px-4 md:py-3 md:bg-[#A32926] md:w-32 md:capitalize md:text-white  md:rounded-md lg:px-4 lg:py-3 lg:bg-[#A32926] lg:capitalize lg:text-white  lg:rounded-md' data-name="second" onClick={(e)=>handleNext(e)}>
                Next page
            </button>
          </article>
         </section>
        </article>
        </section>



        <div className={fields.currentpage == 2?'w-full flex flex-col items-center justify-center':'hidden'}>
        <div className='w-2/3 m-12   flex flex-row items-center justify-center'>
          <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center' >
                 1
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={0} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 2
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={100} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#37226C] text-white grid place-content-center'>
                 3
             </span>
        </div>
        {/* w-10/12 m-12 rounded-md  border flex flex-col items-center sm:w-3/4 sm:m-12 sm:rounded-md  sm:border sm:flex sm:flex-col sm:items-center  md:w-3/4 md:m-12 md:rounded-md  md:border md:flex md:flex-col md:items-center  md:py-3 md:shadow-sm  lg:w-2/3 lg:m-12 lg:rounded-md  lg:border lg:flex lg:flex-col lg:items-center  lg:py-3 lg:shadow-sm */}
         <div className=' w-10/12 text-left m-auto text-5xl  text-[#37226C] sm:w-3/4 sm:text-left sm:m-auto sm:text-5xl  sm:text-[#37226C]  md:w-2/3 md:text-left md:m-auto md:text-5xl  md:text-[#37226C] lg:w-2/3 lg:text-left lg:m-auto lg:text-5xl lg:text-[#37226C]'>
         File upload
         </div>
         <article className={Alert == 'success'?'w-full text-center flex flex-row justify-center text-green-500 items-center mt-2 text-lg':'w-full text-center flex flex-row justify-center text-red-500 items-center mt-2 text-lg'}>{Alert?Alert:''}</article>
        <section className='w-11/12 sm:w-3/4 md:2/3 lg:w-2/3 m-12 rounded-md  border flex flex-col items-center  py-3 shadow-sm'>
          <div className='w-full py-2 text-4xl text-center text-[#37226C] px-3 flex flex-col items-center'>
           <span className='text-2xl text-[#37226C] capitalize font-semibold mt-2'>Please verify your identity</span>
           <span className='text-sm text-[#37226C] capitalize font-semibold mt-4'>Select your Profile picture </span>
          </div>

          <article className='w-11/12 m-auto mt-1 grid place-content-center'>

                 <section className='w-60 sm:w-72 md:w-80 lg:w-96 flex flex-row item-center justify-center relative'>
                                    <FileUploader
                                    style={{ height:"20%", position:'absolute'}}
                                      multiple={false}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                        />
                 </section>

        </article>
           <div className="w-full ">
           <span className='w-1/3 float-left px-3'>
                    <button className='px-2 py-2 w-20  change capitalize text-[#A32926]  rounded-md   sm:px-2 sm:py-2 sm:w-20 sm:change sm:capitalize sm:text-[#A32926]  sm:rounded-md  md:px-4 md:py-3 md:change md:capitalize md:text-[#A32926]  md:rounded-md lg:px-4 lg:py-3 lg:change lg:capitalize lg:text-[#A32926]  lg:rounded-md' onClick={handleBack}>
                        back
                    </button>
                </span>

                <span className='w-1/3 float-right px-3'>
                    <button className='px-2 py-2 bg-[#A32926] w-20 capitalize text-white  rounded-md   sm:px-2 sm:py-2 sm:bg-[#A32926] sm:w-20 sm:capitalize sm:text-white  sm:rounded-md  md:px-4 md:py-3 md:bg-[#A32926] md:w-32 md:capitalize md:text-white  md:rounded-md lg:px-4 lg:py-3 lg:bg-[#A32926] lg:capitalize lg:text-white  lg:rounded-md' onClick={handleSubmit}>
                    {wait?"Please wait...":"submit"}
                    </button>
                </span>
           </div>
        </section>

    </div>




    </div>
  )
}

export default Contactdetails;
if(document.getElementById('cont')){
ReactDOM.render(<Contactdetails/>, document.getElementById('cont'))
}
