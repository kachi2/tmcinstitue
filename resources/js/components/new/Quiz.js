import React, { useState, useEffect } from 'react';
import ReactDOM  from 'react-dom';
export default function Quiz() {
    let url = `${window.location.origin}/`;
    const [questions, Setquestion] = useState(quest?quest.questions:[]);
    const [answers, Setanswer] = useState([])
    const [table_id, Settable_id] = useState([])
    const [arr, Setarr] = useState(1)
    const [correct, Setcorrect] = useState(false)
    const [message,  Setmessage] = useState('');
    const [pop, Setpop] = useState(false);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questremainer, setquestRemainer] = useState([]);
    const [retry, Setretry] = useState(false)
    const [numtry, Setnumtry] = useState(1)
    const [showbtn, Setshowbtn] = useState(false)
    const [hover, sethover] = useState(100)
   useEffect(()=>{
    // const interval =  setInterval(()=>{
    Setarr(reminder.length)
    console.log(reminder)
    reminder.length > 0 ?

    reminder.map((item)=>{
        let ans =   JSON.parse(item.answers)
        let table_ids = JSON.parse(item.table_ids)



        if(item.totalpercentage < 80){
            Setretry(true)
            Setanswer(ans)
            localStorage.setItem('qusetions', JSON.stringify(ans))
            localStorage.setItem('quest_info', JSON.stringify(table_ids))


        }else if(item.totalpercentage >= 80){

            Setretry(true)
            Setanswer(ans)
            Setshowbtn(true)
            localStorage.setItem('qusetions', JSON.stringify(ans))
            localStorage.setItem('quest_info', JSON.stringify(table_ids))
        }
      })
    :""




    let allquestion = localStorage.getItem('qusetions')?JSON.parse(localStorage.getItem('qusetions')):[]
    let quest_info = localStorage.getItem('quest_info')?JSON.parse(localStorage.getItem('quest_info')):[]
     let count = questions.length;
     let subtwo = allquestion.length - 2;
    let questionanswered = allquestion.length;
     let allanswer =  allquestion.filter((item)=>item.answer == true).length
    //  console.log(allquestion.length, allanswer)
    //  let totalpercentage = score/questions.length * 100
     if(allquestion.length == count && allanswer >= subtwo){
        Setcorrect(true)
     }
     allanswer/count * 100
     if(count == questionanswered){
        if(quest_info[0] == quest.id  && quest_info[2] ==  quest.course_type){
            setScore(allanswer)
            setShowScore(true)
        }else{
            setScore(0)
            setShowScore(false)
            localStorage.removeItem('qusetions')
            localStorage.removeItem('quest_info')
        }
     }else if(count != questionanswered){
       let allget =  questionanswered > 0?questionanswered:0;
       if(quest_info[0] == quest.id  && quest_info[2] ==  quest.course_type){
        setCurrentQuestion(allget)
       }else{
        setCurrentQuestion(allget)
        localStorage.removeItem('qusetions')
        localStorage.removeItem('quest_info')
       }
     }


    // },1000)
    // return () => clearInterval(interval);
   },[])




   const handlemouseHover = (index)=>{
    sethover(index)
   }

   const handleLeave = ()=>{
    sethover(100)
   }
	const handleAnswerOptionClick = (isCorrect, index) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
            let allquestion = localStorage.getItem('qusetions')?JSON.parse(localStorage.getItem('qusetions')):[]
            let quest_info = localStorage.getItem('quest_info')?JSON.parse(localStorage.getItem('quest_info')):[]
            let answer = {questionnumber:currentQuestion, answerindex:index, answer:isCorrect }
              allquestion = [...allquestion, answer]
            localStorage.setItem('qusetions', JSON.stringify(allquestion))
            quest_info = quest_info.length == 0 ? [...quest_info, quest.id, quest.course_id, quest.course_type]:quest_info
            localStorage.setItem('quest_info', JSON.stringify(quest_info))
               let totalpercentage = score/questions.length * 100
               if(totalpercentage < 80 && questions.length == allquestion.length){
                Setshowbtn(false)
               }else if(totalpercentage >= 80 && questions.length == allquestion.length){
                Setshowbtn(true)
                Setcorrect(true)
                    //  code here
                    let formData = new FormData();
                    formData.append("coursename",  coursename)
                    formData.append("course_id", quest.course_id)
                    formData.append("course_type", quest.course_type)
                      let urltwo = `${url}downloadcetificate`;
                      axios.post(urltwo, formData).then(res=>{
                          if(res.data.success){
                           Setmessage(res.data.message);
                           Setpop(true)
                           }
                           })
               }
             let answers =  JSON.stringify(allquestion)
             let  table_ids   = JSON.stringify(quest_info)
            let formData = new FormData();
            formData.append('table_ids', table_ids)
            formData.append('answers', answers)
            formData.append('totalpercentage', totalpercentage)
            formData.append('course_type', course_type)
            formData.append('tryal', numtry)
            formData.append('course_id', quest.course_id)
              let urltwo = `${url}questremainer`;
              axios.post(urltwo, formData).then(res=>{
                 if(res.data.success){
                    Setarr(res.data.success)
                 }

             })
		} else {
            let allquestion = localStorage.getItem('qusetions')?JSON.parse(localStorage.getItem('qusetions')):[]
            let quest_info = localStorage.getItem('quest_info')?JSON.parse(localStorage.getItem('quest_info')):[]

            let answer = {questionnumber:currentQuestion, answerindex:index, answer:isCorrect }
              allquestion = [...allquestion, answer]
            localStorage.setItem('qusetions', JSON.stringify(allquestion))
            quest_info = quest_info.length == 0 ? [...quest_info, quest.id, quest.course_id, quest.course_type]:quest_info
            localStorage.setItem('quest_info', JSON.stringify(quest_info))
            let answers =  JSON.stringify(allquestion)
            let  table_ids   = JSON.stringify(quest_info)
            let totalpercentage = score/questions.length * 100
            if(totalpercentage < 80 && questions.length == allquestion.length){
                Setshowbtn(false)
               }else if(totalpercentage >= 80 && questions.length == allquestion.length){
                Setshowbtn(true)
                Setcorrect(true)
                //  code here
                let formData = new FormData();
                formData.append("coursename",  coursename)
                formData.append("course_id", quest.course_id)
                formData.append("course_type", quest.course_type)
                  let urltwo = `${url}downloadcetificate`;
                  axios.post(urltwo, formData).then(res=>{
                      if(res.data.success){
                       Setmessage(res.data.message);
                       Setpop(true)
                       }
                       })
               }
           let formData = new FormData();
           formData.append('table_ids', table_ids)
           formData.append('answers', answers)
           formData.append('totalpercentage', totalpercentage)
           formData.append('course_type', course_type)
           formData.append('tryal', numtry)
           formData.append('course_id', quest.course_id)
             let urltwo = `${url}questremainer`;
             axios.post(urltwo, formData).then(res=>{

                if(res.data.success){
                    Setarr(res.data.success)

                }

            })
			setShowScore(true);
		}
	}

    const handleRetry =()=>{
        let ans = [];
        let table_ids = [];
        localStorage.setItem('qusetions', JSON.stringify(ans))
        localStorage.setItem('quest_info', JSON.stringify(table_ids))
        setShowScore(false);
        setCurrentQuestion(0)
        Setnumtry(2)
    }

    const handleBack =()=>{

        window.location.href=`${url}newdashboard`
    }
     const handleHome =()=>{
        window.location.href=`${url}newdashboard`
     }
	return (
        <section className={correct?"flex flex-col items-center relative w-100 bg-white h-screen allimg":"flex flex-col items-center relative w-100 bg-white h-screen"} >
                 <nav className="w-100 " >
              <span className="w-1/5 float-left px-2 cursor-pointer" onClick={handleBack}>
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" />
                </span>
            </nav>

            <div className={'app mt-20 bg-[#37226C] w-10/12 sm:w-10/12  md:w-1/3 lg:w-2/5'}>
			{showScore ? (
				<div className='score-section grid  place-items-center mt-10'>
                    <p>You scored {score} out of {questions.length}</p>
                    {/* <p>you have tried {arr}/2</p> */}
                    <div className="text-base sm:text-base md:text-base lg:text-lg  text-justify">{correct?`Congratulations ${username} You have successfully completed this course and passed! A mail will be sent to your email address in 48hours.`:arr == 1?`${username},You have completed your first trial for this certification. You have one more trial. Good luck!`:arr == 2?`${username},You have completed your second trial for this certification. Kindly contact us via your registration mail at enquiries@tmcinstitute.com or call 09153414315.`:""}</div>
                    {/* {arr == 1?<p className="text-base sm:text-base md:text-base lg:text-base"></p>:""} */}
                    {/* {correct?<p className="text-base sm:text-base md:text-base lg:text-base"> A mail will be sent to your email address in 48hours.</p>:""} */}


                 {/* {arr == 2?<p  className="text-base sm:text-base md:text-base lg:text-base">Kindly contact us via your registration mail at <a href='mailto:enquiries@tmcinstitute.com' className='text-white no-underline'>enquiries@tmcinstitute.com</a>  or 09153414315.</p>:""} */}
                 {/* {arr == 2?<p>Confetti and inclusion of 48hours wait time.</p>:""} */}
                    {arr == 2?<a onClick={handleHome} className='px-2 py-2 rounded-md text-white border bg-[#37226C] grid place-items-center cursor-pointer capitalize mt-2'>Back Home</a>:''}
              {score >= 8?"":arr == 2?"":showbtn?"":<a onClick={handleRetry} className='px-1 py-1 rounded-md text-white border bg-[#37226C] grid place-items-center cursor-pointer capitalize'>retry</a>}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>

						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            // btnhover onMouseOver={()=>handlemouseHover(index)} onMouseLeave={()=>handleLeave()}
							<a   className= "checkone" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)} key={index}>{index == 0?'a':index == 1?'b':index == 2?'c':index == 3?'d':'e'}. {answerOption.answerText}</a>
						))}
					</div>
				</>
			)}
		</div>


        <article className={pop?'bg-cover top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 fixed z-10 grid place-content-center overflow-y-scroll py-4':'hidden'} >
        <section className='p-3 bg-white  w-11/12 h-32 grid  place-content-center text-black text-base sm:text-base md:text-base lg:text-lg'>
            <div className="w-full">
                <section className='w-1/5 float-right gird place-content-center'>
                    <a className='w-6 h-6  rounded-full bg-blue-500 text-white grid place-content-center cursor-pointer' onClick={()=>Setpop(false)}>x</a>
                </section>
            </div>
          <h2 className='text-black text-base sm:text-base md:text-base lg:text-base capitalize'>an email has be sent to your email address</h2>
        </section>
   </article>

        </section>

	);
}
if(document.getElementById('quiz')){
    ReactDOM.render(<Quiz/>, document.getElementById('quiz'));
 }
