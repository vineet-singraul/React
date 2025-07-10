import { useParams } from "react-router-dom";
const Insert = () => {
    const {id} = useParams()
  return (
    <center>
      <br /><h1>Insert Component : {id}</h1><br />
    </center>
  );
};

export default Insert;
