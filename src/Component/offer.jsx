import React from 'react'
import './Offer.css'
const offer = () => {
  return (
    <div id='Offer'>
      <div className="offer-main">
        <div className="offer offer1">
          <div className="offer-new offer-n">
          <h1>Upto 15% Off</h1><br />
          <button>Shop Now</button>
          </div>
        </div>
        <div className="offer offer2">
        <div className="offer-new1 offer-n">
          <h2 style={{color:'aliceblue'}}>Upto 10% Off</h2><br />
          <button>Shop Now</button>
          </div>
        </div>
        <div className="offer offer3">
        <div className="offer-new2 offer-n">
          <h2 style={{color:'aliceblue'}}>Upto 20% Off</h2><br />
          <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default offer
