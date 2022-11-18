import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbartwo';
import ReactPaginate from 'react-paginate';
export default function AdminDashboard() {
   const [data, setdata] = useState([])
   const [last, Setlast] = useState(0)
   const [selected, Setselected] = useState('UnApproved')
   const [status, Setstatus] = useState('')
   let url = `${window.location.origin}/`;

useEffect(()=>{
    Setlast(dataunApproved.last_page)
    setdata(dataunApproved.data)
},[])


//   console.log(dataApproved.data)

    const handleApproved=(e)=>{
      let word = e.target.dataset.name
      console.log(word)
      if(word == 'UnApproved'){
        Setselected('UnApproved')
        setstatement(false)
        Setlast(dataunApproved.last_page)
        setdata(dataunApproved.data)
      }else if(word == 'Approved'){
        setstatement(true)
        Setselected('Approved')
        Setlast(dataApproved.last_page)
        setdata(dataApproved.data)
      }

    }
    const [statement, setstatement] = useState(false)
//
    const handleNext =(data)=>{
        if(selected == 'UnApproved'){

            let Answer = data.selected + 1;
            let urltwo = `${url}unApproved`
            formData.append("page", Answer)
            axios.post(urltwo, formData).then(res=>{
              if(res.data.success){
                let dataone = res.data.success
                Setlast(dataone.last_page)
                setdata(dataone.data)

              }
          })
        }else if(selected == 'Approved'){

            let Answer = data.selected + 1;
            let urltwo = `${url}Approved`
            let formData = new FormData();
            formData.append("page", Answer)
            axios.post(urltwo, formData).then(res=>{
              if(res.data.success){
                let dataone = res.data.success
                Setlast(dataone.last_page)
                setdata(dataone.data)
              }
          })
        }
    }


    const handleClick = (e, unique_code)=>{
        // Setstatus('please wait...')
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
          "code":unique_code,
          '_token':token,
          '_method':'PATCH'
        });

        var requestOptions = {
          method:'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

          let urlone = `${url}approvestatus`;
            fetch(urlone, requestOptions)
            .then(response => response.json())
            .then(result =>{
              if(result.success){
                Setstatus(result.success)
                setdata(result.data.data)
                // setTimeout(()=>{
                //  window.location.href = `${url}Admin`
                // },1000)
              }
            })
            .catch(error => console.log('error', error));
    }

  return (
    <div id="wrapper" classNameName="flex flex-col justify-between h-screen">
      <Navbar/>
      <div className="container">

<div className="page-spacer"></div>

<div className="lg:flex lg:space-x-10">

    <div className="lg:w-3/12 space-y-4 lg:block hidden">


        <div>
            <h4 className="font-semibold text-base mb-2"> List </h4>
            <form className="space-y-1">
                <div className="radio">
                    <input id="radio-1" name="steve" type="radio" data-name='UnApproved' onClick={handleApproved} />
                    <label for="radio-1" ><span className="radio-label"></span> UnApproved
                    </label>
                </div>
                <br/>
                <div className="radio">
                    <input id="radio-2" name="steve" type="radio" data-name='Approved' onClick={handleApproved}/>
                    <label for="radio-2"><span className="radio-label"></span> Approved
                    </label>
                </div>
                <br/>
            </form>
        </div>







    </div>

    <div className="w-full">

        <div className="md:flex justify-between items-center mb-8">

            <div>
                <div className="text-xl font-semibold"> {statement == true? "List of Approved Candidates Results":"List of Candidates Awaiting  Approval"} </div>
                {/* <div className="text-sm mt-2 font-medium text-gray-500 leading-6">  </div> */}
            </div>

            <div className="flex items-center justify-end">



            </div>
        </div>


        <div className="tube-card mt-3 lg:mx-0 -mx-5">


            <div className={data.length > 0?"divide-y":"divide-y flex items-center justify-center"} >
                {data.length > 0?
                data.map((item)=>{
                  return   <div className="flex md:space-x-6 space-x-3 md:p-5 p-2 relative">
                  <a href="#" className="md:w-60 md:h-36 w-28 h-20 overflow-hidden rounded-lg relative shadow-sm">
                      <img src={item.picture} alt=""  className="w-full h-full absolute inset-0 object-cover"/>                  </a>
                  <div className="flex-1 md:space-y-2 space-y-1">
                      <a  className="md:text-xl font-semibold line-clamp-2">{item.coursename}</a>
                      <p className="leading-6 pr-4 line-clamp-2 md:block"> {item.email} </p>
                      <p className="leading-6 pr-4 line-clamp-2 md:block"> {item.unique_code} </p>
                      <a href="#" className="md:font-semibold block text-sm">{item.fullname}</a>
                      <div className="flex items-center justify-between">
                          <div className="flex space-x-2 items-center text-sm">
                              <div> percentage score: {item.totalpercentage}  </div>
                          </div>
                          {item.status == 1?
                            <a className='text-green-500 text-sm' style={{color:'green'}}>Approved</a>
                          :

                          <a  className="md:flex items-center justify-center h-9 px-8 rounded-md border -mt-3.5 cursor-pointer" onClick={(e)=>handleClick(e, item.unique_code)}> Approve </a>
                          }
                      </div>
                  </div>
              </div>
                })

                :"no Data"}








            </div>

        </div>


    </div>
</div>

<section className="flex items-center justify-center mt-2">

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

</div>

        </div>
  )
}

if(document.getElementById("admindash")){
ReactDom.render(<AdminDashboard/>, document.getElementById("admindash"));
}
