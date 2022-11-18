import React,{useState} from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom'
import Footer from './Footer';
import { Markup } from 'interweave';
import ReactPaginate from 'react-paginate';
export default function Usercourse() {
   let url = window.location.origin
   const [data, Setdata] = useState(purchasedcourse.data.length > 0?purchasedcourse.data:[]);
   const [last, Setlast] = useState(purchasedcourse.last_page?purchasedcourse.last_page:0)
   const apiClient = axios.create({
    baseURL: `${url}/`,
    withCredentials: true
  });

    const handlePage = (id,course)=>{
        let formData = new FormData();
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json')
        formData.append("id", id)
        apiClient.get('/sanctum/csrf-cookie').then( ()=> {
            let urltwo = 'api/encrypt';
               apiClient.post(urltwo, formData, myHeader).then(res=>{
                 if(res.data){
                    window.location.href = `${url}/courseinfo/${course}/${res.data}`;
                 }
           })
        })
    }

    const handleNext = (data)=>{
            let Answer = data.selected + 1;
            let formData = new FormData();
            formData.append('page', Answer)
            let urltwo = `${url}/usercoursesinfo`;
            axios.post(urltwo, formData).then(res=>{
               if(res.data){
                Setdata(res.data.data)
                Setlast(res.data.last_page)
               }
              })
            }

            const handleDowncert =(course_id, course_type)=>{
                // let formData = new FormData();
                // formData.append("coursename",  fetchdata.coursename)
                // formData.append("course_id", num)
                // formData.append("course_type", sen)
                  window.location.href = `${url}/downloadresult/${course_id}/${course_type}`;
                //   axios.post(urltwo, formData).then(res=>{
                //       if(res.data.success){
                //     //    Setmessage(res.data.message);
                //     //    Setpop(true)
                //        }
                //        })
            }
  return (
    <div id="wrapper" class="horizontal">
        <Navbar/>
    <div className="container">

    <div className="text-2xl font-semibold pt-6"> Course you have Purchased  </div>
    {/* <nav className="cd-secondary-nav border-b md:mb-5 nav-small">
        <ul>
            <li className="active"><a href="#" class="lg:px-2"> Suggestions </a></li>
            <li><a href="#" className="lg:px-2"> Mobile App </a></li>
            <li><a href="#" className="lg:px-2"> JavaScript </a></li>
            <li><a href="#" className="lg:px-2"> Softwares </a></li>
            <li><a href="#" className="lg:px-2"> Drawing </a></li>
        </ul>
    </nav> */}

    <div className="lg:flex lg:space-x-6 mt-6">

        <div className="lg:w-10/12">
            <div className="divide-y tube-card px-6 md:m-0 -mx-5">
             {data.map((item, index)=>{
                return <div className="md:flex md:space-x-6 py-5" key={index}>
                <a >
                    <div className="md:w-64 w-full h-40 overflow-hidden rounded-lg relative shadow-sm">
                         <img src={item.picture} alt="" class="w-full h-full absolute inset-0 object-cover"/>
                         <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
                             {item.MainHead}
                         </div>
                    </div>
                </a>
                <div className="flex-1 md:pt-0 pt-4">

                    <a  className="text-lg font-semibold line-clamp-2 leading-8"> {item.coursename}</a>
                    <p className="line-clamp-2"> <Markup content={item.coursedetails} /> </p>

                    <div className="flex items-center pt-2 text-sm">
                        <div class="grid grid-cols-1 gap-2 place-content-center space-x-2 mx-4 sm:grid sm:grid-cols-1 sm:place-content-center sm:gap-2 sm:space-x-2 sm:mx-4   md:flex md:items-center md:space-x-2 md:mx-4   lg:flex lg:items-center lg:space-x-2 lg:mx-4">
                        <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-blue-500 text-white cursor-pointer"  onClick={()=>handlePage(item.course_id, item.course)} style={{color:'white' }}>view course  </a>
                          {item.studentresult?
                       <a  className="flex items-center justify-center h-10 px-6 rounded-md bg-[#A32926] text-white cursor-pointer"  onClick={()=>handleDowncert(item.course_id, item.course_type)} style={{color:'white' }}>Download Certificate</a>
                          :''}

                        </div>
                    </div>

                </div>
            </div>
             })}








            </div>
        </div>
        {/* here */}
        {/* <div className="lg:w-80 w-full">

            <div className="space-y-5" uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small">

                <div className="tube-card p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg -mb-0.5 font-semibold"> Recently Posted </h4>
                        </div>
                        <a href="#" className="text-blue-600"> <ion-icon name="refresh" className="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated" role="img" aria-label="refresh"></ion-icon> </a>
                    </div>
                    <ul>
                        <li>
                            <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 className="font-medium line-clamp-2">   Interesting JavaScript and CSS Libraries  you should  know </h3>
                                <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                  <div> Sep 12, 2020</div> <div className="pb-1"> . </div>
                                  <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                               </div>
                            </a>
                        </li>
                        <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">  Awesome Web Dev Tools and Resources For 2021</h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" class="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                      <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">Interesting Web development and CSS Libraries  </h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div className="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                      <li>
                          <a href="blog-read.html" className="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                              <h3 className="font-medium line-clamp-2">Awesome Web Dev Tools and Resources For 2021 </h3>
                              <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                                <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                                <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div>
                             </div>
                          </a>
                      </li>
                    </ul>
                    <a href="#" className="hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm">
                        See all
                    </a>
                </div>

                <div className="mt-6">
                    <h4 className="text-lg mb-2 font-semibold"> Tags </h4>
                    <div className="flex flex-wrap font-medium gap-2">
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> JavaScript</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Angular</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Design</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Photography</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Technology</a>
                        <a href="#" className="bg-white px-3.5 py-1.5 rounded shadow text-sm"> Music</a>
                    </div>
                </div>

            </div>

        </div> */}
   {/* here */}
    </div>

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
 <Footer/>
</div>
  )
}

if(document.getElementById('usercourses')){
    ReactDOM.render(<Usercourse/>, document.getElementById('usercourses'));
}
