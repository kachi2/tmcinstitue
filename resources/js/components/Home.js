import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar, AiOutlineShopping} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Home() {
    const [Cart, SetCart] = useState(localStorage.getItem('Cart')?JSON.parse(localStorage.getItem('Cart')):[])
    let url = `http://127.0.0.1:8000`;
    const [hover, Sethover] = useState(0)
    const [data, Setdata] = useState(coursesdata.data.length > 0?coursesdata.data:[]);
    const [last, Setlast] = useState(coursesdata.last_page?coursesdata.last_page:0)
    const [wordhead, Setword] = useState('')
    const handlemouse = (e, word)=>{
     Sethover(e.target.dataset.id)
     Setword(word)
     let page = 1;
     if(word === 'All Courses'){
       console.log(word)
      let Answer =  1;
      let formData = new FormData();
      formData.append('page', Answer)
      let urltwo = `${url}/coursesdata`;
      axios.post(urltwo, formData).then(res=>{
         if(res.data){
          Setdata(res.data.data)
          Setlast(res.data.last_page)
         }
        })

     }else{
      let formData = new FormData();
      formData.append('mainhead', word)
      formData.append('page', page)
      let urltwo = `${url}/coursecartories`;
      axios.post(urltwo, formData).then(res=>{
         if(res.data){
          Setdata(res.data.data)
          Setlast(res.data.last_page)
         }
        })
     }

    }
    const handleLeave = (e)=>{
      if(e.target){
          Sethover(0)
      }
    }
  let uniarr = Object.values(unique)
  let uni_unshift = uniarr.unshift('All Courses');
//   let uni_push = uniarr.push('More Courses');


     const [currentPage, setCurrentPage] = useState(1)
   const[postPerPage, setPostsperPage] = useState(8)

   const indexofLastPost = currentPage * postPerPage
   const indexofFirstPost = indexofLastPost - postPerPage
      const Post = uniarr?.slice(indexofFirstPost, indexofLastPost)


            let num = [];
      for (let i = 1; i <= Math.ceil(uniarr.length / postPerPage); i++) {
        num.push(i);

      }
      let numberofpages = num.length


    const handleNext = (data)=>{
        if(wordhead){
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('mainhead', wordhead)
            formData.append('page', Answer)
            let urltwo = `${url}/coursecartories`;
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
            let urltwo = `${url}/coursesdata`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
        }

       }

       const handleClick = (id)=>{
         window.location.href = `${url}/coursedetails/${id}`;
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

    const handlePag =(data)=>{
      let Answer = data.selected + 1;
      console.log(Answer)
      setCurrentPage(Answer)
    }

  return (
    <div className='flex flex-col items-center'>
      <section className='bg-white w-full '>
        <div className='w-10/12 imge m-auto h-72 rounded-md'>
            <div className='w-full px-3 py-3 flex flex-col '>
             <span className='w-1/12 flex flex-row items-center float-left mt-4'>
                 <label className='capitalize text-[#B2BEB5] border-r border-white'>
                  Home
                 </label>
                 <label className='capitalize text-[#A32926]'>
                 course
                 </label>
             </span>
             <span className='w-1/3  flex flex-col items-center float-left mt-5'>
            <label className='w-full text-[#0A033C] capitalize font-bold text-4xl'>TMC Institute Courses</label>
            <label className='w-full text-[#0A033C] capitalize font-bold text-4xl'>For All Standards</label>

             </span>
            </div>
        </div>
      </section>

      <div className='w-full bg-white py-2 '>
          <section className='w-10/12 grid grid-cols-8 gap-4 m-auto mt-2'>
           {Post.map((item, index)=>{
                 return <span className=' flex flex-row items-center m-auto tip ' key={index}>
                 <button onClick={(e)=>handlemouse(e, item)}  data-id={index} className={hover == index ?'px-2 bg-[#A32926] text-white  rounded-md w-40':'w-40 px-2 bg-white text-black  rounded-md'}>
                  {item.length > 1? item.substr(0, 12)+'...':item}
                 </button>
                 <span className="tooltiptext">{item}</span>
             </span>

           })}
          </section>
          <section className='w-1/5 m-auto mt-3 space-x-3 flex flex-row items-center justify-center'>
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
                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-lg bg-[#A32926] text-white'}
                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-[#A32926] text-white text-lg'}
                    nextClassName={'py-2 px-3 text-md text-center rounded-r-lg bg-[#A32926] text-white text-lg'}
                  />
          </section>
      </div>

      <div className='w-3/4 m-auto flex flex-col mt-2'>
       <section className='w-full'>
           <span className='w-1/4 capitalize float-left text-2xl'>
           {wordhead?wordhead:"Standard Courses"}
        </span>
       </section>
       <div className='w-full grid grid-cols-2 gap-4 place-content-center'>



{data.map((item, index)=>{
       return<section className='w-96 bg-white rounded-md' key={index} >
             <article className='w-full h-[15rem]' onClick={()=>handleClick(item.id)}>
                 <img src={item.picture} className="h-full w-full"/>
             </article>
             <div className='w-full flex flex-col px-3 py-3'>
                <span className='text-left capitalize font-bold text-[#0A033C] w-2/3 text-lg'  onClick={()=>handleClick(item.id)}>
                   {item.coursename}
                </span>
                <span className='font-thin capitalize text-left text-[#5D5A6F] text-xs w-2/3 mt-2'  onClick={()=>handleClick(item.id)}>
                {item.MainHead}
                </span>
                <span className='w-1/2 flex flex-row space-x-1 mt-2'  onClick={()=>handleClick(item.id)}>
                {starcont(item.rating)}
                </span>
                <div className='w-full flex flex-row items-center justify-between mt-2'>
                    <span className='w-24 text-2xl text-[#A32926] flex flex-row items-center'  onClick={()=>handleClick(item.id)}>
                   <h2> &#8358;</h2> <h2>{item.price}</h2>
                    </span>

                    {item.purchased?
                     <span className='w-24 capitalize text-sm text-green-400'>
                        purchased
                      </span>
                     :<span className='w-32 flex flex-row items-center justify-center ' onClick={()=>handleCart(item.id)}>
                    {getBtnText(item.id) == 'text-2xl text-green-400' ? <h2 className='text-sm capitalize'>In Cart</h2>:<h2 className='text-sm capitalize'>Add to Cart</h2> }
                        <AiOutlineShopping  className={getBtnText(item.id)} />
                        {/* <span className="tooltiptext ">Add to Cart</span> */}
                    </span>}
                </div>
             </div>
           </section>

})}


       </div>
       <article className='w-full flex flex-row items-center py-2'>
         <section className='w-3/4 m-auto   flex flex-row items-center justify-center mt-2'>
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
         </section>
       </article>
      </div>
      <div className='w-3/4 m-auto flex flex-col mt-2'>
        <article className="w-full text-2xl text-left text-[#0A033C] font-bold">
        Other Courses by TMC Institute
        </article>
      <article className='w-full flex flex-row items-center justify-between'>
       <div className='w-1/2 bg-white rounded-lg flex flex-row items-center px-1 '>
           <label className='w-10/12'>
                 <input type="text" className="w-full py-2" placeholder='search Class, Course'/>
           </label>
           <label className='w-1/5'>
             <button className='bg-[#A32926] text-white rounded-md w-full py-2'>
                 search
             </button>
           </label>
       </div>
       <div className='w-1/5 flex flex-row items-center bg-white rounded-sm px-2'>
        <span className='w-28 text-lg capitalize'>
            Sort by
            </span>
            <span className="w-2/5">
                <select className='w-full capitalize text-md py-2'>
                   <option>lastest</option>
                </select>
            </span>
       </div>
     </article>
     <section className="w-full grid grid-cols-2 gap-4  mt-4">
      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='w-3/4 flex flex-col items-center px-2'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>

      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='w-3/4 flex flex-col items-center px-2'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>


      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='px-2 w-3/4 flex flex-col items-center'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>


      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='px-2 w-3/4 flex flex-col items-center'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>

      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='px-2 w-3/4 flex flex-col items-center'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>


      <span className=' flex flex-row items-center bg-white rounded-md px-1 py-1'>
          <div className='w-1/3'>
          <img src={rectangle} className="w-full h-full"/>
          </div>
          <div className='px-2 w-3/4 flex flex-col items-center'>
            <span className='w-full text-[#0A033C] text-lg text-left px-2'>The Three Musketeers</span>
            <section className='w-full'>
            <span className="w-1/2 flex flex-row space-x-1 mt-2  float-left">
              <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
                  <label className='w-8'>
                      <AiFillStar className='w-full text-[#FFC107] text-2xl'/>
                  </label>
            </span>
            </section>
            <div className='w-full flex flex-row items-center justify-between px-2'>
              <span className='w-32 flex flex-row items-center text-[#A32926] text-lg'>
                $40.00
              </span>
              <span className='w-32  flex flex-row items-center'>
              <AiOutlineShopping className='text-lg text-[#A32926]'/>
              </span>
            </div>
          </div>
      </span>
     </section>
<article className='w-full flex flex-row items-center py-4'>
    <div className='w-1/2 m-auto mt-4'>
<ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                    pageCount={10}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center m-auto '}
                    pageClassName={'m-2'}
                    pageLinkClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                    previousClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                    nextClassName={'py-2 px-3 text-md text-center rounded-l-lg bg-white text-[#A32926]'}
                  />
            </div>
</article>
      </div>

        </div>
  )
}



export default Home;
if (document.getElementById('dash')) {
    ReactDOM.render(<Home/>, document.getElementById('dash'));
}


