import React, {useState} from 'react';
import ReactDom from 'react-dom';

export default function AdminLogin() {
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const [message, Setmessage] = useState('');
    const [loader, setloader] = useState(false);
    const [Alert, SetAlert] = useState('');
    const [captcha, Setcaptcha] = useState('')
    let url = `${window.location.origin}/`;
    const handleClick=()=>{
        setloader(true)
        let formData = new FormData();
        formData.append('email', email)
        formData.append('captcha', captcha)
        formData.append("password", password)
        let urltwo = `${url}loginadmin`
        axios.post(urltwo, formData).then(res=>{
            console.log(res)
          if(res.data.success){
            SetAlert(res.data.success)
            setloader(false)
            setTimeout(()=>{
             window.location.href = `${url}Admin`;
            },1100)
          }else if(res.data.error){
            SetAlert(res.data.error)
            setloader(false)
          }

      }).catch(erorr=>{
        console.log(error)
         let error = erorr.response.data.errors
         if(error.email){
            setloader(false)
            SetAlert(error.email[0])
         }else if(error.password){
            setloader(false)
          SetAlert(error.password[0])
         }else if(error.captcha){
            setloader(false)
            SetAlert(error.captcha[0])
         }
      })
    }
  return (
    <div id="wrapper" className="flex flex-col justify-between h-screen">
              <div>

        <div className="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
            <form className="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
            <h1 className= {Alert == 'you have login successfully'?"lg:text-sm lg:text-green-500 lg:text-center text-green-500 text-center text-sm font-semibold mb-6":"lg:text-sm lg:text-red-500 lg:text-center text-red-500 text-center text-sm font-semibold mb-6"} > {Alert?Alert:''} </h1>
                <h1 className="lg:text-2xl text-xl font-semibold mb-6"> Login </h1>
                <div>
                    <label className="mb-0" for="email"> Email Address </label>
                    <input type="email" id="email" value={email} onChange={(e)=>Setemail(e.target.value)} placeholder="Info@example.com"  className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                </div>


                <article className=''>
                <article className='w-full'>
                <span className='w-1/3 text-left capitalize text-lg float-left' >
                <img src={captchaimg} />
                 </span>
                </article>
                 <input type="text" className="w-full border py-2 rounded-md p-3 mt-1" onChange={(e)=>Setcaptcha(e.target.value)} value={captcha} />
             </article>


                <div>
                    <label className="mb-0" for="password"> Password </label>
                    <input type="password" id="password" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="******" className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                </div>

                <div>
                    <button type="button" className="bg-blue-600 font-semibold p-2.5 mt-5 rounded-md text-center text-white w-full" onClick={handleClick}>
                     {loader?'Please Wait..':'Login'} </button>
                </div>
                         </form>
        </div>

      </div>

    </div>
  )
}

if(document.getElementById("adminlog")){
ReactDom.render(<AdminLogin/>, document.getElementById("adminlog"));
}
