import { useRef } from "react"
const App = () => {
  const ref = useRef();
  const myDataDisplay=()=>{
    ref.current.style.border = "3px solid red"
    ref.current.style.width = "200px"
    ref.current.style.padding = "30px"
    ref.current.style.borderRedius = "20px"
    ref.current.style.background = "pink"
  }

  const rref = useRef()
  const Display = () => {
    rref.current.innerHTML = "Javascript"
  }
  return (
    <>
      <h1>Welcom App</h1>
      <div ref={ref}>
         hello
      </div>
      <button onClick={myDataDisplay}>Click</button><hr /><br /><br />

      <button onClick={Display}>Change H1 Data</button>
      <h1 ref={myref}></h1>
    </>
  )
}

export default App
