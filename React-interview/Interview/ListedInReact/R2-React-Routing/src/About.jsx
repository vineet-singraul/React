const About = (props) => {

    let arr = [1,2,3,4,5,7,3,5,1,6,8]
    let ans = arr.map((key,index)=>{
        return(
            <>
             <li key={index}>{key}</li>
            </>
        )
    })


  return (
    <>
      <h1>Thise Is About Page :</h1>
      <h1>Hello : {props.name}</h1>
      <ul>{ans}</ul>
    </>
  )
}

export default About
