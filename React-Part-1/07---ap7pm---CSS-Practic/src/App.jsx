import Cybrom from "./cybrom";
import myimage1 from "./images/ram.jpeg";
import secImage from "./images/th.jpeg";
import secVImage from "./images/th2.jpg";

const App = () => {
  return (
    <>
      <h1
        style={{
          color: "blue",
          textAlign: "center",
          fontSize: "24px",
          textDecoration: "underline",
        }}
      >
        Hello, Welcome to Bhopal
      </h1>

      <Cybrom />

      {/* Using imported images */}
      <img src={myimage1} alt="Image 1" />
      <img src={secImage} alt="Image 2" />
      <img src={secVImage} alt="Image 3" />

      {/* Using images from the public folder */}
      {/* <img src="/Images/REL.jpg" alt="REL image" />
      <img src="/Images/ram.jpg" alt="Ram image" />
      <img src="/Images/th.jpg" alt="Thumbnail image" /> */}
    </>
  );
};

export default App;
