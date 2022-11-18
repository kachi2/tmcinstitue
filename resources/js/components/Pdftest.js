import React, { useState, useEffect} from 'react';
import ReactDom from 'react-dom'
//import PDFViewer from 'pdf-viewer-reactjs'
import { data } from 'autoprefixer';
import { Document, Page, pdfjs } from "react-pdf";
import { useSpeechSynthesis } from 'react-speech-kit';
import {FcSpeaker} from 'react-icons/fc'
// import pdfUtil from 'pdf-to-text';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import workerSrc from "../pdf-worker";
// import fs from 'fs';
// import pdf from 'pdf-parse';
//pdfjs-dist/es5/build/pdf
// import pdfjss from 'pdfjs-dist/build/pdf'
// import  pdfjs from "pdfjs-dist/build/pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function Pdftest() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [files, setFile] = useState("https://res.cloudinary.com/okpeku/image/upload/v1648631819/suzspvzwylpp4mswrbcv.pdf");
    const { speak } = useSpeechSynthesis();
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    //   var pdfUtil = require('pdf-to-text');

    //   var pdf_path = "https://res.cloudinary.com/okpeku/image/upload/v1646919625/foguufjrc1nkom4b9qrq.pdf";

    //   pdfUtil.info(pdf_path, function(err, info) {
    //       if (err) throw(err);
    //       console.log(info);
    //   });


 const [all, setall] = useState([])
 let steve = [];

    // console.log(all)



let pagenumber = 1;


    const handlenext = ()=>{
        if(pageNumber != numPages){
            let answer = pageNumber + 1
            setPageNumber(answer)
            pagenumber = answer
        }else if (pageNumber == numPages){
            setPageNumber(1)
            pagenumber = 1
        }
  }


  const handleprev = ()=>{
    if(pageNumber == 1){
        setPageNumber(numPages)
        pagenumber = numPages
    }else if (pageNumber < numPages){
        let answer = pageNumber - 1
        setPageNumber(answer)
        pagenumber = answer
    }else if (pageNumber === numPages){
        let answer = numPages - 1
        setPageNumber(answer)
        pagenumber = answer
    }
}


useEffect(()=>{
    const interval =  setInterval(()=>{
        async function getContent(src){
            const doc = await pdfjs.getDocument(src).promise
            //getDocument(src).promise
            const page = await doc.getPage(pageNumber)
            return await page.getTextContent()
            }

            async function getItems(){
            const content = await getContent("https://res.cloudinary.com/okpeku/image/upload/v1648631819/suzspvzwylpp4mswrbcv.pdf")
            const items = content.items.map((item)=>{

            // setall([
            //     ...all,
            //     item.str
            // ])
            steve.push(item.str)
            setall(steve.length > 150?steve:[])

            })
            return items;
            }
            getItems()
       },1000)
     return () => clearInterval(interval);
},[pageNumber])

const handleclick =()=>{

    let ans = all.filter((item)=>item !== ' ' && item !== '')
      let talk = ans.join()
      console.log(talk)
      speak({ text:talk})
      setall([])
    }
  return (
    <div className='w-full'>

         {/* <PDFViewer
         scale={2}

         hideRotation
         hideZoom
            document={{
                url: 'https://res.cloudinary.com/okpeku/image/upload/v1646919625/foguufjrc1nkom4b9qrq.pdf',
            }}
        /> */}

       <article className='m-auto w-1/2 relative border-2 h-[32rem] overflow-y-scroll'>
       <Document
file={files} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
       </article>
     <div className='w-1/5 flex flex-row space-x-3 items-center'><span><button className='' onClick={handleprev}>PRE</button></span>
     <span >{pageNumber}of{numPages}</span>
     <span><button className='' onClick={handlenext}>NEXT</button></span>
     </div>
     <span><button className='w-10 rounded bg-red-500 text-white mt-2' onClick={()=>handleclick()}><FcSpeaker className="text-2xl text-white" onClick={()=>handleclick()}/></button></span>

    </div>
  )
}

if(document.getElementById('pdftest')){
ReactDom.render(<Pdftest/>, document.getElementById('pdftest'));
}
