import './Menubar.css';
import {assets} from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Menubar = () => {
const[active,setActive] =  useState('home');

const navigate = useNavigate();


const {quantities} =   useContext(StoreContext);
const uniqueItemsCart = Object.values(quantities).filter(qty => qty > 0).length;
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to={`/`}>
    <img src={assets.logo} alt="" className='mx-4' height={48} width={48} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={active === 'home' ? "nav-link fw-bold active" : "nav-link" } to="/home" onClick={() => setActive('home')}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={active === 'explore' ? "nav-link fw-bold active" : "nav-link" } to="/explore" onClick={() => setActive('explore')}>Explore</Link>
        </li>
     <li className="nav-item">
          <Link className={active === 'contact' ? "nav-link fw-bold active" : "nav-link" } to="/contact" onClick={() => setActive('contact')}>Contact Us</Link>
        </li>
      </ul>
      <div className='d-flex align-items-center gap-4'>
        <Link to={`/cart`}>
        <div className="position-relative">
          <img src={assets.cart} alt="Cart" height={32} width={32} className='position-relative' />
          <span className='position-absolute top-0 start-100 tranlate-middle badge rounded-pill bg-danger'   style={{ fontSize: "0.75rem" }}>{uniqueItemsCart}</span>
        </div>
        </Link>

        <button className='btn btn-outline-primary' onClick={()=>navigate('/login')}>Login</button>
        <button className='btn btn-outline-success' onClick={()=>navigate('/register')}>Register</button>

      </div>
      </div>
  </div>
</nav>
  )
}

export default Menubar;