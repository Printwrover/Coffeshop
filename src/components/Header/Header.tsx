import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/App.css';
import logo from '../../assets/img/Logo.png';
import Banner from '../Banner/Banner'; // Import the new Banner component

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu') && !event.target.closest('.btn-user')) {
                setDropdownOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header className="header bg-brown text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="ms-2">Mesu Coffee</h1>
                </div>

                <nav className="nav">
                    <ul className="d-flex list-unstyled mb-0">
                        <li className="nav-item"><Link to="/About">Trang Chủ</Link></li>
                        <li className="nav-item"><Link to="/Products">Sản Phẩm</Link></li>
                        <li className="nav-item"><Link to="/Introduce">Giới Thiệu</Link></li>
                        <li className="nav-item"><Link to="#about">Thông Tin</Link></li>
                        <li className="nav-item"><Link to="#contact">Liên Hệ</Link></li>
                    </ul>
                </nav>

                <div className="d-flex align-items-center position-relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        className="search-input"
                    />
                    <button className="btn btn-warning ms-2">Tìm</button>
                    <button className="btn btn-outline-light ms-2">
                        <i className="fa-solid fa-bell"></i>
                    </button>
                    <Link to='/cart'>
                        <button className="btn btn-outline-light ms-2">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </Link>
                    <div className="d-flex align-items-center position-relative">
                        <button className="btn btn-outline-light ms-2 btn-user" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            <i className="fas fa-user"></i>
                        </button>
                        <div className={`dropdown-menu position-absolute mt-2 bg-white shadow rounded ${isDropdownOpen ? 'show' : ''}`}>
                            <Link className="dropdown-item text-dark" to="/login">Đăng Nhập</Link>
                            <a className="dropdown-item text-dark" href="#profile">Hồ Sơ</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insert the Banner component */}
            <Banner />
        </header>
    );
};

export default Header;
