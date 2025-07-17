import 'bootstrap/dist/css/bootstrap.min.css';
import './ThanhToan.css';
import ModalVoucher from '../../components/ModalVoucher/ModalVoucher';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import drink1 from '../../assets/img/Drink menu1.jpg';
import drink2 from '../../assets/img/Drink menu2.jpg';
import { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Espresso', image: drink1, quantity: 1, originalPrice: 80000, discountedPrice: 70000 },
  { id: 2, name: 'Cappuccino', image: drink2, quantity: 2, originalPrice: 100000, discountedPrice: 90000 },
];

function ThanhToan() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Recalculate the total amount
  const totalAmount = products.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  // Open delete confirmation modal
  const openDeleteModal = (id) => {
    setProductToDelete(id);
    setShowModal(true);
  };

  // Handle delete action
  const handleDelete = () => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productToDelete));
    setShowModal(false);
  };

  // Handle cancel delete action
  const handleCancelDelete = () => {
    setProductToDelete(null);
    setShowModal(false);
  };

  // Check if there are no products
  const isCartEmpty = products.length === 0;

  // Calculate shipping and discount
  const shippingFee = 30000;
  const discount = 20000;

  return (
    <div>
      <main className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark text-white">
                  <tr>
                    <th>#</th>
                    <th>Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Số Lượng</th>
                    <th>Giá Gốc</th>
                    <th>Giá Giảm</th>
                    <th>Tổng Tiền</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-thumbnail img-large"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={product.quantity}
                          min="1"
                          className="form-control w-50 mx-auto"
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        />
                      </td>
                      <td>{product.originalPrice.toLocaleString()}₫</td>
                      <td>{product.discountedPrice.toLocaleString()}₫</td>
                      <td>{(product.discountedPrice * product.quantity).toLocaleString()}₫</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => openDeleteModal(product.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" className="text-end fw-bold">Tạm Tính</td>
                    <td colSpan="2">{totalAmount.toLocaleString()}₫</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header text-white" style={{ backgroundColor: '#4b3832' }}>
                <h5>Thông Tin Đơn Hàng</h5>
              </div>
              <div className="card-body">
                <p className="mb-2"><strong>Người Nhận:</strong> Nguyễn Văn A</p>
                <p className="mb-3"><strong>Số Điện Thoại:</strong> 0123 456 789</p>
                <p className="mb-3"><strong>Địa Chỉ Giao Hàng:</strong></p>
                <p>123 Đường Cà Phê, Quận 1, TP.HCM</p>
                <p className="mb-3"><strong><a href="#" data-bs-toggle="modal" data-bs-target="#voucherModal">Chọn Voucher</a></strong></p>
                <p className="mb-3"><strong>Chọn Phương Thức Thanh Toán:</strong></p>
                <div className="mb-3">
                  <select className="form-select" aria-label="Chọn phương thức thanh toán">
                    <option value="credit-card">Thẻ tín dụng</option>
                    <option value="bank-transfer">Chuyển khoản ngân hàng</option>
                    <option value="cash-on-delivery">Thanh toán khi nhận hàng</option>
                  </select>
                </div>

                {/* Display discount and shipping fee only if cart is not empty */}
                {!isCartEmpty && (
                  <>
                    <p className="mb-2"><strong>Tạm Tính:</strong> {totalAmount.toLocaleString()}₫</p>
                    <p className="mb-2"><strong>Giảm Giá:</strong> -{discount.toLocaleString()}₫</p>
                    <p className="mb-3"><strong>Phí Vận Chuyển:</strong> {shippingFee.toLocaleString()}₫</p>
                  </>
                )}

                <hr />
                {/* Calculate total if the cart is not empty */}
                <p className="mb-0"><strong>Tổng Cộng:</strong> 
                  {isCartEmpty ? '0₫' : (totalAmount + shippingFee - discount).toLocaleString()}₫
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-3">
          <Link to='/Products'><button className="btn btn-primary">Tiếp Tục Mua Sắm</button></Link>
          <Link to='/Checkout'><button className="btn btn-primary">Thanh Toán</button> </Link>
        </div>
      </main>

      <ModalVoucher />

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="modal fade show" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Xóa Sản Phẩm</h5>
                <button type="button" className="btn-close" onClick={handleCancelDelete} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Bạn có chắc chắn muốn xóa sản phẩm này không?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Hủy</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThanhToan;
