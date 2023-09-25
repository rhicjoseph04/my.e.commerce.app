import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'

const Home = ({detail, view, close, setClose, addtocart}) => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    // Fetch cart length from storage or wherever it's stored
    const storedCartLength = localStorage.getItem('cartLength');
    if (storedCartLength) {
      setCartLength(parseInt(storedCartLength));
    }
  }, []);

  return (
    <>
        {
        close ?
      
      
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                {/* <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p> */}
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='top_banner' style={{ backgroundImage: `url('./img/rjmoto1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className='container'>
    <div className='detail' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#fff' }}>Welcome to Motocares Shop</h2>
      <h3 style={{ color: '#fff', marginBottom: '20px' }}>"Your Ride, Our Passion"</h3>
      <Link to='/product' className='link' style={{ color: '#fff', textDecoration: 'none' }}>Shop Now <BsArrowRight /></Link>
    </div>
  </div>
</div>

<div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/kythelmet1.jpg' alt='helmet' />
          </div>
          <div className='detail'>
            <p>57 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/kythelmet2.png' alt='helmet' />
          </div>
          <div className='detail'>
            <p>26 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/kythelmets.png' alt='helmet' />
          </div>
          <div className='detail'>
            <p>49 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/kythelmet1.png' alt='cpu ' />
          </div>
          <div className='detail'>
            <p>72 products</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Order above 10,000 pesos</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>                                     
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
  <div className='container'>
    <div className='detail'>
      <h4 className='latest-tech'>Product Updates</h4>
      <h3 className='product-name'>NX-RACE – Espargaro Replica</h3>
      <p className='product-price'>$ 986</p>
      <Link to='/product' className='link'>
        Shop Now <BsArrowRight />
      </Link>
    </div>
    <div className='img_box'>
      <img src='./img/kytpu.png' alt='sliderimg' className='banner-image' />
    </div>
  </div>
</div>
<div className="cart-icon">
  <AiOutlineShoppingCart className="cart-icon" />
  <span className="cart-length">{cartLength}</span>
</div>

    </>
  )
}

export default Home