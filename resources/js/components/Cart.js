import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {MdOutlineCancel} from 'react-icons/md';
import {AiOutlinePlus, AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import {FiPlus} from 'react-icons/fi';
import Naira from 'react-naira';
import { useSpeechSynthesis } from 'react-speech-kit';
 function Cart() {
    let url = window.location.origin;
     const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
     const [Total, Settotal] = useState(0)
     const [Message, SetMessage] = useState('')
     const [Loader, SetLoader] = useState(false);
     const [load, Setload] = useState(false)
     const [groupswitch, Setgroupswitch] = useState(false);
     const [secondswitch, SetSecSwitch] = useState(false);
     const [useremail, Setuseremail] = useState('')
     const [fullname, Setuserfullname] = useState('')
     const [list, Setlist] = useState(localStorage.getItem('purchase')?JSON.parse(localStorage.getItem('purchase')):[]);
     const [edit, setEdit] = useState(false)
     const [editid, Seteditid] = useState('')
     const { speak } = useSpeechSynthesis();
     const [datacollect, setdatacollect] = useState([]);
   let subtotal =  Cart.map((item)=>parseInt(item.price?item.price:0))
   function addedall (){
    const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

    return '$'+sum?sum:0;
   }
   const onedollar = 615


   function gettotal(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    let ans =   parseInt(sum?sum:0)
    return sum;

   }

   function totalgroup(){
    const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    return  sum * list.length
    // let ans =   parseInt(sum?sum:0)
    //  return sum;
   }



   const handleClick = (id)=>{
    let add = Cart.filter((item)=>item.id != id)
    SetCart(add)
    localStorage.setItem('Cart', JSON.stringify(add))
    let stringdata =  JSON.stringify(add)
  let formData = new FormData();
  formData.append("cartitems", stringdata)
    let urltwo = `${url}/addcart`;
    axios.post(urltwo, formData).then(res=>{

      })
   }
  //  let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
  //  console.log(cart)

   const handleCheck =()=>{
    SetLoader(true)
    let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
      //gettotal() * money.result.toFixed(2) *100.00
    let paystack = PaystackPop.setup({
        key: 'pk_test_717211460dbb54580490c8c657c4b42e4e35da03',
        email:email,
        amount: gettotal()  *100.00,
        callback: function(response){
            let ref = response.reference
            if(ref){
                let hypelink = `${url}/paystack_verify/${ref}`
                axios.get(hypelink).then(res=>{
                   if(res.data.status){
                    for (let index = 0; index < cart.length; index++) {
                        cart[index]['status'] =  res.data.message
                        cart[index]['code'] =  ref
                     }

                    let data = JSON.stringify(cart)
                    let formData = new FormData();
                    formData.append("data", data)
                    let sendlink =  `${url}/muitplepayment`
                    axios.post(sendlink, formData).then(res=>{
                        if(res.data.success){
                          formData.append("commend", 'yes')
                          let sendlink =  `${url}/deletestorage`
                          axios.delete(sendlink, formData).then(res=>{
                              if (res.data.success){
                                SetLoader(false)
                                localStorage.removeItem("Cart");
                                SetMessage(res.data.success)
                                setTimeout(()=>{
                                    window.location.href = `${url}/courses`;
                                  },1500)
                              }
                        })


                        }
                      })

                   }
                })
            }
        },
        onClose: function(){
          // user closed popup
          SetLoader(false)
        }
      });
      paystack.openIframe();

   }

   const handleBack =()=>{
       window.location.href = `${url}/courses`
   }


const handlePurchase =()=>{

}
const [showgroup, Setshowgrop] = useState(false)
const handleshow =()=>{
    Setshowgrop(true)
}

const handleSwitch =()=>{

if(groupswitch){
    Setgroupswitch(false)
}else{
    Setgroupswitch(true)
    SetSecSwitch(false)
}

}

const handlesecSwitch = ()=>{
   if(secondswitch){
    SetSecSwitch(false)
   }else{
    SetSecSwitch(true)
    Setgroupswitch(false)
   }
}


const [error, Seterror] = useState('');

const handleEnter =()=>{

  if(useremail){
    if(list.length == 0){
        let obj =  {id:0, email:useremail, fullname:fullname};
        Setlist([
            ... list,
            obj
        ])
        let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
        for (let index = 0; index < cart.length; index++) {
         cart[index]['email'] = useremail;
        }


        let data = JSON.stringify(cart)
        let formData = new FormData();
        formData.append("data", data)
        let sendlink =  `${url}/usercheckcourse`
        axios.post(sendlink, formData).then(res=>{
            if(res.data.success){
                let collect =  JSON.parse(res.data.success)
                setdatacollect(collect)

             }
          })



        Setuseremail('')
        Setuserfullname('')
    }else if(list.length > 0){
       let ans = list.map((item)=>item.email == useremail || item.fullname == fullname);
       let answer = ans.includes(true);
       if(answer == true){
        Seterror('you can not enter the same email twice')
        setTimeout(()=>{
            Seterror('')
        },1000)
       }else{

        let lastElement = list[list.length - 1];
         let answer = lastElement.id + 1;
         let object =  {id:answer, email:useremail, fullname:fullname};
         Setlist([
             ... list,
             object
         ]);

         let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
         for (let index = 0; index < cart.length; index++) {
          cart[index]['email'] = useremail;
         }
         let data = JSON.stringify(cart)
         let formData = new FormData();
         formData.append("data", data)
         let sendlink =  `${url}/usercheckcourse`
         axios.post(sendlink, formData).then(res=>{
             if(res.data.success){
             let collect =  JSON.parse(res.data.success)
             setdatacollect(collect)
             }
           })
         Setuseremail('')
         Setuserfullname('')
        // let cool = [];
        // let stu = {name:useremail, arr:Cart};
        // cool = [...cool, stu]
        // console.log(cool)


       }
    }

  }else{
    Seterror('please insert an email')
    setTimeout(()=>{
        Seterror('')
    },1000)
  }

}

// console.log(list)

useEffect(() => {
    localStorage.setItem("purchase", JSON.stringify(list));
  }, [list]);



  const handleDelete = (id)=>{
  let ans =   list.filter((item)=>item.id != id)
  Setlist(ans)
  localStorage.setItem("purchase", JSON.stringify(ans));
  Setuseremail('')
  }

  const handleEdit = (id)=>{
    let ans =   list.filter((item)=>item.id == id)
     setEdit(true)
     Seteditid(id)
     Setuseremail(ans[0].email)
  }

const handleEditarr = (e)=>{
    e.preventDefault();
    if(edit){
     let answer =  list.map((item)=>{
       return item.id === editid?{...item, email:useremail, fullname:fullname}:item
       })
       Setlist(answer)
       setEdit(false)
       Seteditid('')
       Setuseremail('')
       Setuserfullname('')
    }
}

const starcont = star => {
    let content = [];
    for (let i = 0; i < star; i++){
     content.push(   <label className='w-8' key={i}>
     <AiFillStar data-id={i} className='w-full text-[#FFC107] text-2xl'/>
    </label>)
    }
    return content;
}

const handleclear=(id)=>{
  let good =  Cart.filter((item)=>item.id != id)
  SetCart(good)
  localStorage.setItem("Cart", JSON.stringify(good))
}

// let chuks = Object.assign({}, Cart);
// console.log(chuks);


const handlePay = ()=>{
  let paystack = PaystackPop.setup({
    key: 'pk_test_717211460dbb54580490c8c657c4b42e4e35da03',
    email:email,
    amount: 2000,
    // currency:'USD',
    currency: 'USD',
    callback: function(response){
      let ref = response.reference
      if(ref){
        let hypelink = `${url}/paystack_verify/${ref}`
        axios.get(hypelink).then(res=>{
          if(res.data.status){

            let xoxo = list.map((item)=>{
              item['arr'] =Cart
              item['status'] =  res.data.message
              item['code'] =  ref
              return item;
            })

            let data = JSON.stringify(xoxo);
            let formData = new FormData();
            formData.append("data", data)
            let sendlink = `${url}/multiuserpurchase`
            axios.post(sendlink, formData).then(res=>{
                console.log(res)
              if(res.data.success){
                Setshowgrop(false)

              }
             })

          }
        })
      }


    },
    onClose: function(){
      // user closed popup
    }
  });
  paystack.openIframe();

}

  return (
    <div>

      <article className="w-full flex flex-row  justify-center space-x-10  mt-20">
        <section className="w-2/5  flex flex-col  px-4">
        <span className="text-2xl  capitalize font-bold text-[#37226C] ">
            My Cart
            </span>
            <div className="w-full">
              <ul className="text-center">
                  {Cart.length > 0? Cart.map((item, index)=>{
                     return <li className="w-full border flex flex-row" key={index}>
                      <span className="w-1/5">
                      <img src={item.picture} className="w-full h-full" />
                      </span>
                      <span className="w-3/5 flex flex-col">
                        <div className="text-sm capitalize">
                        {item.coursename}
                        </div>
                        <div className="text-sm capitalize">
                        {item.price}
                        </div>
                      </span>
                      <span className="w-1/5 grid  place-content-center">
                             <button className="bg-red-500 text-white  rounded-full w-6 h-6 grid place-content-center" onClick={()=>handleClick(item.id)}>
                                   <MdOutlineCancel className="text-2xl"/>
                             </button>
                          </span>
                    </li>
                  }):<li className="flex flex-col item-center">
                      <div className="text-4xl capitalize font-bold">Add items to Cart</div>
                      <div className="flex item-center justify-center mt-2">
                          <button className="text-lg bg-red-500 text-white rounded-md py-2 px-5 " onClick={handleBack}>Go Back</button>
                      </div>
                  </li>

                  }

              </ul>
            </div>
            <article className='w-full mt-1'>
                {gettotal() > 0? <ul>
                <li className='w-full flex flex-row items-center'>
                  <span className='w-10'>
                    <button className='w-10 h-10 bg-white text-black'>
                         <AiOutlinePlus className="pointer-events-none text-sm"/>
                    </button>
                  </span>
                  <span className='w-11/12 text-left capitalize text-sm' onClick={() => speak({ text:'stephen is a programmer that use react js and laravel 8' })}>
                     Enter a promo code
                  </span>
                </li>
                <li className='w-full flex flex-row items-center'>
                  <span className='w-10'>
                    <button className='w-10 h-10 bg-white text-black'>
                         <AiOutlinePlus className="pointer-events-none text-sm"/>
                    </button>
                  </span>
                  <span className='w-11/12 text-left capitalize text-sm cursor-pointer' onClick={handleshow}>
                  add users
                  </span>
                </li>
              </ul>:""}

            </article>
        </section>
        <section className="w-1/4 text-3xl capitalize">
            {gettotal() > 0?   <div className="w-full text-2xl  capitalize border-b font-bold text-[#37226C] ">
        Order Summary
            </div>:""}

             {gettotal() > 0?  <ul>
                  <li className="w-full flex flex-row items-center justify-between mt-2 ">
                    <span className="text-sm capitalize text-[#000000]">
                    Subtotal
                    </span>
                    <span className="text-sm capitalize text-[#000000]">
                       <Naira>{addedall()}</Naira>
                    </span>
                   </li>

                   <li className="w-full flex flex-row items-center justify-between mt-2 ">
                    <span className="text-sm capitalize text-[#000000]">
                    Tax
                    </span>
                    <span className="text-sm capitalize text-[#000000]">
                       <Naira>{onedollar}</Naira>
                    </span>
                   </li>

                   <li className="w-full flex flex-row items-center justify-between m-0 mt-4 border"></li>

                   <li className="w-full flex flex-row items-center justify-between mt-2 ">
                    <span className="text-sm capitalize text-[#000000]">
                    Total
                    </span>
                    <span className="text-sm capitalize text-[#000000]">
                    <Naira>{gettotal()}</Naira>
                    </span>
                   </li>


            </ul>:''}

                  {gettotal() > 0?   <article className='w-1/2 m-auto flex flex-row items-center justify-between space-x-4 mt-2'>
                         <button className='px-2 py-2  bg-[#A32926] text-white rounded-md flex flex-row items-center capitalize justify-center text-sm' onClick={handleCheck}>
                           {Loader?<div className="loader simple-circle"></div>:'Checkout'}
                         </button>

                         <button className='px-2 py-2  bg-[#A32926] text-white rounded-md flex flex-row capitalize items-center justify-center text-sm' onClick={handlePurchase}>
                           {load?<div className="loader simple-circle"></div>:'group purchase'}
                         </button>
                </article>:""}

        </section>
      </article>
     <div className={showgroup?"bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 flex flex-row justify-center overflow-y-scroll py-4":'hidden z-0'} >
        {/* sghsghs */}
          <article className="w-2/5  flex flex-col items-center bg-white px-3 py-2 rounded-md ">
            <section className='w-full'>
              <aside className='w-1/6 float-right flex flex-row items-center justify-center py-2'>
                  <button className='w-6 h-6  rounded-full bg-blue-700 text-white grid place-content-center' onClick={()=>Setshowgrop(false)}>x</button>
              </aside>
            </section>
             <section className="w-10/12  mt-6 flex flex-col items-center">
              <div className="w-full py-2 bg-[#A32926] flex flex-row items-center justify-between px-3">
               <span className="w-44 capitalize text-2xl text-white">
                   list of courses
               </span>

               <span className="w-12 grid place-content-center" data-name='first' onClick={handleSwitch}>
                   {groupswitch?<AiOutlineMinus className="text-2xl text-white" data-name='first'/>:
                                      <FiPlus className="text-2xl text-white" data-name='first' onClick={handleSwitch}/>

                   }
               </span>
              </div>

              <section className={groupswitch?"w-full  h-52 overflow-y-scroll":"w-full  h-0 overflow-y-scroll"} >
               <ul className="w-full flex flex-col">
                {Cart.map((item)=><li className="flex flex-row items-center mt-1  border-b px-2 py-1 space-x-1" key={item.id}>
                  <span className="w-24 h-24  rounded-md">
                     <img src={item.picture} className="w-full h-full  object-cover rounded-md"  />
                  </span>
                  <article className='w-3/4 flex flex-col items-center '>
                   <span className='w-full text-left font-bold font-poppins'>
                     {item.coursename}
                   </span>
                   <span className='w-full text-left font-normal font-poppins'>
                      {item.price}
                   </span>
                   <article className='w-full'>
                   <span className='w-1/2 flex flex-row space-x-1 mt-2 float-left' >
                       {starcont(item.rating?item.rating:3)}
                </span>
                   </article>
                  </article>
                  <span className="w-1/5 grid place-content-center">
                     <button className="flex flex-row items-center justify-center rounded-full bg-[#A32926] text-white w-6 h-6" onClick={()=>handleclear(item.id)}>
                         x
                     </button>
                  </span>
                </li>
)}
               </ul>
              </section>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-2xl">
                     amount:
                    </span>
                    <span className="w-32 capitalize text-2xl">
                     <Naira>{gettotal()}</Naira>
                    </span>
              </article>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-2xl">
                     persons:
                    </span>
                    <span className="w-32  text-2xl">
                       x{list.length}
                    </span>
              </article>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-2xl">
                     total:
                    </span>
                    <span className="w-32 capitalize text-2xl">
                        <Naira>{totalgroup()}</Naira>
                    </span>
              </article>


                 </section>


             <article className="w-10/12 mt-10  flex flex-col items-center  justify-center">
             <div className="w-full py-2 bg-[#A32926] flex flex-row items-center justify-between px-3">
               <span className="w-70 capitalize text-2xl text-white">
               Add number of persons
               </span>

               <span className="w-12 grid place-content-center"   onClick={handlesecSwitch}>
                   {secondswitch?<AiOutlineMinus className="text-2xl text-white" onClick={handlesecSwitch}/>:
                         <FiPlus className="text-2xl text-white" onClick={handlesecSwitch}/>

                   }
               </span>
              </div>
              <div className={error =='you can not enter the same email twice'  || error == 'please insert an email'?'w-full text-center text-lg text-red-600':'w-full text-center text-lg text-green-600'} >{error?error:""}</div>
              <section className={secondswitch?"w-full":"hidden h-0"} >
                  <ul className="w-full flex flex-col ">
                    {datacollect.length>0?
                      <li className="flex flex-col items-center px-2 py-2 h-20 overflow-x-scroll">
                    {datacollect.map((item)=>{
                     return <span className="w-10/12 text-center">
                            {item}
                        </span>
                    })}

                  </li>:""
                }
                    {list.length > 0 ?  list.map((item, index)=>{
                          return<li className="flex flex-row items-center justify-between px-2 py-2 " key={item.id}>
                          <span className=" text-sm  w-10">{index + 1+"."}</span>
                          <span  className=" text-sm  w-32">{item.fullname}</span>
                          <span className=" text-sm w-44">
                             {item.email}
                          </span>
                          <span className="w-1/6 space-x-6 flex flex-row items-center">
                              <button className="bg-white"  onClick={()=>handleDelete(item.id)}>
                                  <AiFillDelete className="text-2xl text-[#A32926]" onClick={()=>handleDelete(item.id)}/>
                              </button>
                              <button className="bg-white">
                                  <AiFillEdit className="text-2xl text-green-500" onClick={()=>handleEdit(item.id)} />
                              </button>
                          </span>
                      </li>
                      }):
                      <li className="flex flex-row items-center px-2 py-2">
                          <span className="w-10/12">
                              no user email added
                          </span>
                      </li>

                      }

                  </ul>
              </section>
              <section className={secondswitch?"w-full flex flex-col items-center":"hidden h-0"}>
                  <article className="w-10/12">
                      <input type="email"  value={useremail} onChange={(e)=>Setuseremail(e.target.value)} placeholder="enter Email..." className="p-3 rounded-md w-full border border-black outline-none" required/>
                  </article>
                  <article className="w-10/12 mt-1">
                      <input type="text"  value={fullname} onChange={(e)=>Setuserfullname(e.target.value)} placeholder="enter Fullname..." className="p-3 rounded-md w-full border border-black outline-none" required/>
                  </article>
                  <section className=" w-1/6 mt-1 flex flex-col items-center justify-center">
                       {edit?<button className="px-4 py-3 capitalize bg-blue-700 text-white" onClick={(e)=>handleEditarr(e)}>Edit</button>:
                      <button className="px-4 py-3 capitalize bg-[#A32926] text-white rounded-sm" onClick={handleEnter}>enter</button>
                       }
                  </section>
              </section>

              <div className='w-full flex  items-center justify-center mt-2 '>
              {list.length > 0?   <button className= 'px-4 py-3 text-white bg-blue-600 rounded-md' onClick={()=>handlePay()}>
                     purchase
                  </button>:  <button className= 'px-4 py-3 text-white bg-blue-600 rounded-md opacity-10' disabled>
                     purchase
                  </button>}

              </div>
             </article>



          </article>
         {/* sghsghs */}
     </div>

    </div>
  )
}
export default Cart;
if(document.getElementById("cart")){
ReactDOM.render(<Cart/>, document.getElementById("cart"))
}


// export default Login;
// if(document.getElementById('login')){
// ReactDOM.render(<Login/>, document.getElementById('login'));
// }
