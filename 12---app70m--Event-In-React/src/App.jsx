const App = () => {

    // const Disply=()=>{
    //     alert("Heeloo Thid Is Buuton")
    // }

    // const MyName=(nm)=>{
    //     alert("Hello Gys This Is "+nm)
    // }


    // const muName = (nm, location) => {
    //     alert(`My name is ${nm} from ${location}`);
    // }


    // const muName = (nm,e) => {
    //      alert("name : "+ nm + "Event Name :" + e.type)

    // }

    //     const muName = (e) => {
    //         let name = e.target.name;
    //         let value = e.target.value;
    //         alert("Name : "+ name + " Value : " + value )
    //    }


    // const handleInput = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     console.log("Name : " + name)
    // }

    // const handleInput = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     // console.log({name:value})    // yeh object ban jayega
    //     console.log({[name]:value})
    // }


    const VineetHai = (e) =>{
        Name = e.target.name;
        Value = e.target.value;

        console.log({[Name]:Value});
        
    }





    return (
        <>
            <h1>Hello</h1>
            {/* <button onClick={Disply}>Click</button> */}

            {/* <button onClick={()=>{MyName(" Vineet Singh")}}>Click</button> */}

            {/* <button onClick={() => { muName("Vineet Singh", "India") }}>Click</button> */}

            {/* <button name="mybotton" value="btn" onClick={(e) => {muName("Vineet", e)}}>Click</button> */}

            {/* <button name="mybotton" value="btn" onClick={muName}>Click</button> */}


            {/* Enter City : <input type="text" value="TextCity" nme="Bhopal"  onChange={handleInput}/> */}
           


            {/* Enter City : <input type="text" value="TextCity" name="Bhopal"  onChange={handleInput}/> */}


             Enter Your Name : <input type="text" value="text" name="Vineet"  onChange={VineetHai}/>


        </>
    )
}

export default App;