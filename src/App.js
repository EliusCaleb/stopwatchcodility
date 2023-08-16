import React,{useState,useRef} from 'react';
import './App.css';

function App() {
  const [isRun,setIsRun]=useState(false)
  const [time,setTime] = useState(0)
  const timeRef = useRef(null)
  const startTime =()=>{
      if(!isRun){
        setIsRun(true)
        timeRef.current = setInterval(()=>{
           setTime(prevTime =>prevTime+1)
        },1000)
      }
  }
  const pauseTime =()=>{
      setIsRun(false)
      clearInterval(timeRef.current)
  }
  const resetTime =()=>{
    setIsRun(false)
    clearInterval(timeRef.current)
    setTime(0)
    
  }
  return (
    <div className="App">
      <div>
       <h2>
         StopWatch
       </h2>
       <h3>{time}</h3>
       {
        (
          !isRun ? (
            <button onClick={startTime}>Start</button>
          ) :(
            <button onClick={pauseTime}>Pause</button>
          )
        )
       }
       <button onClick={resetTime}> Reset</button>
      </div>
    </div>
  );
}

export default App;
