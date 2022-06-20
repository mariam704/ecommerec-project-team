/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useNavigate } from "react-router-dom";

import "./Products.css";
import { useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import LoadingComponent from "../../components/LoadingComponent";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    apiGet();
  }, []);

  let { id } = useParams();

  const apiGet = async () => {
    setLoading(true);
    if (id) {
      await fetch(`${Base_URL}/products/${id}`)
        .then((response) => response.json())
        .then((json) => {
          // console.log(json.data);
          setLoading(false);
          setData(json.data);
        })
        .catch(e => {
          console.log(e.message);
          setLoading(false);

        })
    } else {
      await fetch(`${Base_URL}/allproducts`)
        .then((response) => response.json())
        .then((json) => {
          // console.log(json.data);
          setLoading(false);
          setData(json.data);
        })
        .catch(e => {
          console.log(e.message);
          setLoading(false);

        })
    }
  };
  // Products();

  return (
    <>
      <div className="show-category">
        <Search />
        <h2 className="secTitle">PRODUCTS</h2>
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
                  <h2 className="itemTitle">{res.name}</h2>
                  <img src={res.product_image}></img>
                  <p>{res.product_disc}</p>
                  <button onClick={() => navigate(`/productItems/${res.id}`)}>
                    shop now
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

export default Products;
