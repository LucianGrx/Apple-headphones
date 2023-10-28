import "./ModelsPage.scss";
import { RiPlayCircleFill } from "react-icons/ri";
import { Context } from "../../App";
import { useContext } from "react";

const ModelsPage = () => {
  const [selectedProduct, setSelectedProduct] = useContext(Context);

  return (
    <section className="model section" id="models">
      <h2 className="section__title">MODEL SPECIFICATIONS</h2>

      <div className="model__container container grid">
        <div className="model__content">
          <img
            src={
              selectedProduct
                ? selectedProduct.image
                : "./model-img.png"
            }
            alt="image"
            className="model__img"
          />
          {selectedProduct && (
            <div>
              {selectedProduct.specification.map((spec, index) => (
                <p key={index}>{spec}</p>
              ))}
            </div>
          )}
        </div>

        <a href={selectedProduct ? selectedProduct.url : "#"} target="_blank" rel="noreferrer" className="model__button button">
          Buy Now <RiPlayCircleFill />
        </a>
      </div>
    </section>
  );
};

export default ModelsPage;
