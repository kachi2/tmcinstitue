import React from 'react'
import ReactDOM from 'react-dom';
import {BsVectorPen, BsClipboardData} from 'react-icons/bs';
import {BiWebcam} from 'react-icons/bi'
 function Snatika() {
  return (
    <div className='w-full flex flex-col items-center bg-white'>


      <div className='w-3/4 m-auto mt-4'>
          <article className=' capitalize w-2/5 flex flex-col'>
         <h2 className='text-5xl'> About Snatika</h2>
          <section className='border w-44 float-left  border-[#09090f]'></section>
          </article>
         <section className='w-full text-left  text-lg mt-2 '>
         SNATIKA is an accredited training partner of OTHM - an Awarding Body by the UK Government. OTHM,
         UK is approved and regulated by Ofqual, UK. Through an academic partnership with the London Graduate School,
         learners are awarded the MA, MSc or MBA degrees from the University of Chichester, UK.
         With a team of extremely profound and sought-after expert researchers as well as senior-level practitioners,
         Snatika boasts of a bespoke, carefully tailored curriculum specially designed to fit into the lives of busy professionals
         interested in the benefits, privilege and repute of an international degree as well the immense career advancement such
         certificates bring. Snatika doesn’t just offer a diverse range of Masters Programs for Senior professionals, Snatika gives
         value to the knowledge gained over the years of experience in the chosen field of all her candidates. Snatika, also in
          partnership with the London Graduate School, UK, awards her learners a UK masters’ degree. This is because the London
          Graduate School is a dynamic institution that offers excellent university programs which are designed for students to gain
          important education and learning opportunities fit for a modern global world. And so, through an academic partnership with
          the London Graduate School, our learners are awarded the MA, MSc or MBA degree depending on their chosen program. In the
           same vein, the University of Chichester, a UK state university, located in West Sussex, England is a masters’
           degree-awarding institution also in partnership with Snatika.
          The credits earned through SNATIKA’s Level 7 Diploma from OTHM are recognized by the University of Chichester.
         </section>
      </div>

      <section className='w-11/12 m-auto grid grid-cols-3 place-content-center py-2 mt-2'>
          <div className='flex flex-row items-center py-2'>
             <span className='w-1/12'>
               <BsVectorPen className='text-3xl text-blue-400'/>
             </span>
             <span className='w-11/12 flex flex-col items-center px-2'>
                 <div className='w-full text-left uppercase  text-xl text-red-600'>TRAINING & DEVELOPING TALENTS</div>
                 <div className='w-full text-left uppercase  text-sm py-2 tracking-wide'>
                 The institute has over the years has through experience
                 in training and developing talents and helping organizations
                 to identified knowledge gaps.
                 </div>
             </span>
          </div>

          <div className='flex flex-row items-center py-2'>
             <span className='w-1/12'>
               <BiWebcam className='text-3xl text-green-300'/>
             </span>
             <span className='w-11/12 flex flex-col items-center px-2'>
                 <div className='w-full text-left uppercase   text-xl text-red-600'>TRAINING & DEVELOPING TALENTS</div>
                 <div className='w-full text-left uppercase  text-sm py-2 tracking-wide'>
                 TMC INSTITUTE has successfully conveyed
                 the training courses throughout the region
                 with clients that continue to grow every year
                 </div>
             </span>
          </div>


          <div className='flex flex-row items-center py-2'>
             <span className='w-1/12'>
               <BsClipboardData className='text-3xl text-orange-400'/>
             </span>
             <span className='w-11/12 flex flex-col items-center px-2'>
                 <div className='w-full text-left uppercase text-xl text-red-600'>TRAINING COURSES</div>
                 <div className='w-full text-left uppercase  text-sm py-2 tracking-wide'>
                 Our certified and experienced team possesses an in-depth
                  understanding and knowledge of the region’s
                 financial services and provides world-class
                 training packed full of practical examples and top-notch case studies.
                 </div>
             </span>
          </div>

      </section>

       <article className='w-10/12 m-auto space-x-4 flex flex-row  bg-[#eee] px-10 py-4 rounded-md'>
           <section className='w-1/2'>
           <div className='w-full text-left uppercase  text-lg text-red-600'>WE COVER THE FULL GRC (GOVERNANCE & RISK COMPLIANCE) SPECTRUM</div>
           <div className='w-full text-left uppercase  text-sm py-2 tracking-wide'>
           Our extensive and proficient team of expert consultants and trainers ensures that our clients are available with experts no matter
           what aspect of the GRC spectrum it is. Whether you want financial crime prevention, compliance, risk management, corporate governance,
           prudential requirements, or just a finance understanding and awareness, our team has the right specialist to offer you what you need.
           </div>
           </section>
           <section className='w-1/2'>
           <div className='w-full text-left uppercase   text-lg text-red-600'>THE WIDER SCOPE OF COMPLIANCE & OUR SERVICES</div>
           <div className='w-full text-left uppercase  text-sm py-2 tracking-wide'>
           Compliance, being a discipline, was previously related to ensuring compliance to rules and regulations businesses face.
           However, today, compliance is more about the same, including ethics, advice, and culture – contemporary compliance is now at the core of the business.
           Our compliance trainers not just keep navigating a complex regulatory mechanism but also add an in-depth commercial perspective.
           They help you conduct the right business
           in the right way and help businesses achieve success through such controls and systems in place that ensure effective and timely risk management.
           </div>
         </section>
       </article>
    </div>
  )
}

export default Snatika;

if(document.getElementById("snatika")){
ReactDOM.render(<Snatika/>, document.getElementById('snatika'));
}
