import React from 'react'
import ReactDOM from 'react-dom'

export default function Footer() {
    let url = ` ${window.location.origin}/`;
   const handleterms = ()=>{
        window.location.href = ` ${url}terms`;
    }

    const handlepri = ()=>{
        window.location.href = ` ${url}privacy`;
    }

    const handleabout = ()=>{
        window.location.href =`${url}about-us`;
    }
  return (
    <div className="lg:mt-28 mt-10 mb-7 px-12 border-t pt-7">
    <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
        <p className="capitalize font-medium"> © copyright {new Date().getFullYear()} TMC Institute</p>
        <div className="lg:flex space-x-4 text-gray-700 capitalize hidden">
            <a className="cursor-pointer" onClick={handleabout} > About us</a>
            {/* <a className="cursor-pointer" > Help</a> */}
            <a onClick={handleterms} className="cursor-pointer" > Terms</a>
            <a onClick={handlepri} className="cursor-pointer" > Privacy</a>
        </div>
    </div>
</div>
  )
}




