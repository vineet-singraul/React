const Student = (props) => {
    return(
        <>
          <h1> College : {props.nm}</h1>
          <h1> Fees : {props.fm}</h1>
          <h1> City : {props.sb}</h1>
          <h1> Subject : {props.subj}</h1>
        </>
    );
}
export default Student;
