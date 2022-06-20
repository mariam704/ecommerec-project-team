/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import "./ProductItems.css";
import { useParams } from "react-router-dom";

function ProductItems() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    apiGet();
  }, []);

  let { id } = useParams();

  const apiGet = async () => {
    setLoading(true);
    await fetch(`${Base_URL}/product/items/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json.data);
      })
      .catch(e => {
        console.log(e.message);
        setLoading(false);

      })
  };
  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle">PRODUCT Items</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="heading">
              {loading == true
                ? <LoadingComponent />
                : true
              }
              {data.map((res) => (
                <div className="box" key={res.id}>
                  <img
                    src={
                      "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                      res.image1
                    }
                  />
                  <p style={{ fontSize: 19, fontWeight: "bold" }}>{res.sku}</p>
                  <p style={{ fontSize: 19, fontWeight: "bold" }}>
                    {res.stock_status}
                  </p>
                  <button
                    onClick={() => navigate(`/productItemDetails/${res.id}`)}
                  >
                    item Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItems;
