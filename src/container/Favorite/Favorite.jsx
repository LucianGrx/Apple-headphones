import React from "react";
import data from "../../components/products.json";
import { Context } from "../../App";
import { useContext } from "react";
import Slider from "react-slick";
import "./Favorite.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favorite = () => {
  const [selectedProduct, setSelectedProduct] = useContext(Context);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <section className="favorite section" id="favorites">
      <h2 className="section__title">CHOOSE YOUR FAVORITE</h2>
      <div className="favorite__container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`product-item ${
                selectedProduct === item ? "active" : ""
              }`}
              onClick={() => handleProductClick(item)}
            >
              <img src={item.image} alt="image" className="favorite__img" />
              <span className="favorite__model">{item.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Favorite;
