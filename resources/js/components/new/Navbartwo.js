import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import axios from 'axios';
export default function Navbar() {
    let url = window.location.origin;


//  let symbol = currencysymbol.currency.symbol

//      let converted = JSON.parse(currencyex)
//          let convertnaira = converted.result.NGN
//          let moneyname = currencysymbol.currency.name
//          let other =  Object.values(othersmoneys.result);
//          let poundtonaira = poundton.result.NGN

//      const onedollar = 615






// const handleHome =()=>{
//    window.location.href = `${url}`;
// }





 const handleLogout =()=>{
 window.location.href = `${url}/Logout`;
 }





   const handleIcon =()=>{
    if(username){
        window.location.href = `${url}/newdashboard`;
    }else{
        window.location.href = `${url}`
    }
   }



   const handleLinks = (e)=>{
    let word = e.target.dataset.name;
        window.location.href = `${url}/${word}`;
          }

          const handlePage =(e)=>{
            let word = e.target.dataset.info;
            window.location.href = `${url}/${word}`;
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
                    </li>
                </ul>
            </nav>

            <div className="overly" uk-toggle="target: .header_menu ; cls: is-visible"></div>

        </div>
        <div className="right-side">
            <a href="#">
                <img src={username?userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png':'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} className="header_widgets_avatar" alt="image" />
            </a>
            {username?<div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">
                <ul>
                    <li className="list-none">
                        <a href="#" className="user">
                            <div className="user_avatar">
                                <img src={userpic?userpic:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png'} alt="image"/>
                            </div>
                            <div className="user_name">
                                <div>{username} </div>
                                <span> {usersemail} </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={(e)=>handlePage(e)} data-info='Admin'>
                          DashBoard
                        </a>
                    </li>
                    <li>
                        <a onClick={(e)=>handlePage(e)} data-info='adminrate'>
                          Exchange rate
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
                        <FaUserAlt/> user
                        </a>
                    </li>
                    <li className="list-none cursor-pointer">
                        <a data-name='companyregister' onClick={(e)=>handleLinks(e)}>
                       <BsBuilding/> company
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

