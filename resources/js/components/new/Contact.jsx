import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import {BiPhoneCall} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';
import {ImLocation2} from 'react-icons/im';
import {BsFacebook} from 'react-icons/bs';
import axios from 'axios';
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
export default function Contactus() {
const [firstname, Setfirstname] = useState("");
const [lastname, Setlastname] = useState("");
const [email, Setemail] = useState("");
const [phone, Setphone] = useState("");
const [message, Setmessage] = useState("");
const [alert, SetAlert] = useState("");
const [load, setloader] = useState(false);
let url = ` ${window.location.origin}/`;



    const handleSubmit = (e)=>{

        e.preventDefault();
        setloader(true)
         let formData = new FormData();
         formData.append('firstname', firstname)
         formData.append('lastname', lastname)
         formData.append('email', email)
         formData.append('phone', phone)
         formData.append('message', message)
           let urltwo = `${url}contactus`;
           axios.post(urltwo, formData).then(res=>{
                console.log(res)
              if(res.data.success){
                SetAlert(res.data.success)
                setloader(false)
                window.scrollTo(0, 0)
              }

          }).catch(erorr=>{
            console.log(erorr)
               let anserror  = erorr.response.data.errors;
            //  let error = erorr.response.data.errors
             if(anserror.email){
                 SetAlert(anserror.email[0])
                 setloader(false)
                 window.scrollTo(0, 0)

             }else if(anserror.firstname){
                SetAlert(anserror.firstname[0])
                setloader(false)
                window.scrollTo(0, 0)

             }else if(anserror.lastname){
                SetAlert(anserror.lastname[0])
                setloader(false)
                window.scrollTo(0, 0)

             }else if(anserror.phone){
                SetAlert(anserror.phone[0])
                setloader(false)
                window.scrollTo(0, 0)

             }else if(anserror.message){
                SetAlert(anserror.message[0])
                setloader(false)
                window.scrollTo(0, 0)

             }
          })
         }


    return (
        <div className='w-full py-8'>

            <section className="w-11/12 flex flex-row  shadow-md m-auto bg-white rounded-md  relative py-2 ">
              <article className="w-1/3 hidden sm:hidden md:grid lg:grid  ">
                 <div className='text-lg text-red-500  font-bold px-6 text-left w-full mt-6'>Contact Informaton</div>

                 <div className='text-lg text-red-500 mt-4 font-thin  px-6 text-left w-full'> Fill up the form and our team will get back to you within 24 hours</div>


                 <article className='mt-20 px-6 grid grid-cols-1 gap-6'>
                    <div className="space-x-2 flex flex-row items-center">
                     <h3><BiPhoneCall className="text-red-500"/></h3>
                     <h3 className='text-red-500'>08165648269</h3>
                    </div>

                    <div className="space-x-2 flex flex-row items-center">
                     <h3><MdEmail className="text-red-500"/></h3>
                     <h3 className='text-red-500'>stephenjason41@gmail.com</h3>
                    </div>


                    <div className="space-x-2 flex flex-row items-center">
                     <h3><ImLocation2 className="text-red-500"/></h3>
                     <h3 className='text-red-500'>3, jinadu street owoikorodu lagos</h3>
                    </div>
                 </article>


                 <div className='mt- mt-60 flex flex-row items-center justify-center space-x-4'>
                           <BsFacebook className='rounded-full text-2xl text-red-500'/>
                           <AiFillTwitterCircle className='rounded-full text-2xl text-red-500'/>
                           <AiFillInstagram className='rounded-full text-2xl text-red-500'/>
                           <AiFillLinkedin className='rounded-full text-2xl text-red-500'/>
                 </div>
              </article>
              <section className="w-full sm:w-full md:w-2/3 lg:w-2/3 flex flex-col items-center px-3">
                <div className='w-60 sm:w-60 md:hidden lg:hidden'>
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" className="logo_mobile" alt=""/>

                </div>
                <div className={alert === 'we have your message'?  "text-green-500 font-bold text-center py-2" :  "text-red-500 font-bold text-center py-2"}>
                  {alert?alert:""}
                </div>
                <div className="w-full space-x-2 flex flex-col items-center sm:flex sm:flex-col sm:items-center   md:flex md:flex-row md:items-center  lg:flex lg:flex-row lg:items-center">
                    <section className="w-full sm:w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
                      <div className="w-full text-left font-semibold">
                        First Name
                      </div>
                      <input type="text" value={firstname}  onChange={(e)=>Setfirstname(e.target.value)} className="w-full rounded-md border border-red-500 "
                      style={{
                       border:"1px solid black"
                       }}
                      />
                    </section>

                    <section className="w-full sm:w-full md:w-1/2 lg:w-1/2  flex flex-col items-center">
                      <div className="w-full text-left font-semibold">
                        Last Name
                      </div>
                      <input type="text" value={lastname} onChange={(e)=>Setlastname(e.target.value)} className="w-full rounded-md border "/>
                    </section>

                </div>


                <div className=" w-full space-x-2 flex flex-col items-center sm:flex sm:flex-col sm:items-center   md:flex md:flex-row md:items-center  lg:flex lg:flex-row lg:items-center mt-10">
                    <section className="w-full sm:w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
                      <div className="w-full text-left font-semibold">
                        Email
                      </div>
                      <input type="email" value={email}  onChange={(e)=>Setemail(e.target.value)} className="w-full rounded-md border "/>
                    </section>

                    <section className="w-full sm:w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
                      <div className="w-full text-left font-semibold">
                        Phone
                      </div>
                      <input type="tel" value={phone} onChange={(e)=>Setphone(e.target.value)} className="w-full rounded-md border "/>
                    </section>

                </div>


                <div className="w-full space-x-2 flex flex-row items-center mt-10">
                    <section className="w-full flex flex-col items-center">
                      <div className="w-full text-left font-semibold">
                        Message
                      </div>
                      <textarea value={message} onChange={(e)=>Setmessage(e.target.value)} className='w-50 rounded-md border' placeholder='message...'></textarea>
                    </section>


                </div>

                <div className="w-full space-x-2 flex flex-row items-center justify-center mt-10">
                    <button className="w-1/3 bg-red-500 text-white rounded-md py-2" onClick={handleSubmit}>
                    {load?'Please Wait...':'submit'}
                    </button>
                </div>
                <div className='flex flex-row items-center  sm:flex sm:flex-row sm:items-center md:hidden lg:hidden  justify-center space-x-4 mt-6'>
                           <BsFacebook className='rounded-full text-2xl text-red-500'/>
                           <AiFillTwitterCircle className='rounded-full text-2xl text-red-500'/>
                           <AiFillInstagram className='rounded-full text-2xl text-red-500'/>
                           <AiFillLinkedin className='rounded-full text-2xl text-red-500'/>
                 </div>
              </section>
            </section>

        </div>
    )
}

if(document.getElementById("contacttmc")){
    ReactDOM.render(<Contactus/>, document.getElementById("contacttmc"));
    }
