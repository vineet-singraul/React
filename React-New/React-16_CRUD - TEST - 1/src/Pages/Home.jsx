const Home = () => {
  return (
    <>
      <center>
        <h1>Home Component</h1>
        <div style={{
          position: "relative",
          width: "500px",
          height: "300px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          margin: "50px auto"
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "300px",
            height: "150px",
            backgroundColor: "skyblue",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "150px",
              height: "70px",
              backgroundColor: "red",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold"
            }}>
              CYBROM
            </div>
          </div>

          <div style={{
            position: "absolute",
            left: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "24px",
            fontWeight: "bold"
          }}></div>

          <div style={{
            position: "absolute",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "24px",
            fontWeight: "bold"
          }}></div>
        </div>
      </center>
    </>
  );
};

export default Home;
