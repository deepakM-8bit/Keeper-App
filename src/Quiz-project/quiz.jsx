import React,{ useRef, useState } from 'react';
import { Data } from '../assets/data.js';
import './quiz.css';

const Quiz = () => {

    
    let [index, setIndex] = useState(0);
    const [questions, setQuestion] = useState(Data[index]);
    const [lock,setLock] = useState(false);
    const [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];

    const checkAns = (e,ans) => {
        if(lock === false){
           if (questions.ans === ans) {
              e.target.classList.add("correct");
              setLock(true);
              setScore(prev=>prev+1)
           } else {
              e.target.classList.add("wrong");
              setLock(false);
              option_array[questions.ans-1].current.classList.add("correct");
           }
        }
    }
    
    const next = ()=>{
        if (lock === true){
            if (index === Data.length-1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(Data[index]);
            setLock(false);
            option_array.map((option)=>
            {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(Data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        {result ? <> </> : <> <h2>{index+1}. {questions.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=> {checkAns(e,1)}}>{questions.option1}</li>
            <li ref={Option2} onClick={(e)=> {checkAns(e,2)}}>{questions.option2}</li>
            <li ref={Option3} onClick={(e)=> {checkAns(e,3)}}>{questions.option3}</li>
            <li ref={Option4} onClick={(e)=> {checkAns(e,4)}}>{questions.option4}</li>
        </ul>
       
        <button onClick={next}>Next</button>
        <div className="index">{index+1}of {Data.length} questions</div></>}
        {result? <><h2>Your Score is {score} out of {Data.length}</h2>
        <button onClick={reset}>Play Again</button>
        </>: <></>}
        
       
        
    </div>
  )
}

export default Quiz;