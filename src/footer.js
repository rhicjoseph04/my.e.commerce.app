import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='about'>
          <div className='detail'>
            <p>Your Ride, Our Passion!</p>
            <div className='icon'>
              <RiFacebookFill />
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className='account'>
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className='page'>
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='payment'>
  <h3>Accepted Payments</h3>
  <img src='./img/visa.jpg' alt='Visa' className='payment-icon' />
  <img src='./img/mastercard.jpg' alt='Mastercard' className='payment-icon' />
  {<img src='./img/western.jpg' alt='Western' className='payment-icon' />}
</div>
      </div>
    </div>
  );
};

export default Footer;

