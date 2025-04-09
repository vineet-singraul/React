import axios from "axios";
import { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import "./Allproduct.css"
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
                <div class="card" id="cardiii">
                    <div class="card-image">
                        <img src={key.img1} alt="Product Image" />
                    </div>

                    <div class="card-thumbnails">
                        <img src={key.img2} alt="" />
                        <img src={key.img3} alt="" />
                        <img src={key.img4} alt="" />
                    </div>

                    <div class="card-details">
                        <div class="detail-row">
                            <strong>Category:</strong>
                            <span>{key.catagouray}</span>
                        </div>
                        <div class="detail-row">
                            <strong>Product:</strong>
                            <span>{key.Product_name}</span>
                        </div>
                        <div class="detail-row price">
                            <s>₹{key.purana_Price}</s>
                            <span>₹{key.new_Price}</span>
                        </div>
                        <div class="description">
                            <p>{key.discription}</p>
                        </div>
                    </div>

                    <div class="card-footer">
                        <button>Add To Cart</button>
                        <span class="cart-icon">🛒</span>
                    </div>
                </div>
            </>
        )
    })


    return (
        <>
            <div class="card-container">
               {HomeData}
            </div>

        </>
    )
}

export default Allproduct
