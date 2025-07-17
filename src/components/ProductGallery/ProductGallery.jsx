import React from "react";
import "./ProductGallery.css"; // Đảm bảo có một file CSS để thêm các style tùy chỉnh
import My from "../My/My";
const ProductGallery = () => {
  const products = [
    { id: 1, name: "Sản phẩm 1", image: "src/assets/img/Drink menu.jpg" },
    { id: 2, name: "Sản phẩm 2", image: "src/assets/img/Drink menu1.jpg" },
    { id: 3, name: "Sản phẩm 3", image: "src/assets/img/Drink menu2.jpg" },
    { id: 4, name: "Sản phẩm 4", image: "src/assets/img/Drink menu3.jpg" },
    { id: 5, name: "Sản phẩm 3", image: "src/assets/img/Drink menu4.jpg" },
    { id: 6, name: "Sản phẩm 4", image: "src/assets/img/Drink menu5.jpg" },
  ];

  return (
    <>
      <div className="gallery-container">
      <h2 className="gallery-heading">Sản Phẩm Nổi Bật</h2>
      <div className="gallery-card-wrapper">
        <div className="gallery-row">
          {products.map((product) => (
            <div
              className="gallery-item"
              key={product.id}
            >
              <div className="gallery-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="gallery-image"
                />
                <p className="gallery-name">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <My/>
    </>

  );
};

export default ProductGallery;
