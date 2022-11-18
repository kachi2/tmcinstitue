import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
export default function Navbar() {
    let url = window.location.origin;
 const [Cart, SetCart] = useState([]);
 const [poundsnaira, setPoundsnaira] = useState(0)

 useEffect(()=>{
    let urlthree = `${url}/allcurrency`;
    axios.get(urlthree).then(res=>{
        if(res.data){
            let info = res.data
        info.map((item)=>{
           console.log(item.currencyname, item.foreignrate,
            item.nairarate)

            if(item.currencyname === 'Pound sterling'){
                setPoundsnaira(item.nairarate)
            }
        })

        }
    })


    if(Cart.length == 0){
        SetCart(cart === null || cart.length == 0?[]:cart)
    }
 },[])

 let symbol = currencysymbol.currency.symbol

     let converted = JSON.parse(currencyex)
         let convertnaira = converted.result.NGN
         let moneyname = currencysymbol.currency.name
         let other =  Object.values(othersmoneys.result);
         let poundtonaira = poundton.result.NGN
     let subtotal =  Cart.map((item)=>{

         if(moneyname == 'Nigerian Naira' && item.coursetype == 'OTHM'){
            return Math.round(item.price * poundsnaira);
         }else{
            if(currencysymbol.currency.code != 'NGN'){
                let price =  parseInt(item.price?item.price:0) /convertnaira
                return  Math.round(price)
              }else{
                  return  parseInt(item.price?item.price:0);
              }
         }

     }


     )
     const onedollar = 615

     function addedall (){
        const sum = subtotal.reduce((accumulator, current) => accumulator + current, 0);

        return sum?sum:0;
       }

     function gettotal(){
      const sum = subtotal.reduce((accumulator, current) =>{return accumulator + current }, 0);
    //let ans =   parseInt(sum?sum:0)
    //return  Math.round(sum);
    if(currencysymbol.currency.code != 'NGN'){
        let ans =   parseInt(sum?sum:0)
        let quest = ans + (onedollar/convertnaira);
         return Math.round(quest);
      }else{
        let ans =   parseInt(sum?sum:0)
        return ans;
      }

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



// const handleHome =()=>{
//    window.location.href = `${url}`;
// }

const handleLink =(e)=>{
    e.preventDefault();
    window.location.href =`${url}/shoppingcart`
}

const handleMycourse = ()=>{
    window.location.href =`${url}/usercourses`;
}
let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]

        useEffect(()=>{
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }
    },1000)
    return () => clearInterval(interval);
 },[])

 const handleLogout =()=>{
         localStorage.clear();
         SetCart([])
         setTimeout(()=>{
              window.location.href = `${url}/Logout`;
         Setdrop(false)
         },1000)
 }




 function moneyTalks(converted, price, coursetype, currency_name){
    // console.log(converted, price);
    // console.log(poundtonaira,coursetype, currency_name)
    if(coursetype == 'OTHM'){
        if(currency_name == moneyname){
             return price;

            }else if (moneyname == 'Nigerian Naira'){
                return Math.round(price * poundsnaira);
            }else if(currency_name != moneyname){
                return Math.round(price * other[0]);
            }

    }else{
        if(converted){
            return Math.round(price);
           }
           else{
            if(currencysymbol.currency.code != 'NGN'){
                return Math.round(price / convertnaira);
            }else{
                return  Math.round(price) ;
            }

           }
    }



   }
   const handleIcon =()=>{
    if(username){
        window.location.href = `${url}/newdashboard`;
    }else{
        window.location.href = `${url}`
    }
   }

   const handleStudy = ()=>{
    window.location.href = `${url}/studyabroad`
   }

   const handleOthm = ()=>{
    // if(username){
    window.location.href = `${url}/othmcourses`
    // }else{
    //     window.location.href = `${url}`
    // }
   }
   const handleLgca = ()=>{
    // if(username){
    window.location.href = `${url}/listcourses`
    // }else{
    //     window.location.href = `${url}`
    // }

   }

   const handleAcc = ()=>{
    window.location.href = `${url}/profile`
   }

   const handleLinks = (e)=>{
    let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
          }
 const handleLG =()=>{
    window.location.href = `https://morgans.elearning.lgca.uk/index`
 }


 const handleterms = ()=>{
    window.location.href = ` ${url}/terms`;
}

const handlepri = ()=>{
    window.location.href = ` ${url}/privacy`;
}

