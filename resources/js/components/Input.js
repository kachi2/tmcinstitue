import React,{useState} from 'react'
import ReactDOM from 'react-dom';
 import ReactQuill from 'react-quill';
 import 'react-quill/dist/quill.snow.css';
 function Input() {
    let url = `http://127.0.0.1:8000/`;
     const [details, Setdetails] = useState('');
     const [who, Setwho] = useState('');
     const [Learn, SetLearn] = useState('');
     const [Duration, SetDuration] = useState('');
     const [price, Setprice] = useState('');
     const [language, Setlang] = useState('');
     const [access, Setaccess] = useState('');
     const [category, Setcategory] = useState('');
     const [courses, Setcourses] = useState('');
     const [alert, SetAlert] = useState('');
    const handleCourse = (e)=>{
        Setdetails(e)
      }

      const handleLearn = (e)=>{
        SetLearn(e)
      }

      const handlewho = (e)=>{
          Setwho(e)
      }

      const handleSubmit =()=>{
          if (courses && category && access && language && price && Duration  && who && details){
         let formData = new FormData();
         formData.append("mainhead", category)
        formData.append("courses", courses)
        formData.append("duration", Duration)
        formData.append("price", price)
        formData.append("language", language)
        formData.append("access", access)
        formData.append("coursedetails", details)
        formData.append("who", who)
        formData.append("learning", Learn)
          let urltwo = `${url}insertdata`;
          axios.post(urltwo, formData).then(res=>{
             if(res.data.success){
               SetAlert(res.data.success)

             }

         })

          }

      }
  return (
    <div className="w-full ">
      <article className="w-11/12 m-auto ">
        <article className='w-full text-center'>{alert?alert:""}</article>
        <section className="w-full flex flex-row items-center justify-center space-x-2">
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">Course Categories</span>
                <input type="text" className="w-full border rounded-md p-2" onChange={(e)=>Setcategory(e.target.value)} value={category}/>
            </div>
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">Courses</span>
                <input type="text" className="w-full border rounded-md p-2" onChange={(e)=>Setcourses(e.target.value)} value={courses}/>
            </div>
        </section>


        <section className="w-full flex flex-row items-center justify-center space-x-2 mt-2">
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">Duration </span>
                <input type="text" className="w-full border rounded-md p-2" onChange={(e)=>SetDuration(e.target.value)} value={Duration}/>
            </div>
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">Price</span>
                <input type="number" className="w-full border rounded-md p-2" onChange={(e)=>Setprice(e.target.value)} value={price}/>
            </div>
        </section>

        <section className="w-full flex flex-row items-center justify-center space-x-2 mt-2">
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">language </span>
                <input type="text" className="w-full border rounded-md p-2" onChange={(e)=>Setlang(e.target.value)} value={language}/>
            </div>
            <div className="w-1/3 flex flex-col">
                <span className="capitalize text-lg">access</span>
                <input type="text" className="w-full border rounded-md p-2" onChange={(e)=>Setaccess(e.target.value)} value={access}/>
            </div>
        </section>

        <section className="w-full flex flex-row items-center justify-center space-x-2 mt-2">
            <div className="w-11/12 flex flex-col">
                <span className="capitalize text-lg">Course Outline/ Course details</span>
                <ReactQuill
               modules={Input.modules}
               formats={Input.formats}
               className="px-1 py-1 mt-2 rounded shadow-md p-2 bg-white placeholder-gray-500  md:px-2 md:py-2 md:mt-2 md:rounded md:shadow-md md:p-4 md:bg-white md:placeholder-gray-500 "
               onChange={handleCourse}
               value={details}
               id="word"
               name="word"
               readOnly={false}
               placeholder="enter your job description..."
               theme="snow"
               />
            </div>
        </section>


        <section className="w-full flex flex-row items-center justify-center space-x-2 mt-2">
            <div className="w-11/12 flex flex-col">
                <span className="capitalize text-lg">whothiscoursefor</span>
                {/* <textarea className=" px-2 py-2 mt-2 rounded shadow-md p-4"    onChange={(e)=>Setwho(e.target.value)}
                value={who}  id="jobSummary"
                name="jobSummary"></textarea> */}
                 <ReactQuill
               modules={Input.modules}
               formats={Input.formats}
               className="px-1 py-1 mt-2 rounded shadow-md p-2 bg-white placeholder-gray-500  md:px-2 md:py-2 md:mt-2 md:rounded md:shadow-md md:p-4 md:bg-white md:placeholder-gray-500 "
               onChange={handlewho}
               value={who}
               id="who"
               name="who"
               readOnly={false}
               placeholder="enter your job description..."
               theme="snow"
               />
            </div>
        </section>


        <section className="w-full flex flex-row items-center justify-center space-x-2 mt-2">
            <div className="w-11/12 flex flex-col">
                <span className="capitalize text-lg">Learning</span>
                <ReactQuill
               modules={Input.modules}
               formats={Input.formats}
               className="px-1 py-1 mt-2 rounded shadow-md p-2 bg-white placeholder-gray-500  md:px-2 md:py-2 md:mt-2 md:rounded md:shadow-md md:p-4 md:bg-white md:placeholder-gray-500 "
               onChange={handleLearn}
               value={Learn}
               id="word"
               name="word"
               readOnly={false}
               placeholder="enter your job description..."
               theme="snow"
               />
            </div>
        </section>


        <section className="w-full">
            <div className="w-1/5 float-right mt-2">
               <button className="py-2 px-6 bg-red-500 text-white rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
        </section>

      </article>
    </div>
  )
}

export default Input;
if(document.getElementById("input")){
ReactDOM.render(<Input/>, document.getElementById("input"))
}

Input.modules = {
    toolbar:[
  [{header:"1"}, {header:"2"}, {header:[3, 4, 5, 6]}, {font:[]}],
  [{size:[]}],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{list:"ordered"},{list:"bullet"}],
  // ["link", "image", "video"],
  ["clean"],
  // ["code-block"]
  ],
  };

  Input.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  // "link",
  // "image",
  // "video",
  // "code-block",
  ]
