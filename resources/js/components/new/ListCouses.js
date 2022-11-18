import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';
export default function ListCouses() {
    let url = window.location.origin;
    let uniarr = Object.values(unique)

    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [orderbystat, setorderbystat] = useState('')
    const [categories, setcategories] = useState('')
    const [search, setsearch] = useState('')
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage
       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)

       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
    //    console.log(Post)

    const handlemouse =(num, word)=>{
     setorderbystat(word)
      Sethover(num)
      let formData = new FormData();
      formData.append('categories', word)
      formData.append('page', 1)
      let urltwo = `${url}/categories`;
      axios.post(urltwo, formData).then(res=>{
         if(res.data){
          Setdata(res.data.data)
          Setlast(res.data.last_page)
         }
        })
    }

    const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });


    const handleNext = (data)=>{
        if(orderbystat == ''){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/coursesdata`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'ASC' || orderbystat == 'DESC'){
            let Answer = data.selected + 1;
           let formData = new FormData();
           formData.append('orderby', orderbystat)
           formData.append('page', Answer)
           let urltwo = `${url}/arrangment`;
           axios.post(urltwo, formData).then(res=>{
              if(res.data){
               Setdata(res.data.data)
               Setlast(res.data.last_page)
              }
             })
        }else if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabet`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categories`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }

       }

       const handleArrange =(e)=>{
    setorderbystat(e.target.dataset.name)
    let formData = new FormData();
    formData.append('orderby', e.target.dataset.name)
    formData.append('page', 1)
    let urltwo = `${url}/arrangment`;
    axios.post(urltwo, formData).then(res=>{
       if(res.data){
        Setdata(res.data.data)
        Setlast(res.data.last_page)
       }
      })
       }

       const handleSearch=(e)=>{
        e.preventDefault();
        if(search.length > 0){
            let formData = new FormData();
            formData.append('items', search)
            let urltwo = `${url}/searchcourse`;
            axios.post(urltwo, formData).then(res=>{
                console.log(res)
               if(res.data){
                Setdata(res.data)

               }
              })
        }

       }

       const handleCart = (id)=>{
        let cart = data.find((item)=>item.id == id)
         let Awnser =  Cart.map(item=>item.id != id)
         let ans =   Awnser.includes(false)
       if(ans == false){
         SetCart([
             ...Cart,
             cart
         ])
         let AddCart = [...Cart, cart]
         localStorage.setItem('Cart', JSON.stringify(AddCart))
           let stringdata =  JSON.stringify(AddCart)
         let formData = new FormData();
         formData.append("cartitems", stringdata)
           let urltwo = `${url}/addcart`;
           axios.post(urltwo, formData).then(res=>{

             })
       }

     }

     const getBtnText =(id)=>{
        let cart = Cart.find((item)=>item.id == id);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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



   const handlePag =(data)=>{
    let Answer = data.selected + 1;
    setCurrentPage(Answer)
   }

   const handleAlphabetical = (e)=>{
     let letter = e.target.dataset.name
     setorderbystat(letter)
    let Answer = 1;
    // alphabet
    let formData = new FormData();
    formData.append('letter', letter)
    formData.append('page', Answer)
    let urltwo = `${url}/alphabet`;
    axios.post(urltwo, formData).then(res=>{
       if(res.data){
        Setdata(res.data.data)
        Setlast(res.data.last_page)
       }
      })
   }

   let symbol = currencysymbol.currency.symbol
   let moneyname = currencysymbol.currency.name
   let converted = JSON.parse(currencyex)
   let convertnaira = converted.result.NGN

  function moneyTalks(converted, price){
   if(converted){
    if(moneyname != 'NGN'){
        return Math.round(price / convertnaira) ;
    }else{
        return Math.round(price);
    }
   }
   else{
    if(moneyname != 'NGN'){
        return Math.round(price / convertnaira) ;
    }else{
        return Math.round(price) ;

    }

   }
  }

  const handleLink =(word, id)=>{
    let formData = new FormData();
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json')
    formData.append("id", id)
    apiClient.get('/sanctum/csrf-cookie').then( ()=> {
        let urltwo = 'api/encrypt';
           apiClient.post(urltwo, formData, myHeader).then(res=>{
             if(res.data){
                window.location.href =`${url}/courseinfo/${word}/${res.data}`;
             }
            })
        })

 }
const [overon, setoveron] = useState(1000)
 const handleOver = (index)=>{
    setoveron(index)
 }

 const handleLeave = ()=>{
    setoveron(1000)
 }

  return (
    <div id="wrapper" className="horizontal">
      <Navbar/>
      <div className="container">
      {/* <!-- Spacer --> */}
            <div className="page-spacer"></div>
                  {/* <!-- Spacer --> */}
                  <div className="lg:flex lg:space-x-10">
                  <div className="lg:w-3/12 space-y-4 lg:block hidden">

{/* <div>
    <h4 className="font-semibold text-base mb-2"> Categories </h4>
    <select className="selectpicker default shadow-sm rounded" data-selected-text-format="count" data-size="7"
        title="All Categories">
        <option> Web Development </option>
        <option> Mobile App </option>
        <option> Business </option>
        <option> IT Software </option>
        <option> Desings </option>
        <option> Marketing </option>
        <option> Life Style </option>
        <option> Photography </option>
        <option> Health Fitness </option>
        <option> Ecommerce </option>
        <option> Food cooking </option>
        <option> Teaching academy </option>
    </select>
</div> */}

<div>
    <div className="font-semibold text-base mb-2 text-left">Order By</div>
    <form className="space-y-1">
        <div className="radio">
            <input id="radio-1"  name="steve" data-name="ASC" onChange={(e)=>handleArrange(e)} type="radio" />
            <label for="radio-1"><span className="radio-label"></span> ASC
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-2" name="steve" data-name="DESC" onChange={(e)=>handleArrange(e)}  type="radio"/>
            <label for="radio-2"><span className="radio-label"></span> DESC
            </label>
        </div>
        <br/>
    </form>
</div>

<div>
    <div className="font-semibold text-base mb-2 text-left">Group Order</div>
    <form className="space-y-1">
        <div className="radio">
            <input id="radio-3"  name="alpha" data-name="a,b,c,d,e,f" onChange={(e)=>handleAlphabetical(e)} type="radio" />
            <label for="radio-3"><span className="radio-label"></span> A-F
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-4" name="alpha" data-name="g,h,i,j,k,l" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-4"><span className="radio-label"></span> G-L
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-5" name="alpha" data-name="m,n,o,p,q,r" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-5"><span className="radio-label"></span> M-R
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-6" name="alpha" data-name="s,t,u,v,w,x" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-6"><span className="radio-label"></span> S-X
            </label>
        </div>
        <br/>
        <div className="radio">
            <input id="radio-7" name="alpha" data-name="y,z" onChange={(e)=>handleAlphabetical(e)}  type="radio"/>
            <label for="radio-7"><span className="radio-label"></span> Y-Z
            </label>
        </div>
    </form>
</div>

<div>



</div>




</div>
<div className="w-full md:space-y-10 space-y-5">
<div>

{/* <!-- title --> */}
<div className="mb-2">

    <div className="text-xl font-semibold">  TMC Institute Courses  </div>


    {/* <div className="text-sm mt-2">  Choose from 130,000 online video courses with new additions published every month </div> */}
</div>

<section className="w-full flex flex-row items-center justify-center  space-x-1">
    <span className='w-10/12 md:w-1/2 lg:w-2/5'>
        <input type="text" className="w-full  rounded-sm border"   onChange={(e)=>setsearch(e.target.value)}  value={search} />
        </span><span className='md:w-1/6 lg:w-1/12'>
            <button className="py-2 grid place-content-center outline-none border-none bg-blue-500 text-white rounded-r-lg"  onClick={(e)=>handleSearch(e)}>search</button>
        </span>
</section>
<div className="w-full">
            <span className="w-1/5 float-right">
            <ReactPaginate
          style={{ margin:"3px" }}
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={numberofpages}
                   // breakLabel={"..."}
                    //marginPagesDisplayed={2}
                  //  pageRangeDisplayed={1}
                    onPageChange={handlePag}
                    containerClassName={'inline-flex items-center justify-center m-auto space-x-3'}
                    pageClassName={'m-2 hidden'}
                    pageLinkClassName={'py-1 px-1 text-md text-center rounded-lg bg-[#A32926] text-white hidden'}
                    previousClassName={'py-1 px-1 text-md text-center rounded-l-lg bg-[#A32926] text-white text-lg h-8 w-8 grid place-content-center'}
                    nextClassName={'py-1 px-1 text-md text-center rounded-r-lg bg-[#A32926] text-white text-lg  h-8 w-8 grid place-content-center'}
                  />
            </span>
        </div>
{/* <!-- nav --> */}
<nav className="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
    <ul className="space-x-1 overflow-x-scroll sm:overflow-x-scroll sm:space-x-1 md:overflow-x-scroll md:space-x-1 lg:overflow-x-hidden lg:space-x-2">
        {Post.map((item, index)=>{
          return<li className={hover == index?"active tip relative":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
              <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
               <span className={overon == index?"top-[-45px] h-32 absolute text-white text-xs bg-[#A32926]  grid place-content-center   sm:top-[-45px] sm:h-32 sm:absolute sm:text-xs sm:bg-[#A32926]  sm:grid sm:place-content-center  sm:text-white sm:z-30    md:grid md:place-content-center md:top-[-45px]  md:absolute md:text-xs md:bg-[#A32926]  md:text-white md:z-30  lg:mt-[-10px]  lg:grid lg:place-content-center lg:top-[-25px] lg:absolute lg:text-xs lg:bg-[#A32926]  lg:text-white lg:z-30":'hidden'} >{item.substr(0, 30)}</span>
          </li>
        })}
        {/* <li className="active"><a href="#" className="lg:px-2">   Python </a></li> */}

    </ul>
</nav>



</div>


<div>



</div>

<div>



{/* <!-- course list --> */}
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
{data.map((item, index)=>{
    return <a  className="uk-link-reset" key={index}>
    <div className="card uk-transition-toggle">
        <div className="card-media h-40" onClick={()=>handleLink('TMC', item.id)}>
            <div className="card-media-overly"></div>
            <img src={item.picture} alt="" className=""/>
            <span className="icon-play"></span>
         {item.purchased?<div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
         purchased</div>:""}
        </div>
        <div className="card-body p-4">
            <div className="font-semibold line-clamp-2 cursor-pointer" onClick={()=>handleLink('TMC', item.id)}>{item.coursename}
            </div>
            { item.purchased?'':username?
                                     <div className="flex space-x-2 items-center text-sm pt-3">
                               <div className="flex flex-row items-center" onClick={()=>handleCart(item.id)}>    {getBtnText(item.id) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                         <AiOutlineShopping  className={getBtnText(item.id)} /> </div>
                            <div>·</div>
                            <div> {item.lesson} lectures </div>
                        </div>:""
                        }

            <div className="pt-1 flex items-center justify-between">
                {/* <div className="text-sm font-semibold"> Jesse Stevens  </div> */}
                {/* <div className="text-lg font-semibold"><Naira>{item.price}</Naira></div> */}
                  <div className='text-lg font-semibold'> <CurrencyFormat value={moneyTalks(item.converted, item.price, item.currency_name)} displayType={'text'} thousandSeparator={true} prefix={symbol} /> </div>
            </div>
        </div>
    </div>
</a>

})}






</div>

{/* <!-- Pagination --> */}
<div className="flex justify-center mt-9 space-x-2 text-base font-semibold text-gray-400 items-center">

<ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={last}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center m-auto '}
                    pageClassName={'m-2'}
                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-white text-[#A32926]'}
                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                    nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-white text-[#A32926]'}
                  />
</div>

</div>

</div>

                  </div>

      </div>
        </div>
  )
}


if(document.getElementById('listcourses')){
ReactDOM.render(<ListCouses/>,document.getElementById('listcourses'));
}
