import axios from "axios";
import { useState, useEffect } from "react";
import { GiHearts } from "react-icons/gi";
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


    // Image ME hover Pe Image Rander Ho Jaye
    const setFirst = (link, id) => {
        const updatedData = [...allData];
        for (var i = 0; i < updatedData.length; i++) {
            if (updatedData[i].id === id) {
                updatedData[i].img1 = link.urls
            }
            SetallData(updatedData)
        }
    }




    const HomeData = allData.map((key) => {
        return (
            <>
                <div className="card-container">
                    <div className="card" id="cardiii">
                        <div className="imageBox">
                            <div className="card-image">
                                <img src={key.img1} alt="Product Image" />
                            </div>
                            <div className="secondBox">
                                <img src={key.img2} onMouseEnter={() => { setFirst({ urls: key.img2 }, key.id) }} />
                                <img src={key.img3} onMouseEnter={() => { setFirst({ urls: key.img3 }, key.id) }} />
                                <img src={key.img4} onMouseEnter={() => { setFirst({ urls: key.img4 }, key.id) }} />
                            </div>
                        </div>

                        <div className="card-details">
                            <div className="detail-row">
                                <strong>Category:</strong>
                                <span>{key.catagouray}</span>
                            </div>
                            <div className="detail-row">
                                <strong>Product:</strong>
                                <span>{key.Product_name}</span>
                            </div>
                            <div className="detail-row price">
                                <s>₹{key.purana_Price}</s>
                                <p>{key.offer}</p>
                                <span>₹{key.new_Price}</span>
                            </div>
                            <div className="description">
                                <p>{key.discription}</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button>Add To Cart</button>
                            <span className="cart-icon"><GiHearts style={{ color: '#da00d6', fontSize: 29 }} /></span>
                        </div>
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
