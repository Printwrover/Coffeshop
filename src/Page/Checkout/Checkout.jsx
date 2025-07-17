import React, { useState } from "react";
import "./Checkout.css"; // Import CSS riêng
import { Link } from "react-router-dom";
import drink1 from '../../assets/img/Drink menu1.jpg';
import drink2 from '../../assets/img/Drink menu2.jpg';

const Checkout = () => {
  // Dữ liệu khách hàng
  const customerInfo = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận XYZ, TP.HCM",
    message: "Vui lòng giao hàng vào buổi sáng.",
    voucher: "DISCOUNT20",
    voucherCount: 5,  // Số lượng voucher
  };

  // Dữ liệu đơn hàng
  const orderSummary = [
    { id: 1, name: "Cà phê Arabica", quantity: 2, price: 50000, image: drink1, specialRequest: "" },
    { id: 2, name: "Trà sữa", quantity: 1, price: 40000, image: drink2, specialRequest: "Ít đá, nhiều sữa" }, // Yêu cầu đặc biệt cho sản phẩm trà sữa
  ];

  // Tính tổng tiền
  const totalPrice = orderSummary.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Tính giảm giá từ voucher (giả sử giảm giá là 20,000đ)
  const discountAmount = 20000;

  // Tính tổng tiền sau khi giảm
  const finalTotal = totalPrice - discountAmount;

  // State để điều khiển hiển thị thông báo thanh toán thành công
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaymentSuccess(true); // Hiển thị thông báo thanh toán thành công

    // Giữ thông báo trong một thời gian nhất định (ví dụ: 3 giây) rồi ẩn đi
    setTimeout(() => {
      setIsPaymentSuccess(false);
    }, 3000);
  };

  return (
    <div className="checkout">
      <div className="checkout-container py-5 container">
        <h1 className="checkout-title text-center mb-4">Thanh Toán</h1>

        <div className="row">
          {/* Cột trái: Đơn hàng */}
          <div className="col-md-6">
            <div className="checkout-card card mb-4">
              <div className="checkout-card-body card-body">
                <h2 className="checkout-card-title card-title">Đơn hàng của bạn</h2>
                <ul className="checkout-list list-group list-group-flush">
                  {orderSummary.map((item) => (
                    <li key={item.id} className="checkout-list-item list-group-item d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="checkout-product-image me-3"
                      />
                      <div className="checkout-product-details">
                        <strong>{item.name}</strong> x {item.quantity} -{" "}
                        {item.price.toLocaleString()}đ
                        {item.specialRequest && (
                          <div className="checkout-special-request mt-2 text-muted">
                            <small><strong>Yêu cầu:</strong> {item.specialRequest}</small>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cột phải: Thông tin khách hàng và thanh toán */}
          <div className="col-md-6">
            <div className="checkout-card card">
              <div className="checkout-card-body card-body">
                <h2 className="checkout-card-title card-title">Thông tin giao hàng</h2>
                <div className="checkout-info">
                  <p><strong>Tên người nhận:</strong> {customerInfo.name}</p>
                  <p><strong>Email:</strong> {customerInfo.email}</p>
                  <p><strong>Số điện thoại:</strong> {customerInfo.phone}</p>
                  <p><strong>Địa chỉ:</strong> {customerInfo.address}</p>
                  <p><strong>Lời nhắn:</strong> {customerInfo.message}</p>
                  <p className="checkout-voucher">
                     <span className="voucher-name"> <strong>Voucher:</strong> {customerInfo.voucher}</span> 
                    <span className="voucher-count">(x{customerInfo.voucherCount})</span>
                  </p>
                </div>
                <div className="checkout-summary">
                  <div className="checkout-total">
                    <div className="checkout-total-item">
                      <span className="checkout-total-label">Tổng tiền:</span>
                      <span className="checkout-total-amount">{totalPrice.toLocaleString()}đ</span>
                    </div>
                    <div className="checkout-total-item discount">
                      <span className="checkout-total-label">Giảm giá từ voucher:</span>
                      <span className="checkout-total-amount text-danger">- {discountAmount.toLocaleString()}đ</span>
                    </div>
                    <div className="checkout-total-item final-total">
                      <span className="checkout-total-label">Tổng tiền sau khi giảm:</span>
                      <span className="checkout-total-amount">{finalTotal.toLocaleString()}đ</span>
                    </div>
                  </div>
                </div>
            {/* Nút Quay lại và Thanh toán */}
                    <div className="checkout-buttons d-flex justify-content-between">
                     <Link to='/Thanhtoan'><button className="btn btn-secondary">Quay lại</button> </Link>
                    <button onClick={handlePayment} className="checkout-btn btn btn-primary">Thanh toán</button>
                    </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thông báo thanh toán thành công */}
        {isPaymentSuccess && (
          <div className="payment-success-modal">
            <div className="payment-success-content">
              <h3>Thanh toán thành công!</h3>
              <p>Thông tin đơn hàng đã được xử lý.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