const handleabout = ()=>{
    window.location.href =`${url}/about-us`;
}

  return (
    <header className="backdrop-filter backdrop-blur-2xl uk-sticky uk-sticky-fixed uk-active bg-white text-black" uk-sticky="cls-inactive: is-transparent border-b">
    <div className="header_inner">
        <div className="left-side">


            <div id="logo" onClick={handleIcon}>
                <a >
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt=""/>
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" className="logo_inverse" alt=""/>
                    <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" className="logo_mobile" alt=""/>
                </a>
            </div>


            <div className="triger" uk-toggle="target: .header_menu ; cls: is-visible">
              <GiHamburgerMenu/>
            </div>


            <nav className="header_menu">
                <ul>
                    <li className='cursor-pointer'>
                        <a className='cursor-pointer'  onClick={(e)=>handleStudy(e)}>Study Abroad</a>
                    </li>

                   <li className='cursor-pointer'> <a className='cursor-pointer' onClick={handleLgca}> TMC Courses</a></li>
                    <li className='cursor-pointer flex flex-row items-center'> <a className='cursor-pointer flex flex-row items-center' onClick={handleLG}> LGCA <FiExternalLink className='hidden sm:hidden md:text-black md:block md:text-sm lg:text-black lg:block  lg:text-sm' onClick={handleLG}/> </a> </li>
                <li className='cursor-pointer'> <a className='cursor-pointer' onClick={handleOthm}> OTHM  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handleabout} > About us  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handleterms} > Terms  </a></li>
                <li className='cursor-pointer block sm:block md:hidden lg:hidden'> <a className='cursor-pointer block sm:block md:hidden lg:hidden' onClick={handlepri} > Privacy  </a></li>


                </ul>
            </nav>

            <div className="overly" uk-toggle="target: .header_menu ; cls: is-visible"></div>

        </div>
        <div className="right-side">


        {username? <a  className="header_widgets cursor-pointer">
                <AiOutlineShoppingCart/>
            <span> {Cart.length} </span>
            </a>:''}

            {Cart.length > 0?username?
                        <div uk-drop="mode: click" className="dropdown_cart">
                        <div className="cart-headline cursor-pointer"> My Cart
                            <a  className="checkout cursor-pointer" onClick={(e)=>handleLink(e)}>Checkout</a>
                        </div>
                        <ul className="dropdown_cart_scrollbar   overflow-x-scroll items-center" >
                           {Cart.map((item, index)=>{
                            // console.log(item)
                             return <li key={index}>
                                 <div className="cart_avatar">
                                     <img src={item.picture} alt=""/>
                                 </div>
                                 <div className="cart_text  text-sm">
                                     <h4>{item.coursename} </h4>
                                 </div>
                                 <div className="cart_price">
                                     <div className='text-xs font-semibold'><CurrencyFormat value={moneyTalks(item.converted, item.price, item.coursetype, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>
                                     <a href="#"  className="type bg-white cursor-pointer" onClick={()=>handleClick(item.id)}> Remove</a>
                                 </div>
                             </li>
                           })}


                        </ul>

                        <div className="cart_footer">
                            <p> Subtotal :<CurrencyFormat value={addedall()} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                            </p>
                            <h1> Total:<strong><CurrencyFormat value={gettotal()} displayType={'text'} thousandSeparator={true} prefix={symbol} /></strong> </h1>
                        </div>
                    </div>



           :"":""}





            <a href="#">
                <img src={username?additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" />
            </a>
            {username?     <div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                <ul>
                    <li className="list-none">
                        <a href="#" className="user">
                            <div className="user_avatar">
                                <img src={additionalpic?additionalpic:userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} alt="image"/>
                            </div>
                            <div className="user_name">
                                <div>{username} </div>
                                <span> {usersemail} </span>
                            </div>
                        </a>
                    </li>
                    <li className="list-none">
                        <a className="capitalize cursor-pointer" onClick={handleAcc}>
                             My Account
                        </a>
                    </li>
                    <li className="list-none">
                        <a  className="capitalize cursor-pointer" onClick={handleMycourse}>
                        My Courses
                        </a>
                    </li>
                    <li className="list-none  cursor-pointer">
                        <a onClick={handleLogout}>
                            Log Out
                        </a>
                    </li>
                </ul>
            </div>:<div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                    <ul>
                    <li className="list-none cursor-pointer">
                        <a data-name='signup' onClick={(e)=>handleLinks(e)}>
                        <FaUserAlt/> Individual
                        </a>
                    </li>
                    <li className="list-none cursor-pointer">
                        <a data-name='companyregister' onClick={(e)=>handleLinks(e)}>
                       <BsBuilding/> Corporate
                        </a>
                    </li>
                    </ul>
                 </div>

                 }
        </div>
    </div>
</header>

  )
}

