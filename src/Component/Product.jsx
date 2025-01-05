import React from 'react'
import './Product.css'
import im1 from '../images/p1.png'
import im2 from '../images/p2.png'
import im3 from '../images/p3.png'
import im4 from '../images/p4.png'
import im5 from '../images/p5.png'
import im6 from '../images/p6.png'
import im7 from '../images/p7.png'
import im8 from '../images/p8.png'
const Product = () => {
  return (
    <div>
        <div className="product">
            <br /><br /><br /><br /><br />
            <h1>LATEST PRODUCTS</h1><br /><br />

            <div className='product1'>
               
            <div className="product11 prom1">
                <p>New</p>
                <img src={im1} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>
            <div className="product11 prom2">
                  <p>New</p>
                <img src={im2} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom3">
                  <p>New</p>
                <img src={im3} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom4">
                  <p>New</p>
                <img src={im4} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom5">
                  <p>New</p>
                <img src={im5} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom6">
                  <p>New</p>
                <img src={im6} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom7">
                  <p>New</p>
                <img src={im7} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>

            <div className="product11 prom8">
                  <p>New</p>
                <img src={im8} alt="" /><br /><br /><br />
                <h3>Necklace <span style={{marginLeft:'70px'}}>Price 
                <span style={{color:'orange'}}>$200</span></span>
                </h3>
            </div>
            </div><br /><br />

<div style={{textAlign:'center'}}><button className='lbutton'>View All Product</button></div>
        </div>
    </div>
  )
}

export default Product
