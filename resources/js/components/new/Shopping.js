import React, {useState, useEffect, useRef, useMemo} from 'react';
import ReactDOM  from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import {FiPlus} from 'react-icons/fi';
import {BsFillCartFill} from 'react-icons/bs';
import {AiFillStar, AiFillEdit, AiFillDelete, AiOutlineMinus, AiFillHome} from 'react-icons/ai';
import PaystackPop from '@paystack/inline-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CurrencyFormat from 'react-currency-format';
// import { loadScript } from "@paypal/paypal-js";
export default function Shopping() {
    let url = window.location.origin;
    const [Cart, SetCart] = useState([])
    const pal = useRef();
    // const [Loader, SetLoader] = useState(false);
    const [Message, SetMessage] = useState("")
    const [pop, Setpop] = useState(false)
    const [showgroup, Setshowgrop] = useState(false)
    const [groupswitch, Setgroupswitch] = useState(false);
    const [secondswitch, SetSecSwitch] = useState(false);
    const [useremail, Setuseremail] = useState('')
    const [fullname, Setuserfullname] = useState('')
    const [list, Setlist] = useState([]);
    const [edit, setEdit] = useState(false)
    const [editid, Seteditid] = useState('')
    const [datacollect, setdatacollect] = useState([]);
    const [error, Seterror] = useState('');
    const [totalcost, Settotalcost] = useState('')
    const [subtotalcost, Setsubtotal] = useState()
    const [OrderId, setOrderId] = useState('')
    // const [currencycodee, setcurrencycode] = useState('')
    // const [usagroup, setusagroup] = useState('')
    // const [totalgroupcost, settotalgroupcost] = useState(0)
    const [loader, setloader] = useState(false)
    const [loaders, setloaders] = useState(false)
    const [poundsnaira, setPoundsnaira] = useState(0)
    const [totalusagroup, setTotalusagroup] = useState(0)
    useEffect(()=>{
        let urlthree = `${url}/allcurrency`;
        axios.get(urlthree).then(res=>{
            if(res.data){
                let info = res.data
            info.map((item)=>{
            //    console.log(item.currencyname, item.foreignrate,
            //     item.nairarate)

                if(item.currencyname === 'Pound sterling'){
                    setPoundsnaira(item.nairarate)
                }
            })

            }
        })
        SetCart(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
        Setlist(localStorage.getItem('purchase')?JSON.parse(localStorage.getItem('purchase')):[])
    },[])

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

    //    let converted = JSON.parse(currencyex)
    //      let convertnaira = converted.result.NGN
        // console.log()
         let symbol = currencysymbol.currency.symbol
         let moneyname = currencysymbol.currency.name
         let converted = JSON.parse(currencyex)
         let convertnaira = converted.result.NGN
         let currencycode = currencysymbol.currency.code
         let poundtodollar =  todollar.result.USD
         let other =  Object.values(othersmoneys.result);
         let poundtonaira = poundton.result.NGN
         const [convertdollar, setconvertdollar] = useState(poundtodollar)
       let subtotal = useMemo(()=>Cart.map((item)=>{
        if(moneyname == 'Nigerian Naira' && item.coursetype == 'OTHM'){
            return Math.round(item.price * poundsnaira);
        }else{
            return  parseInt(item.price?item.price:0)
        }
       }), [Cart])
    //    useEffect(()=>{
    //     setcurrencycode(currencycode)
    //    },[])
       const onedollar = 615;
       function gettotal(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira;
             return Math.round(quest);
          }else{
            let ans =   parseInt(sum?sum:0)
            return ans;
          }
       }
        let whole;
        let wholesecond = '';
        let wholeusagroup;
       function totalgroup(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
        if(currencycode != 'NGN'){
            return Math.round( sum * list.length / convertnaira)
        }else{

            return  sum * list.length
        }
        // let ans =   parseInt(sum?sum:0)
        //  return sum;
       }
       const [example, Setexample] = useState('')
    //    function usatotalgroup(){
    //     const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current + onedollar}, 0);
    //     if(currencycode != 'NGN'){
    //         let allans = Math.round( sum * list.length / convertnaira  * poundtodollar)
    //         // console.log('this is from the function'+allans)
    //         return Math.round( sum * list.length / convertnaira  * convertdollar)
    //     }else{
    //        let allans = sum * list.length
    //     //    console.log('this is from the function'+allans)
    //         return  sum * list.length
    //     }
    //     // let ans =   parseInt(sum?sum:0)
    //     //  return sum;
    //    }

       function usatotal(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira ;
            // let totalleght = list.length == 0?1:list.length;
             return Math.round(quest * poundtodollar);
          }else{
            let ans =   parseInt(sum?sum:0)
            return ans;
          }
       }

       function usatotalgroup(){
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira ;
             return Math.round(quest * poundtodollar * list.length);
          }else{
            let ans =   parseInt(sum?sum:0)
            return ans;
          }
       }

    //    let answhole =whole  * poundtodollar.result.USD
    //    setpounddollar(answhole)
     whole =  usatotal()
    wholeusagroup  = usatotalgroup()
    // console.log(wholeusagroup)





    //  wholesecond =
    // function dollarconvert(){

    // return   whole * poundtodollar.result.USD;

    // }
    // individual purchase whole
    //    console.log(whole)

       const handleCheck =()=>{
        setloader(true)
        let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
          //gettotal() * money.result.toFixed(2) *100.00
        //   this one gettotal()  *100.00,
        let paystack = PaystackPop.setup({
            key: 'pk_live_1cdc09bd2d33d7063a0e628325d43c0cd289ecf1',
            email:usersemail,
            amount:gettotal() * 100,
            // 2000 * 100,
            currency:'NGN',
            // currencycode == 'NGN'?'NGN':'USD',
            callback: function(response){
                let ref = response.reference
                if(ref){
                    let hypelink = `${url}/paystack_verify/${ref}`
                    axios.get(hypelink).then(res=>{
                       if(res.data.status){

                        for (let index = 0; index < cart.length; index++) {
                            cart[index]['status'] =  res.data.message
                            cart[index]['code'] =  ref
                            cart[index]['moneyname'] = moneyname
                            // cart[index]['means'] = 'paystack'
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
                                    setloader(true)
                                    // SetMessage(res.data.success)
                                    setTimeout(()=>{
                                       localStorage.removeItem("Cart");
                                        window.location.href = `${url}/newdashboard`;
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
              setloader(false)
            }
          });
          paystack.openIframe();

       }
  const handleBack =()=>{
   window.location.href = `${url}/newdashboard`
  }

  const handlePop =()=>{
    Setshowgrop(true)
  }

const handleshow =()=>{
    Setshowgrop(true)
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



     const handleEnter =(e)=>{
       e.preventDefault();
        if(useremail){
          if(list.length == 0){
              let obj =  {id:0, email:useremail, fullname:fullname};
              let datasend = [ ... list, obj]
              Setlist(datasend)
              localStorage.setItem("purchase", JSON.stringify(datasend));

              let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
              for (let index = 0; index < cart.length; index++) {
               cart[index]['email'] = useremail;
              }

              const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
              if(currencycode != 'NGN'){
                  let ans =   parseInt(sum?sum:0)
                  let quest = ans / convertnaira + onedollar / convertnaira ;
                   let answercom = Math.round(quest * poundtodollar * 1);
                  //  totalusagroup, setTotalusagroup
                  // localStorage.setItem('usatotallocal', JSON.stringify(add))
                  setTotalusagroup(answercom)

                }else{
                  let ans =   parseInt(sum?sum:0)
                  console.log(ans)

                }

            //   if(wholesecond){
            //     console.log(wholesecond)
            //     settotalgroupcost(wholesecond)
            //   }

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

              const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
              if(currencycode != 'NGN'){
                  let ans =   parseInt(sum?sum:0)
                  let quest = ans / convertnaira + onedollar / convertnaira ;
                  let totalleght = list.length + 1
                   let answercom = Math.round(quest * poundtodollar * totalleght);
                   setTotalusagroup(answercom)
                }else{
                  let ans =   parseInt(sum?sum:0)
                  console.log(ans)

                }


              let lastElement = list[list.length - 1];
               let answer = lastElement.id + 1;
               let object =  {id:answer, email:useremail, fullname:fullname};
               let datasend = [ ... list, object]
               Setlist(datasend)
               localStorage.setItem("purchase", JSON.stringify(datasend));

            //    if(wholesecond){
            //     console.log(wholesecond)
            //     settotalgroupcost(wholesecond)
            //   }


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


             }
          }

        }else{
          Seterror('please insert an email')
          setTimeout(()=>{
              Seterror('')
          },1000)
        }

      }


      const handleDelete = (id)=>{
        let ans =   list.filter((item)=>item.id != id)
        Setlist(ans)
        const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
        if(currencycode != 'NGN'){
            let ans =   parseInt(sum?sum:0)
            let quest = ans / convertnaira + onedollar / convertnaira ;
            let totalleght = list.length - 1
             let answercom = Math.round(quest * poundtodollar * totalleght);
             setTotalusagroup(answercom)

          }else{
            let ans =   parseInt(sum?sum:0)
            console.log(ans)

          }
        localStorage.setItem("purchase", JSON.stringify(ans));
        Setuseremail('')
        }


        const handleEdit = (id)=>{
            let ans =   list.filter((item)=>item.id == id)
             setEdit(true)
             Seteditid(id)
             Setuseremail(ans[0].email)
             Setuserfullname(ans[0].fullname)
          }

          const handleEditarr = (e)=>{
            e.preventDefault();
            if(edit){
             let answer =  list.map((item)=>{
               return item.id === editid?{...item, email:useremail, fullname:fullname}:item
               })
               localStorage.setItem("purchase", JSON.stringify(answer));
               Setlist(answer)
               setEdit(false)
               Seteditid('')
               Setuseremail('')
               Setuserfullname('')
            }
        }

      const handlePay = (e)=>{
        e.preventDefault();
        setloaders(true)
        let from = new Date()
        var ddfrom = String(from.getDate()).padStart(2, '0');
        var mmfrom = String(from.getMonth() + 1).padStart(2, '0');
        var yyyyfrom = from.getFullYear();
        let bfrom = ddfrom+ '/' + mmfrom + '/' + yyyyfrom;

        let paystack = PaystackPop.setup({
          key: 'pk_live_1cdc09bd2d33d7063a0e628325d43c0cd289ecf1',
          email:usersemail,
          amount:totalgroup() * 100,
          // 2000  *100.00,
          currency:'NGN',
          // currencycode == 'NGN'?'NGN':'USD',
          callback: function(response){
            let ref = response.reference
            if(ref){
              let hypelink = `${url}/paystack_verify/${ref}`
              axios.get(hypelink).then(res=>{
                // console.log(res)
                if(res.data.status){

                  let xoxo = list.map((item)=>{
                    item['arr'] =Cart.map((one)=>{
                        popTalks(one.converted, one.price)
                        return one;
                    })
                    item['status'] =  res.data.message
                    item['code'] =  ref
                    item['moneyname'] = moneyname
                    return item;
                  })

                  let data = JSON.stringify(xoxo);
                //   console.log(data)
                  let formData = new FormData();
                  formData.append("data", data)
                  formData.append("totalcost", totalcost)
                  formData.append("subcost", subtotalcost)
                   formData.append("today", bfrom)
                  let sendlink = `${url}/multiuserpurchase`
                  axios.post(sendlink, formData).then(res=>{
                    // console.log(res)
                    if(res.data.success){
                        let formDataone = new FormData();
                        formDataone.append("commend", 'yes')
                        let sendlink =  `${url}/deletestorage`
                        axios.delete(sendlink, formDataone).then(res=>{
                            if (res.data.success){
                       localStorage.removeItem("Cart");
                      Setshowgrop(false)
                      SetSecSwitch(false)
                      setloaders(false)
                      setTimeout(()=>{
                        localStorage.removeItem("Cart");
                        SetCart([])
                        window.location.href = `${url}/newdashboard`;
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
          }
        });
        paystack.openIframe();

      }




      useEffect(()=>{

        // settotalgroupcost(usatotalgroup())
        Setsubtotal(gettotal())
     Settotalcost(totalgroup())
         if( datacollect.length > 0){
           setTimeout(()=>{
            setdatacollect([])
           },5000)
         }
      },[datacollect])
//    console.log( subtotalcost,totalcost)

function moneyTalks(converted, price, coursetype){
    // console.log(converted, price);
    if(moneyname == 'Nigerian Naira' && coursetype == 'OTHM'){
        return Math.round(price * poundsnaira);

    }else{
        if(converted){
            return Math.round(price);
           }
           else{
            if(currencycode != 'NGN'){
                return Math.round(price / convertnaira) ;
            }else{
                return Math.round(price);

            }

           }
    }
   }

   function popTalks(converted, price){
    // console.log(converted, price);
    if(converted){
     return Math.round(price);
    }
    else{
     if(currencycode != 'NGN'){
         return Math.round(price * currencyex)
     }else{
         return Math.round(price)

     }

    }
   }

   let itemspurchased = Cart.map((item)=>item.coursename).toString()

//    const createOrder = (data, actions)=>{
//      //
//      // console.log(sun)
//     return actions.order.create({
//      // whole
//         purchase_units:[{
//             description:itemspurchased,
//             amount:{
//                 currency_code:'USD',
//                 value:whole,

//             },
//         },
//     ],
//     application_context: {
//         shipping_preference:'NO_SHIPPING'
//         }
//     }).then((orderID)=>{
//         setOrderId(orderID)
//         // OrderId
//         return orderID
//     })

//    }





//    const onApprove =(data, actions)=>{
//     let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
//      return actions.order.capture().then((details)=>{
//         // console.log(details, OrderId)
//         let transactionid = '';
//         // details.status
//          details.purchase_units.map((item)=>{
//             item.payments.captures.map((one)=>{
//                 transactionid = one.id
//             })
//          })
//         // const {payer} = details;

//         if(details.status && transactionid){

//             // for (let index = 0; index < cart.length; index++) {

//             //     // cart[index]['means'] = 'paystack'
//             //  }
//              for (let index = 0; index < cart.length; index++) {
//                 if(currencycode == 'NGN'){
//                     console.log(cart[index])
//                     cart[index]['status'] =  details.status
//                     cart[index]['code'] =  transactionid
//                     cart[index]['moneyname'] = moneyname
//                 }else{
//                    Math.round(cart[index]['price']/convertnaira)
//                     cart[index]['status'] =  details.status
//                     cart[index]['code'] =  transactionid
//                     cart[index]['moneyname'] = moneyname

//                 }

//                }

//              let data = JSON.stringify(cart)

//              let formData = new FormData();
//              formData.append("data", data)
//              let sendlink =  `${url}/muitplepayment`
//              axios.post(sendlink, formData).then(res=>{
//                  if(res.data.success){
//                    formData.append("commend", 'yes')
//                    let sendlink =  `${url}/deletestorage`
//                    axios.delete(sendlink, formData).then(res=>{
//                        if (res.data.success){
//                          SetLoader(false)
//                          // SetMessage(res.data.success)
//                          setTimeout(()=>{
//                             localStorage.removeItem("Cart");
//                              window.location.href = `${url}/newdashboard`;
//                            },1500)
//                        }
//                  })
//                  }
//                })
//         }

//      })
//    }

//    const onError =(data, actions)=>{
//     //   SetErrorMessage('your payment was not successfull')
//    }
// itemspurchased
//    const makeOrder =(data, actions)=>{
//     return actions.order.create({
//         // whole
//            purchase_units:[{
//                description:itemspurchased,
//                amount:{
//                    currency_code:'USD',
//                    value:whole,

//                },
//            },
//        ],
//        application_context: {
//            shipping_preference:'NO_SHIPPING'
//            }
//        }).then((orderID)=>{
//            setOrderId(orderID)
//            // OrderId
//            return orderID
//        })
//    }

let cal = localStorage.getItem('calcalate')?JSON.parse(localStorage.getItem('calcalate')):[]
 let dis =cal[0]
//  console.log(dis)

   const makeOrder = (data, actions)=>{

    return actions.order.create({
        // whole
           purchase_units:[{
               description:itemspurchased,
               amount:{
                   currency_code:'USD',
                   value:whole,

               },
           },
       ],
       application_context: {
           shipping_preference:'NO_SHIPPING'
           }
       }).then((orderID)=>{
           setOrderId(orderID)
           // OrderId
           return orderID
       })
   }

//  onSuccess={onSuccess}
//  onError={(data, actions)=>{
//     //   SetErrorMessage('your payment was not successfull')
//    }

  //  const onSuccess = (data, actions)=>{
  //   return actions.order.capture().then((details)=>{
  //     // console.log(details, OrderId)
  //     let transactionid = '';
  //     // details.status
  //      details.purchase_units.map((item)=>{
  //         item.payments.captures.map((one)=>{
  //             transactionid = one.id
  //         })
  //      })
  //      if(details.status && transactionid){
  //       let from = new Date()
  //       var ddfrom = String(from.getDate()).padStart(2, '0');
  //       var mmfrom = String(from.getMonth() + 1).padStart(2, '0');
  //       var yyyyfrom = from.getFullYear();
  //       let bfrom = ddfrom+ '/' + mmfrom + '/' + yyyyfrom;

  //       let xoxo = list.map((item)=>{
  //         item['arr'] =Cart
  //         item['status'] =  details.status
  //         item['code'] = transactionid
  //         item['moneyname'] = moneyname
  //         return item;
  //       })

  //       let data = JSON.stringify(xoxo);

  //       let formData = new FormData();
  //       formData.append("data", data)
  //       formData.append("totalcost", totalcost)
  //       formData.append("subcost", subtotalcost)
  //        formData.append("today", bfrom)
  //       let sendlink = `${url}/multiuserpurchase`
  //       axios.post(sendlink, formData).then(res=>{
  //         if(res.data.success){
  //           Setshowgrop(false)
  //           setTimeout(()=>{
  //             window.location.href = `${url}/newdashboard`;
  //           },1500)
  //         }
  //        })


  //      }



  //     })
  //  }

   const onshowError =(data, actions)=>{
    //   SetErrorMessage('your payment was not successfull')

   }

    const handleHome = ()=>{
        window.location.href = `${url}/newdashboard`
    }
    const handleShopping =()=>{
        window.location.href = `${url}/shoppingcart`
    }
// https://github.com/chrisblakely01/quiz-app (question and answer application)
// https://github.com/machadop1407/PayPal-Implementation-React/blob/master/public/index.html
// wholeusagroup = usatotalgroup()


useEffect(()=>{

    // window.paypal.Buttons({
    //   createOrder: (data, actions, err) => {
    //     return actions.order.create({
    //     //   intent: "CAPTURE",
    //       purchase_units: [
    //         {
    //           description: "Cool looking table",
    //           amount: {
    //             currency_code:'USD',
    //             value:wholeusagroup,
    //           },
    //         },
    //       ],
    //     });
    //   },
    //   onApprove: async (data, actions) => {
    //     const order = await actions.order.capture();
    //     console.log(order);
    //   },
    //   onError: (err) => {
    //     console.log(err);
    //   },
    // }).render(paypal.current);




// loadScript({ "client-id": "AYauehWxDIcW5N-L432YO1bcyGnqy4lzfx00pdgX5VLRlm0qQ48rKn4odTFy8J_bWdUi57eOAS8c1ato" })
//     .then((paypal) => {
//         paypal
//             .Buttons({
//               createOrder: async(data, actions, err) => {
//                 return actions.order.create({
//                   intent: "CAPTURE",
//                   purchase_units: [
//                     {
//                       description: "Cool looking table",
//                       amount: {
//                         currency_code:'USD',
//                         value:400,
//                         // wholeusagroup
//                       },
//                     },
//                   ],
//                 });
//               },
//               onApprove: async (data, actions) => {
//                 const order = await actions.order.capture();
//                 console.log(order);
//               },
//               onError: (err) => {
//                 console.log(err);
//               },
//             })
//             .render(pal.current)
//             .catch((error) => {
//                 console.log("failed to render the PayPal Buttons", error);
//             });
//     })
//     .catch((error) => {
//         console.log("failed to load the PayPal JS SDK script", error);
//     });




    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }
    },1000)
    return () => clearInterval(interval);
 },[])





  return (
    <div id="wrapper" className="horizontal">
      <Navbar/>
      {/* <!--  breadcrumb --> */}
        <div className="from-red-500 via-red-400 to-red-500 bg-gradient-to-l breadcrumb-area py-6 text-white">
            <div className="container mx-auto lg:pt-5">
                <div className="breadcrumb text-white">
                    <ul className="m-0">
                        <li>
                       <AiFillHome onClick={handleHome}/>
                        </li>
                        <li className="mr-1">
                            <a className='cursor-pointer' onClick={handleHome}>Home</a>
                        </li>
                       <li></li>
                        <li>
                            <BsFillCartFill  onClick={handleShopping}/>
                        </li>
                        <li className="active">
                            <a className='cursor-pointer' onClick={handleShopping}>Shopping Cart </a>
                        </li>
                    </ul>
                </div>
                <div className="md:text-2xl text-base font-semibold mt-6 md:mb-24"> Shopping Cart </div>
            </div>
        </div>
            {/* <!--  breadcrumb --> */}

            <div className="container">
            <div className="max-w-3xl mx-auto lg:-mt-20 relative">

                <div className="bg-white rounded-md shadow-md">

                    <h3 className="border-b font-semibold px-5 py-4 text-base text-gray-500"> Your cart ({Cart.length} items)</h3>
                  {Cart.map((item, index)=>{
                    return <div className="divide-y" key={index}>
                    <div className="flex items-start space-x-6 relative py-7 px-6">
                        <div className="h-28 overflow-hidden relative rounded-md w-44">
                            <img src={item.picture} alt="" class="absolute w-full h-full inset-0 object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <a  className="md:text-lg font-semibold line-clamp-2 mb-2">{item.coursename}</a>
                          {item.instructor == null?"":<a href="#" className="font-medium block text-sm"> {item.instructor == null?'':item.instructor} </a>}
                            <div className="flex items-center mt-7 space-x-2 text-sm font-medium">
                                <div> {item.language}  </div>
                                <div className="md:block hidden">·</div>
                                <div className="flex items-center"> {item.venue} </div>
                            </div>
                        </div>
                        {/* <h5 className="font-semibold text-black text-xl"><Naira>{item.price}</Naira></h5> */}
                        <div className="font-semibold text-black text-xl"> <CurrencyFormat value={moneyTalks(item.converted, item.price, item.coursetype)} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>
                        <h5 className="absolute bottom-9 font-semibold right-4 text-blue text-blue-500  cursor-pointer" onClick={()=>handleClick(item.id)}> Remove </h5>
                    </div>
                </div>
                  })}


                    <div className="border-t mt-5 pt-6 space-y-6">

                        <div className="flex justify-between px-6">
                            <div className="flex-1 min-w-0">
                                <h1 className="text-lg font-medium"> Subtotal </h1>
                                {/* <p> All Courses have a <strong>30-day</strong> money-back guarantee </p> */}
                            </div>
                            {/* <h5 className="font-semibold text-black text-xl">{symbol+gettotal()} </h5> */}
                            <div className="font-semibold text-black text-xl"> <CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>

                        </div>

                        <div className="px-6 pb-5 ">
                            {Cart.length > 0?
                            currencycode == 'NGN'?
                            <a className="bg-blue-600 block py-3 rounded-md text-white text-center text-base font-semibold hover:text-white hover:bg-blue-700 cursor-pointer" style={{ color:'white' }} onClick={()=>handleCheck()}>{loader?'Please wait...':'Checkout'}  </a>
                            :<div className="relative z-0" >
                            <PayPalScriptProvider options={{ "client-id": "AUBDz8zhTjw7acKU1_wB6b-ngtUEEsYD2vPbPtr6i8Lp5zHlvvgq-zhdpUBSuFNZ5qMlvaNB2SI23M5A" }}>
                                 <PayPalButtons style={{layout:'vertical',   z_index:"-1"}}
                                 createOrder={(data, actions)=>{
                                    //
                                    // console.log(sun)
                                   return actions.order.create({
                                    // whole
                                       purchase_units:[{
                                           description:itemspurchased,
                                           amount:{
                                               currency_code:'USD',
                                               value:whole,

                                           },
                                       },
                                   ],
                                   application_context: {
                                       shipping_preference:'NO_SHIPPING'
                                       }
                                   }).then((orderID)=>{
                                       setOrderId(orderID)
                                       // OrderId
                                       return orderID
                                   })

                                  }}
                                 onApprove={(data, actions)=>{
                                    let cart = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
                                     return actions.order.capture().then((details)=>{
                                        // console.log(details, OrderId)
                                        let transactionid = '';
                                        // details.status
                                         details.purchase_units.map((item)=>{
                                            item.payments.captures.map((one)=>{
                                                transactionid = one.id
                                            })
                                         })
                                        // const {payer} = details;

                                        if(details.status && transactionid){

                                            // for (let index = 0; index < cart.length; index++) {

                                            //     // cart[index]['means'] = 'paystack'
                                            //  }
                                             for (let index = 0; index < cart.length; index++) {
                                                if(currencycode == 'NGN'){
                                                    console.log(cart[index])
                                                    cart[index]['status'] =  details.status
                                                    cart[index]['code'] =  transactionid
                                                    cart[index]['moneyname'] = moneyname
                                                }else{
                                                   Math.round(cart[index]['price']/convertnaira)
                                                    cart[index]['status'] =  details.status
                                                    cart[index]['code'] =  transactionid
                                                    cart[index]['moneyname'] = moneyname

                                                }

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
                                                        //  SetLoader(false)
                                                         // SetMessage(res.data.success)
                                                         setTimeout(()=>{
                                                            localStorage.removeItem("Cart");
                                                             window.location.href = `${url}/newdashboard`;
                                                           },1500)
                                                       }
                                                 })
                                                 }
                                               })
                                        }

                                     })
                                   }}
                                 onError={(data, actions)=>{
                                    //   SetErrorMessage('your payment was not successfull')
                                   }}
                                 />
                            </PayPalScriptProvider>
                            </div>

                            :
                            <a className="bg-red-500 block py-3 rounded-md text-white text-center text-base font-semibold hover:text-white hover:bg-blue-700 cursor-pointer"  style={{ color:'white' }} onClick={()=>handleBack()}> Back </a>
}
                            <div className="flex items-center justify-center mt-4 space-x-1.5">
                                <p className="font-medium"> or </p> <a  className="text-blue-600 font-semibold text-center cursor-pointer" onClick={handlePop}>Group Purchase</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
         {/* w-9/12 */}
        <article className={showgroup?"bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 flex flex-row justify-center overflow-y-scroll py-4":'hidden z-0'}>
        <article className="w-10/12  flex flex-col items-center bg-white px-3 py-2 rounded-md  overflow-y-scroll mt-16     sm:w-3/4  sm:flex sm:flex-col sm:items-center sm:bg-white sm:px-3 sm:py-2 sm:rounded-md  sm:overflow-y-scroll sm:mt-16         md:w-2/3  md:flex md:flex-col md:items-center md:bg-white md:px-3 md:py-2 md:rounded-md  md:overflow-y-scroll md:mt-16     lg:w-1/2  lg:flex lg:flex-col lg:items-center lg:bg-white lg:px-3 lg:py-2 lg:rounded-md  lg:overflow-y-scroll lg:mt-16">
            <section className='w-full'>
              <aside className='w-1/12 float-right flex flex-row items-center justify-center py-2'>
                  <button className='w-6 h-6  rounded-full bg-blue-500 text-white grid place-content-center' onClick={()=>Setshowgrop(false)}>x</button>
              </aside>
            </section>
             <section className="w-11/12  mt-6 flex flex-col items-center  md:w-10/12  md:mt-6 md:flex md:flex-col md:items-center lg:w-10/12  lg:mt-6 lg:flex lg:flex-col lg:items-center">
              <div className="w-full py-2 bg-[#A32926] flex flex-row items-center justify-between px-3">
               <span className="w-44 capitalize text-base text-white   md:w-44 md:capitalize md:text-lg md:text-white  lg:w-44 lg:capitalize lg:text-lg lg:text-white">
                   list of courses
               </span>

               <span className="w-12 grid place-content-center" data-name='first' onClick={handleSwitch}>
                   {groupswitch?<AiOutlineMinus className="text-sm text-white md:text-2xl md:text-white lg:text-2xl lg:text-white" data-name='first'/>:
                                      <FiPlus className="text-sm text-white md:text-2xl md:text-white lg:text-2xl lg:text-whitetext-2xl lg:text-white" data-name='first' onClick={handleSwitch}/>

                   }
               </span>
              </div>

              <section className={groupswitch?"w-full  h-52 overflow-y-scroll z-50":"w-full  h-0 overflow-y-scroll"} >
               <ul className="w-full flex flex-col">
                {Cart.map((item)=><li className="flex flex-row items-center mt-1  border-b px-2 py-1 space-x-1" key={item.id}>
                  <span className=" w-14 h-14  rounded-md lg:w-24 lg:h-24  lg:rounded-md">
                     <img src={item.picture} className="w-full h-full  object-cover rounded-md"  />
                  </span>
                  <article className='w-3/4 flex flex-col items-center '>
                   <span className='w-full text-left font-bold font-poppins text-xs   lg:w-full lg:text-left lg:font-bold lg:font-poppins lg:text-base'>
                     {item.coursename}
                   </span>
                   <span className='w-full text-left text-xs  font-normal font-poppins  md:w-full md:text-left md:text-base  md:font-normal md:font-poppins lg:w-full lg:text-left lg:text-base  lg:font-normal lg:font-poppins'>
                     <CurrencyFormat value={popTalks(item.converted, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} />

                   </span>
                   <article className='w-full'>
                   <span className='w-1/2 flex flex-row space-x-1 mt-1 float-left md:w-1/2 md:flex md:flex-row md:space-x-1 md:mt-2 md:float-left lg:w-1/2 lg:flex lg:flex-row lg:space-x-1 lg:mt-2 lg:float-left' >
                       {starcont(item.rating?item.rating:3)}
                </span>
                   </article>
                  </article>
                  <span className="w-1/5 grid place-content-center">
                     <button className="flex flex-row items-center justify-center rounded-full bg-[#A32926] text-white w-4 h-4 text-xs    md:flex md:flex-row md:items-center md:justify-center md:rounded-full md:bg-[#A32926] md:text-white md:text-base md:w-6 md:h-6    lg:flex lg:flex-row lg:items-center lg:justify-center lg:rounded-full lg:bg-[#A32926] lg:text-white lg:text-base lg:w-6 lg:h-6" onClick={()=>handleclear(item.id)}>
                         x
                     </button>
                  </span>
                </li>
)}
               </ul>
              </section>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-base">
                     amount:
                    </span>
                    <span className="w-32 capitalize text-base">
                     {/* {symbol+gettotal()} */}
                     <CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix={symbol} />

                    </span>
              </article>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-base">
                     persons:
                    </span>
                    <span className="w-32  text-base">
                       x{list.length}
                    </span>
              </article>
              <article className="w-full h-auto flex flex-row justify-between px-2">
              <span className= "w-32 capitalize font-bold text-base">
                     total:
                    </span>
                    <span className="w-32 capitalize text-base">
                    {/* {symbol+totalgroup()} */}
                    <CurrencyFormat value={totalgroup()} displayType={'text'} thousandSeparator={true} prefix={symbol} />

                    </span>
              </article>


                 </section>


             <article className="w-11/12  mt-6 flex flex-col items-center  md:w-10/12  md:mt-6 md:flex md:flex-col md:items-center lg:w-10/12  lg:mt-6 lg:flex lg:flex-col lg:items-center">
             <div className="w-full py-2 bg-[#A32926] flex flex-row items-center justify-between px-3">
               <span className="w-70 capitalize text-sm text-white   md:w-80 md:capitalize md:text-base md:text-white lg:w-70 lg:capitalize lg:text-lg lg:text-white">
               Add number of persons
               </span>

               <span className="w-12 grid place-content-center"   onClick={handlesecSwitch}>
                   {secondswitch?<AiOutlineMinus className="text-white md:text-2xl md:text-white lg:text-2xl lg:text-white" onClick={handlesecSwitch}/>:
                         <FiPlus className="text-sm text-white md:text-2xl md:text-white lg:text-2xl lg:text-whitetext-2xl lg:text-white" onClick={handlesecSwitch}/>

                   }
               </span>
              </div>
              <div className={error =='you can not enter the same email twice'  || error == 'please insert an email'?'w-full text-center text-lg text-red-600':'w-full text-center text-lg text-green-600'} >{error?error:""}</div>
              <section className={secondswitch?"w-full":"hidden h-0"} >
                  <ul className="w-full flex flex-col ">
                    {datacollect.length>0?
                      <li className="flex flex-col items-center px-2 py-2 h-20 overflow-x-scroll">
                    {datacollect.map((item)=>{
                     return <span className="w-10/12 text-center text-xs">
                            {item}
                        </span>
                    })}

                  </li>:""
                }
                    {list.length > 0 ?  list.map((item, index)=>{
                          return<li className=" flex flex-row items-center justify-between px-2 py-2 overflow-x-scroll md:flex md:flex-row md:items-center md:justify-between md:px-2 md:py-2 md:overflow-x-hidden     lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-2 lg:py-2 lg:overflow-x-hidden" key={index}>
                          <span className=" text-sm w-4">{index + 1+"."}</span>
                          <span  className="text-sm  w-32">{item.fullname}</span>
                          <span className="text-sm w-44">
                             {item.email}
                          </span>
                          <span className="w-24 space-x-4 flex flex-row items-center">
                              <a className="bg-white border-none outline-none flex justify-center items-center "  onClick={()=>handleDelete(item.id)}>
                                  <AiFillDelete className="text-2xl text-[#A32926]" onClick={()=>handleDelete(item.id)}/>
                              </a>
                              <a className="bg-white flex justify-center items-center">
                                  <AiFillEdit className="text-2xl text-green-500" onClick={()=>handleEdit(item.id)} />
                              </a>
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
                  <article className="w-11/12 md:w-10/12 lg:w-10/12">
                      <input type="email"  value={useremail} onChange={(e)=>Setuseremail(e.target.value)} placeholder="enter Email..." className="p-2 rounded-md w-full border border-black outline-none md:p-3 md:rounded-md md:w-full md:border md:border-black md:outline-none lg:p-3 lg:rounded-md lg:w-full lg:border lg:border-black lg:outline-none" required/>
                  </article>
                  <article className="w-11/12 mt-1 md:w-10/12 md:mt-1 lg:w-10/12 lg:mt-1">
                      <input type="text"  value={fullname} onChange={(e)=>Setuserfullname(e.target.value)} placeholder="enter Fullname..." className="p-2 rounded-md w-full border border-black outline-none md:p-3 md:rounded-md md:w-full md:border md:border-black md:outline-none lg:p-3 lg:rounded-md lg:w-full lg:border lg:border-black lg:outline-none" required/>
                  </article>
                  <section className=" w-1/6 mt-1 flex flex-col items-center justify-center">
                       {edit?<button className="px-4 py-3 capitalize bg-blue-700 text-white" onClick={(e)=>handleEditarr(e)}>Edit</button>:
                      <a className="px-4 py-3 capitalize bg-[#A32926] text-white rounded-sm" onClick={(e)=>handleEnter(e)}>enter</a>
                       }
                  </section>
              </section>

              <div className='w-full flex  items-center justify-center mt-2 '>
              {list.length > 0?
                  currencycode == 'NGN'?
              <button className= 'px-4 py-3 text-white bg-blue-600 rounded-md' onClick={(e)=>handlePay(e)}>
                   {loaders?'please wait':'purchase'}
                  </button>
                   : <div  className="relative z-0" >
                    {/* ref={pal} */}

                            <PayPalScriptProvider   options={{ "client-id": "AUBDz8zhTjw7acKU1_wB6b-ngtUEEsYD2vPbPtr6i8Lp5zHlvvgq-zhdpUBSuFNZ5qMlvaNB2SI23M5A" }}>
                                 <PayPalButtons style={{layout:'vertical',   z_index:"-1"}}
                                    disabled={false}
                                 forceReRender={[wholeusagroup]}
                                 fundingSource={undefined}
                                 createOrder={ (data, actions)=>{

                                    return actions.order.create({
                                        // whole
                                           purchase_units:[{
                                               description:itemspurchased,
                                               amount:{
                                                   currency_code:'USD',
                                                   value:wholeusagroup,

                                               },
                                           },
                                       ],
                                       application_context: {
                                           shipping_preference:'NO_SHIPPING'
                                           }
                                       }).then((orderID)=>{
                                           setOrderId(orderID)
                                           // OrderId
                                           return orderID
                                       })
                                   }
                                 }

                                 onApprove={
                                  (data, actions)=>{
                                    return actions.order.capture().then((details)=>{
                                      // console.log(details, OrderId)
                                      let transactionid = '';
                                      // details.status
                                       details.purchase_units.map((item)=>{
                                          item.payments.captures.map((one)=>{
                                              transactionid = one.id
                                          })
                                       })
                                       if(details.status && transactionid){
                                        let from = new Date()
                                        var ddfrom = String(from.getDate()).padStart(2, '0');
                                        var mmfrom = String(from.getMonth() + 1).padStart(2, '0');
                                        var yyyyfrom = from.getFullYear();
                                        let bfrom = ddfrom+ '/' + mmfrom + '/' + yyyyfrom;

                                        let xoxo = list.map((item)=>{
                                          item['arr'] =Cart
                                          item['status'] =  details.status
                                          item['code'] = transactionid
                                          item['moneyname'] = moneyname
                                          return item;
                                        })

                                        let data = JSON.stringify(xoxo);

                                        let formData = new FormData();
                                        formData.append("data", data)
                                        formData.append("totalcost", totalcost)
                                        formData.append("subcost", subtotalcost)
                                         formData.append("today", bfrom)
                                        let sendlink = `${url}/multiuserpurchase`
                                        axios.post(sendlink, formData).then(res=>{
                                          if(res.data.success){
                                            Setshowgrop(false)
                                            setTimeout(()=>{
                                              window.location.href = `${url}/newdashboard`;
                                            },1500)
                                          }
                                         })


                                       }



                                      })
                                   }

                                 }
                                //  wholesecond
                                 />
                            </PayPalScriptProvider>
                            </div>

                  :  <button className= 'px-4 py-3 text-white bg-blue-600 rounded-md opacity-10' >
                     purchase
                  </button>}

              </div>
             </article>


          </article>




        </article>

    <Footer/>

    </div>
  );
}

if(document.getElementById('shoppingcart')){
ReactDOM.render(<Shopping/>, document.getElementById('shoppingcart'))
}
