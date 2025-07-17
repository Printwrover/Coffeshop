import React from 'react';
import '../../assets/css/Products.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import productImage1 from '../../assets/img/Drink menu.jpg';
import productImage2 from '../../assets/img/Drink menu1.jpg';
import productImage3 from '../../assets/img/Drink menu2.jpg';

// Import ProductGallery
import ProductGallery from '../ProductGallery/ProductGallery';

const products = [
  { id: 1, name: "Sản phẩm 1", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "500,000 VND", image: productImage1 },
  { id: 2, name: "Sản phẩm 2", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "750,000 VND", image: productImage2 },
  { id: 3, name: "Sản phẩm 3", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "1,200,000 VND", image: productImage3 },
];

const About = () => {
  return (
    <>
    
      
      <section className="about container py-5">
        {/* Phần sản phẩm mẫu */}
        <div className="featured-products">
          <h3 className="text-center mb-4">Sản Phẩm Nổi Bật</h3>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body text-start">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.detail}</p>
                    <p className="card-text text-muted">Giá: {product.price}</p>
                    <Link to="/Detail">
                      <a href="#details" className="btn btn-success">Xem Chi Tiết</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Thêm ProductGallery ở đây */}
        <ProductGallery />
    </>
  );
};

export default About;
