import { useRef, useState } from "react"

export default function RefCounter() {

  const [countState, setCountState] = useState(0)

  let countRef = useRef(0)
  let count = 0

  function handleClick() {
    countRef.current = countRef.current + 1
    count = count + 1
    alert(`You clicked ${countRef.current} (${count}) times!`)
  }

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
      </button>
      <h4>Count: {count}</h4>
      <h4>CountRef: {countRef.current}</h4>
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>
      <h4>State: {countState}</h4>
    </div>
  )
}