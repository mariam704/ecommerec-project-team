import React from 'react'
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
    const navigate = useNavigate();
    const navigateToProducts = () => navigate("/products");
    return (
        <div style={{ backgroundColor: "#333", flex: 1, width: "50%", margin: "auto", borderRadius: 5, marginTop: 10, padding: 10, marginBottom: 10 }} className="thanksContainer">
            <h1 style={{ textAlign: "center", color: "darkkhaki", fontWeight: "bold" }} className='textThanksStyle'>Thank You</h1>
            <p style={{ textAlign: "center", color: "darkkhaki", fontWeight: "bold", fontSize: 18 }}>
                your order will prepare and deliver to you as fast as you can expect,
                we sent email for you with all your order details and satus check your email inpox now.
            </p>
            <div style={{width: 220, margin: "auto" }}>
                <button onClick={navigateToProducts} style={{ backgroundColor: "darkkhaki", color: "#333", width: 220, fontSize: 18, fontWeight: "bold"}} className='btn'>Complete Shopping</button>

            </div>

        </div>
    )
}
export default ThankYou;