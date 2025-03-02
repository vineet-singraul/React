const Data=()=>{
  const data = {
    "Name":"Vineet",
    "RollNum":123,
    "City":"Bhopal"
  }
    return(
        <>
          <h1>Data Part</h1> 
          <h1>Name Is {data.Name}</h1> 
          <h1>Roll Number Is {data.RollNum}</h1> 
          <h1>City Is {data.City}</h1> 
          <hr/>
        </>
    )
}

export default Data;