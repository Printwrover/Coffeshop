import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Sử dụng Routes thay vì Switch
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/AboutUs/AboutUs';
import Login from './Page/Login/Login';
import Products from './Page/Products/Products';
import Register from './Page/Register/Register';
import ThanhToan from './Page/ThanhToan/ThanhToan';
import ModalVoucher from './components/ModalVoucher/ModalVoucher';
import Cart from './Page/Cart/Cart';
import Checkout from './Page/Checkout/Checkout';
import Detail from './Page/Detail/Detail';
import Introduce from './components/Introduce/Introduce';
const App = () => {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Routes> {/* Sử dụng Routes thay vì Switch */}
                    <Route path="/" element={<About />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/login" element={<Login />} /> {/* Route cho trang đăng nhập */}
                    <Route path="/about" element={<About />} /> {/* Route cho trang giới thiệu */}
                    <Route path="/products" element={<Products />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/detail" element={<Detail />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/register" element={<Register />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/thanhtoan" element={<ThanhToan />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/modalVoucher" element={<ModalVoucher />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/cart" element={<Cart />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/checkout" element={<Checkout />} /> {/* Hiển thị About khi ở trang chủ */}
                    <Route path="/introduce" element={<Introduce />} /> {/* Hiển thị About khi ở trang chủ */}

                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;