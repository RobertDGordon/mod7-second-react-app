import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date())
  const [tickCount, setTickCount] = useState(0)
  
  // useEffect(()=>{}, [])

  useEffect(()=> {
    let clockInterval = setInterval(()=> tick(), 1000)
    console.log('Clock.jsx - useEffect: Clock component mounted')

    return () => {
      console.log('Clock.jsx - useEffect - return: clock component unmounted')
      clearInterval(clockInterval)
      setTickCount(0)
    }
  }, [])

  const tick = () => {
    setDate(new Date())
    // setTickCount((prevTickCount) => {
    //   const newTickCount = prevTickCount + 1
    //   return newTickCount
    // })
    setTickCount((prevTickCount) => prevTickCount + 1)
    console.log('Clock.jsx - Tick: tick')
  }

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      <h4>Ticks since mounting: {tickCount}</h4>
    </div>
  )
}

export default Clock;