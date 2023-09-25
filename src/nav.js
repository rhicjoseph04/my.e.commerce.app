import React, { useState } from 'react'
import { FaMotorcycle, } from 'react-icons/fa';
import {  AiOutlineAccountBook } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const   { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    
  return (
    <>
<div className='free' style={{ padding: '20px' }}>
  <div className='icon'>
    <FaMotorcycle />

  <p>Your Journey Awaits with <span className='free-shipping-text'>FREE Shipping! 🚚</span></p>  </div>

</div>

<div className='main_header'style={{ display: 'flex', justifyContent: 'center' }}>
  <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div className='logo' style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
      <img src='./img/motocareslogo.jpg' alt='logo' className='logo-img' style={{ maxWidth: '80px', height: 'auto' }} />
      <div>
        <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', marginLeft: '10px', fontFamily: 'Arial, sans-serif' }}>Motocares Motorshop</h2>
      </div>
    </div>
    <div className='search_box' style={{ display: 'flex', alignItems: 'center', marginRight: '20px', flex: 1 }}>
      <input
        type='text'
        value={search}
        placeholder='Search Your Product...'
        autoComplete='off'
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px', width: '100%' }}
      />
      <button onClick={() => searchbtn(search)} style={{ padding: '10px 20px', background: '#1e90ff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
    </div>
  </div>
</div>


<div className='header' style={{ color: '#fff', display: 'flex', justifyContent: '', alignItems: 'center' }}>
  <div className='nav'>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
      <li style={{ marginRight: '20px' }}>
        <Link to='/' className='link' style={{ textDecoration: 'none', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
          Home
        </Link>
      </li>
      <li style={{ marginRight: '20px' }}>
        <Link to='/product' className='link' style={{ textDecoration: 'none', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
          Product
        </Link>
      </li>
      <li style={{ marginRight: '20px' }}>
        <Link to='/about' className='link' style={{ textDecoration: 'none', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
          About
        </Link>
      </li>
      <li>
        <Link to='/contact' className='link' style={{ textDecoration: 'none', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
          Contact
        </Link>
      </li>
    </ul>
  </div>

  <div className='auth' style={{ display: 'flex', alignItems: 'center' }}>
  {isAuthenticated ? (
    <button onClick={logout} style={{ fontSize: '18px', fontWeight: 'bold', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
      <CiLogout /> Logout
    </button>
  ) : (
    <button onClick={loginWithRedirect} style={{ fontSize: '18px', fontWeight: 'bold', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
      <CiLogin /> Login
    </button>
  )}

  <div className='icon' style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
    {isAuthenticated && (
      <div className='account' style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
        <div className='user_icon' style={{ marginRight: '10px', fontSize: '22px', color: '#fff', cursor: 'pointer' }}>
          <AiOutlineAccountBook />
        </div>
        <p style={{ margin: 0, fontSize: '18px', color: '#fff' }}>Hello, {user.name}</p>
      </div>
    )}
    <div className='second_icon' style={{ display: 'flex', alignItems: 'center' }}>
      <Link to='/' className='link' style={{ marginRight: '10px', fontSize: '22px', color: '#fff' }}>
        <AiOutlineUser />
      </Link>
      <Link to='/cart' className='link' style={{ fontSize: '22px', color: '#fff' }}>
        <BsBagCheck />
      </Link>
    </div>
  </div>
</div>

    </div>
  



    </>
  )
}

export default Nav