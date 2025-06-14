import About from "./About";

const Home = (props) => {

    const ClickEvent = (e) => {
        e.preventDefault();
        console.log("Hello");
    }

    return (
        <>
            <h1 >Thise Is Home Page :</h1>
            <About name={"Vineet"}/>
            <button onClick={ClickEvent}>Click</button>
        </>
    )
}

export default Home
