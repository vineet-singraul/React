import axios from "axios";
import { useEffect, useState } from "react";
import { GiHearts } from "react-icons/gi";

const Mans = () => {
  const [userData, setUserData] = useState([]);
  const [onlyMan, setOnlyMan] = useState([]);

  const loadData = async () => {
    try {
      const api = "http://localhost:3000/Product";
      const res = await axios.get(api);
      setUserData(res.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filtered = userData.filter((item) => item.catagouray === "man");
    setOnlyMan(filtered);
  }, [userData]);

      // Image ME hover Pe Image Rander Ho Jaye
      const setFirst = (link, id) => {
        const updatedData = [...onlyMan];
        for (var i = 0; i < updatedData.length; i++) {
            if (updatedData[i].id === id) {
                updatedData[i].img1 = link.urls
            }
            setOnlyMan(updatedData)
        }
    }


  const manData = onlyMan.map((item) => (
    <div className="card-container" key={item.id}>
      <div className="card" id="cardiii">
        <div className="imageBox">
          <div className="card-image">
            <img src={item.img1} alt="Product" />
          </div>
          <div className="secondBox">
            <img src={item.img2} alt="img2"  onMouseEnter={() => { setFirst({ urls: item.img2 }, item.id) }}  />
            <img src={item.img3} alt="img3"  onMouseEnter={() => { setFirst({ urls: item.img3 }, item.id) }}  />
            <img src={item.img4} alt="img4"  onMouseEnter={() => { setFirst({ urls: item.img4 }, item.id) }}  />
          </div>
        </div>

        <div className="card-details">
          <div className="detail-row">
            <strong>Category:</strong>
            <span>{item.catagouray}</span>
          </div>
          <div className="detail-row">
            <strong>Product:</strong>
            <span>{item.Product_name}</span>
          </div>
          <div className="detail-row price">
            <s>₹{item.purana_Price}</s>
            <p>{item.offer}</p>
            <span>₹{item.new_Price}</span>
          </div>
          <div className="description">
            <p>{item.discription}</p>
          </div>
        </div>

        <div className="card-footer">
          <button>Add To Cart</button>
          <span className="cart-icon">
            <GiHearts style={{ color: "#da00d6", fontSize: 29 }} />
          </span>
        </div>
      </div>
    </div>
  ));

  return <div className="card-container">{manData}</div>;
};

export default Mans;
