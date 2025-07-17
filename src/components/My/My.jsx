import React from 'react';
import '../../assets/css/Products.css';
import logo from '../../assets/img/Logo.png';
import productImage1 from '../../assets/img/Drink menu.jpg';
import productImage2 from '../../assets/img/Drink menu1.jpg';
import productImage3 from '../../assets/img/Drink menu2.jpg';

// Import ProductGallery
const products = [
  { id: 1, name: "Sản phẩm 1", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "500,000 VND", image: productImage1 },
  { id: 2, name: "Sản phẩm 2", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "750,000 VND", image: productImage2 },
  { id: 3, name: "Sản phẩm 3", detail: "Đồ uống không chỉ giải khát mà còn mang lại trải nghiệm hương vị phong phú.", price: "1,200,000 VND", image: productImage3 },
];

const My = () => {
  return (
    <>

      <section className="about container py-5">
        {/* Phần giới thiệu */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img
              src={logo}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Về Chúng Tôi</h2>
            <p className="text-muted">
              Chúng tôi tự hào mang đến cho bạn những sản phẩm chất lượng cao, 
              phong cách hiện đại và giá cả hợp lý. Đội ngũ của chúng tôi luôn 
              sẵn sàng phục vụ và mang đến trải nghiệm mua sắm tốt nhất.
            </p>
            <a href="#about" className="btn btn-primary">Tìm Hiểu Thêm</a>
          </div>
        </div>

      </section>
    </>
  );
};

export default My;
