import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './Navbartwo';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import axios from 'axios';
export default function Adminrate() {
let url = window.location.origin;
const [data, setData] = useState([]);
const [source, setSource] = useState([{
    id:0,
    currencyname:"",
    foreignrate:"",
    nairarate:""
}]);
const [Edit, setEdit] = useState(false);

useEffect(()=>{
    let urlthree = `${url}/allcurrency`;
    axios.get(urlthree).then(res=>{
        if(res.data){
            let info = res.data
            setData(info)
        }
    })
},[])

const handleExperience = (e, index)=>{
if(!Edit){
    let counta = data.length
    let count = data[data.length-1]
    let answer = counta == 0?counta:count.id + 1
    // console.log(answer)
   let  value = [...source]
    value[index].id = answer;
    value[index][e.target.name] = e.target.value
    setSource(value)
}else{
    let  value = [...source]
    value[index].id = source[0].id
    value[index][e.target.name] = e.target.value
    setSource(value)

}

}


const handleClick = ()=>{
    let check = source.map((item)=>item.currencyname == '' || item.foreignrate == '' || item.nairarate == '')
     let founded = check.includes(true);
     if(founded === true){
     console.log('please fill all fields thank you')
     }else{
       let checksame = data.map((item)=>item.currencyname == source[0].currencyname || item.nairarate == source[0].nairarate)
      let checkfound =  checksame.includes(true)
      if(checkfound  == true){
    console.log('you can not enter the same input that already exist')
      }else{

        // setData([...data, { id:source[0].id, currencyname:source[0].currencyname,
        // foreignrate:source[0].foreignrate,
        // nairarate:source[0].nairarate}])
        // currencyaddrate
        let formData = new FormData();
        formData.append("currencyname", source[0].currencyname)
        formData.append("foreignrate", source[0].foreignrate)
        formData.append("nairarate", source[0].nairarate)
        formData.append("_token", token)
        let urltwo = `${url}/currencyaddrate`;
        axios.post(urltwo, formData).then(res=>{
            console.log(res.data)
            if(res.data){
                setData(res.data)

                setSource([{
                    id:0,
                    currencyname:"",
                    foreignrate:"",
                    nairarate:""
                }])
            }
        })


      }





     }
}


const handelEdit = (id)=>{
setEdit(true)
let answer =  data.filter((item)=>item.id === id)
  setSource(answer)
}

const handleAddEdit =()=>{
    let check = source.map((item)=>item.currencyname == '' || item.foreignrate == '' || item.nairarate == '')
     let founded = check.includes(true);
     if(founded === true){
     console.log('please fill all fields thank you')
     }else{
        if(Edit){
         let answer =   data.map((item)=>{
                return item.id  === source[0].id?{...item,  currencyname:source[0].currencyname,
                        foreignrate:source[0].foreignrate,
                        nairarate:source[0].nairarate }:item
            })

                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                    'id':source[0].id,
                    "currencyname":source[0].currencyname,
                    "foreignrate":source[0].foreignrate,
                    "nairarate":source[0].nairarate,
                    "_token":token,
                  '_method':'PATCH'
                });

                var requestOptions = {
                  method:'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
                };

                  let urlone = `${url}/editcurrency`;
                    fetch(urlone, requestOptions)
                    .then(response => response.json())
                    .then(result =>{
                      if(result){
                        console.log(result)
                        setData(result)

                        setSource([{
                            id:0,
                            currencyname:"",
                            foreignrate:"",
                            nairarate:""
                        }])
                        setEdit(false)

                      }
                    })
                    .catch(error => console.log('error', error));





        }

     }
}

const handleDelete =(id)=>{
    let answer =  data.filter((item)=>item.id !== id)
    let formData = new FormData();
formData.append("id", id)
formData.append("_token", token)
let urltwo = `${url}/deletecurency`;
axios.post(urltwo, formData).then(res=>{
    if(res.data){
        setData(res.data)
    }
})
}

    return (
        <div id="wrapper" className="flex flex-col justify-between ">
             <Navbar/>
             <div className="container">

             {/* <div className=""> */}

                <section className='flex flex-row items-center justify-center w-11/12 m-auto space-x-1 mt-14'>
                    {source.map((item, index)=>{
                        return <div className="w-11/12 flex flex-row  items-center justify-center border border-black space-x-3" key={item.id}>
                        <span className="w-1/3 flex flex-row items-center">
                           <input className='w-full  border-sm border-2' value={item.currencyname} onChange={(e)=>handleExperience(e, index)} name="currencyname" placeholder='currency name' />
                           </span>


                           <span className="w-1/3 flex flex-row items-center">
                           <input className='w-full  border-sm border-2' value={item.foreignrate} onChange={(e)=>handleExperience(e, index)} name="foreignrate" placeholder='foreign rate' />
                           </span>

                           <span className="w-1/3 flex flex-row items-center">
                           <input className='w-full  border-sm border-2' value={item.nairarate} onChange={(e)=>handleExperience(e, index)} name="nairarate" placeholder='naira rate' />
                           </span>
                        </div>
                    })}



                        <span className="w-1/6  ">
                            {Edit?
                  <button className="bg-blue-600 text-white rounded-sm w-full p-3 " onClick={handleAddEdit}>Edit</button>

                            :
                          <button className="bg-red-500 text-white rounded-sm w-full p-3 " onClick={handleClick}>Add</button>

                            }
                        </span>
                </section>

<div className="container mt-4">
    <div className="grid grid-cols-1 gap-x-5">
        <div className="overflow-x-auto">
            <table className="w-full min-w-max">
                <thead>
                    <tr>
                        <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize"> Currency Name</th>
                        <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">foreign rate</th>
                        <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">naira rate</th>
                        <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">action</th>
                    </tr>
                </thead>
                <tbody>

           {data.length > 0?
                  data.map((item, index)=>{
                    return<tr key={item.id}>
                    <td className="p-3 border border-solid border-gray-600 text-center">
                        <a>{item.currencyname}</a>
                    </td>
                    <td className="p-3 border border-solid border-gray-600 text-center"><span>{item.foreignrate}</span></td>
                    <td className="p-3 border border-solid border-gray-600 text-center"><span>{item.nairarate}</span></td>
                    <td className="p-3 border border-solid border-gray-600 text-center flex flex-row items-center space-x-2 justify-center">
                    <a  onClick={()=>handleDelete(item.id)} > <AiFillDelete className='text-red-500 text-lg'  onClick={()=>handleDelete(item.id)}/></a>
                    <a  onClick={()=>handelEdit(item.id)} ><AiFillEdit className='text-green-500 text-lg' onClick={()=>handelEdit(item.id)}/> </a>
                    </td>
                </tr>
                  })
                :<tr>
                <td className="p-3 border border-solid border-gray-600 text-center">
                    <a  className="">No data </a>
                </td>
                <td className="p-3 border border-solid border-gray-600 text-center"><span><span>No data</span></span></td>
                <td className="p-3 border border-solid border-gray-600 text-center"><span>No data</span></td>
                <td className="p-3 border border-solid border-gray-600 text-center">
                    <a ></a>
                    <a > </a>
                </td>
            </tr>
                }




                </tbody>
            </table>
        </div>
    </div>
</div>

{/* </div> */}



</div>
        </div>
    )
}


if(document.getElementById("rate")){
    ReactDOM.render(<Adminrate/>, document.getElementById("rate"));
    }
