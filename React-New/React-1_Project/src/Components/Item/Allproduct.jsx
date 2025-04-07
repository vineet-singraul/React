import axios from "axios";
import { useState, useEffect } from "react";
const Allproduct = () => {

    const [allData, SetallData] = useState([])
    const loadData = async () => {
        let api = "http://localhost:3000/Product";
        let res = await axios.get(api)
        SetallData(res.data)
        console.log(allData);
    }

    useEffect(() => {
        loadData();
    }, [])

    const HomeData = allData.map((key) => {
        return (
            <>
                <div id="Card-div">
                    <div className="top-div">
                    <img src={key.img1} alt="" />
                    </div>
                    <div className="buttom-div">
                        <p className="detail">{key.discription}</p>
                        <div className="price-details">
                            <s className="Cross-price">{key.purana_Price}</s>
                            <p className="real-price">{key.new_Price}</p>
                        </div>
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                </div>
            </>
        )
    })


    return (
        <>
            <div id="ContainerDiv">
              {HomeData}
            </div>
        </>
    )
}

export default Allproduct
