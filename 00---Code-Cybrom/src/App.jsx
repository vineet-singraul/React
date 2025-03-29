import Student from "./Student";

const clg = {
    coll : "RGPV",
    fee : 343434,
    city : "Bhopal",
    sub : "Python"
}

const App = () => {
    return(
        <>
           <h1>This Is App Component :</h1> <br /> <hr />
           <Student nm={clg.coll} fm={clg.fee} sb={clg.city} subj={clg.sub}/> <hr />
        </>
    );
}

export default App;
