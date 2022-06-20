/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useNavigate } from "react-router-dom";

import "./Categories.css";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet();
  }, []);

  const navigate = useNavigate();

  const apiGet = async () => {
    await fetch(`${Base_URL}/categories`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setData(json.data);
      });
  };
  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle">Categories</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="heading">
              {data.map((res) => (
                <div className="boxhome" key={res.id}>
                  <h2 className="itemTitle">{res.category_name}</h2>
                  <img src={res.category_image} alt={res.category_name} />
                  {/* <p>{res.product_disc}</p> */}
                  <button
                    style={{ marginTop: 25 }}
                    onClick={() => navigate(`/products/${res.id}`)}
                  >
                    Explore Products
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

export default Categories;
