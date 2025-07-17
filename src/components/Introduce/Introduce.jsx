// src/components/Introduce.jsx
import React from 'react';
import './Introduce.css';

const Introduce = () => {
  return (
    <div className="introduce-page">
      {/* Hero Section */}
      

      {/* Features Section */}
      <div className="features-section">
        <h2>Các tính năng nổi bật</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Danh sách đồ uống đa dạng</h3>
            <p>Khám phá hàng trăm loại đồ uống khác nhau.</p>
          </div>
          <div className="feature-item">
            <h3>Thông tin chi tiết</h3>
            <p>Tìm hiểu chi tiết về từng loại đồ uống.</p>
          </div>
          <div className="feature-item">
            <h3>Tìm kiếm và lọc</h3>
            <p>Dễ dàng tìm kiếm và lọc đồ uống theo sở thích.</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Thư viện hình ảnh</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Cà phê" />
          <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Trà" />
          <img src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Sinh tố" />
        </div>
      </div>
    </div>
  );
};

export default Introduce;