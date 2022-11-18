import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
 function Residential() {
    const [file, setFile] = useState(null);

    const handleChange = file => {
        setFile(file);
      };
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-2/3 m-12   flex flex-row items-center justify-center'>
          <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center' >
                 1
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={0} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#EFF0F6] text-[#37226C] grid place-content-center'>
                 2
             </span>
             <article className='w-1/4 px-2'>
             <ProgressBar completed={100} maxCompleted={100} customLabel=" " height="8px" animateOnRender={true}  />
             </article>
             <span className='w-12 h-12 rounded-full bg-[#37226C] text-white grid place-content-center'>
                 3
             </span>
        </div>
         <div className='w-2/3 text-left m-auto text-5xl text-[#37226C]'>
         File upload
         </div>
        <section className='w-2/3 m-12 rounded-md  border flex flex-col items-center  py-3 shadow-sm'>
          <div className='w-full py-2 text-4xl text-center text-[#37226C] px-3 flex flex-col items-center'>
           <span className='text-2xl text-[#37226C] capitalize font-semibold mt-2'>Please verify your identity</span>
           <span className='text-sm text-[#37226C] capitalize font-semibold mt-4'>Select relevant documents to complete your kyc</span>
          </div>

          <article className='w-11/12 m-auto mt-1 grid place-content-center'>
                 
                 <section className='w-96 flex flex-row item-center justify-center'>
                                    <FileUploader 
                                    style={{ height:"20%" }}
                                      multiple={false}
                            handleChange={handleChange} 
                            name="file" 
                            types={fileTypes} 
                        />
                 </section>
                 
        </article>

        </section>

    </div>
  )
}
export default Residential;
if(document.getElementById('reside')){
ReactDOM.render(<Residential/>, document.getElementById('reside'))
}



