import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Markup } from 'interweave';
import {AiFillLock, AiFillUnlock, AiOutlineShopping} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import CurrencyFormat from 'react-currency-format';
export default function Coureselistothm() {
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(6)
    const [hover, Sethover] = useState(0)
    const [orderbystat, setorderbystat] = useState('')
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [search, setsearch] = useState('')
    const [poundsnaira, setPoundsnaira] = useState(0)
    let url = window.location.origin;
    let uniarr = Object.values(unique)
    const indexofLastPost = currentPage * postPerPage
    const indexofFirstPost = indexofLastPost - postPerPage

       const Post = uniarr?.slice(indexofFirstPost, indexofLastPost).reverse()


       let num = [];
       for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
         num.push(i);

       }
       let numberofpages = num.length;
       const handlemouse =(num, word)=>{

        setorderbystat(word)
        Sethover(num)
        let formData = new FormData();
        formData.append('categories', word)
        formData.append('page', 1)
        let urltwo = `${url}/categoriesothm`;
        axios.post(urltwo, formData).then(res=>{
           if(res.data){
            Setdata(res.data.data)
            Setlast(res.data.last_page)
           }
          })
       }
       const handlePag =(data)=>{
        let Answer = data.selected + 1;
        setCurrentPage(Answer)
       }

       const handleCart = (coursename, obj)=>{
        let cart = data.find((item)=>item.coursename == coursename)
         let Awnser =  Cart.map(item=>item.coursename != coursename)
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

     const apiClient = axios.create({
        baseURL: `${url}/`,
        withCredentials: true
      });

     const getBtnText =(coursename)=>{
        let cart = Cart.find((item)=>item.coursename == coursename);
        if(cart){
          return 'text-2xl text-green-400'
        }else{
            return 'text-2xl text-[#A32926]'
        }
    }
    // currency->name

    let poundtonaira = poundton.result.NGN



    let symbol = currencysymbol.currency.symbol
    let moneyname = currencysymbol.currency.name
    let converted = JSON.parse(currencyex)
    let convertnaira = converted.result.NGN
     let other =  Object.values(othersmoneys.result);

    // let poundton =  poundton.result.NGN
    // function moneyTalks(currency_name, price){
    //     // console.log(currency_name, price, moneyname, convertnaira)
    // }

    function moneyTalks(currency_name, price){

        // console.log(currency_name)
        // console.log(currencyex, currencysymbol)
        if(currency_name == moneyname){
                   return price;

        }else if (moneyname == 'Nigerian Naira'){
            return Math.round(price * poundsnaira);
        }else if(currency_name != moneyname){
            return Math.round(price * other[0]) ;


        }
       }

       const handleAlphabetical = (e)=>{
        let letter = e.target.dataset.name
        setorderbystat(letter)
       let Answer = 1;
       // alphabet
       let formData = new FormData();
       formData.append('letter', letter)
       formData.append('page', Answer)
       let urltwo = `${url}/alphabetothm`;
       axios.post(urltwo, formData).then(res=>{
          if(res.data){
           Setdata(res.data.data)
           Setlast(res.data.last_page)
          }
         })
      }

      const handleNext = (data)=>{
        if( orderbystat =='a,b,c,d,e,f' || orderbystat == 'g,h,i,j,k,l' || orderbystat == 'm,n,o,p,q,r' || orderbystat == 's,t,u,v,w,x' || orderbystat == 'y,z'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('letter', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/alphabetothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else if(orderbystat == 'Level 7' || orderbystat == 'Level 6' || orderbystat == 'Level 5' || orderbystat == 'Level 4'){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('categories', orderbystat)
            formData.append('page', Answer)
            let urltwo = `${url}/categoriesothm`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }else{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/othmcheck`;
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
        let urltwo = `${url}/arrangmentothm`;
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
                let urltwo = `${url}/searchcourseothm`;
                axios.post(urltwo, formData).then(res=>{
                    console.log(res)
                   if(res.data){
                    Setdata(res.data)

                   }
                  })
            }

           }
           const handleLink = (id)=>{
            let formData = new FormData();
            let myHeader = new Headers();
            myHeader.append('Content-Type', 'application/json')
            formData.append("id", id)
            apiClient.get('/sanctum/csrf-cookie').then( ()=> {
                let urltwo = 'api/encrypt';
                   apiClient.post(urltwo, formData, myHeader).then(res=>{
                     if(res.data){
                     window.location.href =`${url}/courseinfo/OTHM/${res.data}`;

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

//  let dataa = localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[]
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
    const interval =  setInterval(()=>{
     var storage = !!localStorage.getItem('Cart')
     if(storage == true){
      let cart =   JSON.parse(localStorage.getItem('Cart'));
      SetCart(cart)

     }

    },1000)
    return () => clearInterval(interval);
 },[])
    const [read, Setread] = useState(false)
   const handleRead =()=>{
    Setread(true)
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
<div className="flex flex-col">
<section className='w-full'>
    <span className=' w-1/3 float-right font-extrabold   capitalize text-[#A32926]  cursor-pointer relative' onClick={handleRead}>
    <span className="animate-ping absolute inline-flex h-8 w-8 text-sm sm:text-base md:text-lg lg:text-2xl rounded-full bg-sky-400 opacity-75 border"></span>
        more about OTHM</span>
</section>

{/* <!-- title --> */}
<div className="mb-2">

    <div className="text-xl font-semibold"> OTHM Courses  </div>


    {/* <div className="text-sm mt-2">  Choose from 130,000 online video courses with new additions published every month </div> */}
</div>

<section className="w-full flex flex-row items-center justify-center  space-x-1">
    <span className='w-10/12 md:w-1/2 lg:w-2/5'>
        <input type="text" className="w-full  rounded-sm border"    onChange={(e)=>setsearch(e.target.value)} value={search}/>
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
    <ul className=" space-x-2">
        {Post.map((item, index)=>{
          return<li className={hover == index?"active tip":"tip"} key={index} onMouseLeave={()=>handleLeave()} onMouseOver={()=>handleOver(index)} onClick={()=>handlemouse(index, item)}>
              <a className="lg:px-2 tip">{item.substr(0, 12)}</a>
              <span className={overon == index?"top-[-18px] absolute w-100 text-sm bg-[#A32926]  text-white":'hidden'} >{item.substr(0, 30)}</span>
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
    // console.log(item.purchased)
    return <a  className="uk-link-reset" key={index}>
    <div className="card uk-transition-toggle">
        <div className="card-media h-40" onClick={()=>handleLink(item.id)}>
            <div className="card-media-overly"></div>
            <img src={item.picture} alt="" className=""/>
            <span className="icon-play"></span>
     {item.purchased?<div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
         purchased</div>:""}
        </div>
        <div className="card-body p-4">
            <div className="font-semibold line-clamp-2 cursor-pointer" onClick={()=>handleLink(item.id)}>{item.coursename}
            </div>
            {/* { item.purchased?'': */}

            { item.purchased?'':username?<div className="flex space-x-2 items-center text-sm pt-3">
                               <div className="flex flex-row items-center" onClick={()=>handleCart(item.coursename,  item)}>    {getBtnText(item.coursename) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                                         <AiOutlineShopping  className={getBtnText(item.coursename)} /> </div>
                            <div>·</div>
                            <div> {item.lesson} lectures </div>
                        </div>:""}


            <div className="pt-1 flex items-center justify-between">
            <div className='text-lg font-semibold'><CurrencyFormat value={moneyTalks(item.currency_name, item.price)} displayType={'text'} thousandSeparator={true} prefix={symbol} /></div>
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



      <article className={read?"bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 flex flex-row justify-center overflow-y-scroll py-4":'hidden z-0'}>

        <section className=" w-10/12 m-auto bg-white   rounded-md sm:w-3/4 sm:m-auto sm:bg-white  sm:rounded-md   md:w-1/2 md:m-auto md:bg-white   md:rounded-md lg:w-1/2 lg:m-auto lg:bg-white   lg:rounded-md ">
         <section className='w-full py-2'>
            <span className=' w-20 float-right flex flex-row items-center justify-center'>
                <a className='w-6 h-6 grid place-content-center  rounded-full bg-[#0A033C] text-white cursor-pointer' onClick={()=>Setread(false)}>x</a>
            </span>
         </section>
          <div className="w-full flex flex-col overflow-y-scroll h-96">
            <span className="capitalize text-xl text-center py-2 border-b text-[#A32926]">OTHM, UK</span>
            <span className="text-left px-2 py-2 text-base ">
            We are a UK-based Awarding Organisation regulated by Ofqual (Office of the Qualifications and
Examinations Regulation). We have a network of numerous delivery centres globally to deliver
our qualifications in various courses like Accounting and Finance, Business Management,
Education and Training, Health and Social Care Management (etc)
OTHM is approved and regulated by Ofqual (Office of the Qualifications and Examinations
Regulation).   The   Register   of   Regulated   Qualifications   Framework   can   be   found   at
<a href="https://register.ofqual.gov.uk"> https://register.ofqual.gov.uk</a>. OTHM is also a  full member of FAB
OTHM has established strong academic relationships in the UK and overseas to ensure that
OTHM qualifications are recognised globally.
The local and international recognition has enabled OTHM graduates to enhance their
employability skills as well as allowing them to join degree and/or Master top-up programmes.
            </span>
          </div>

        </section>

      </article>



    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
