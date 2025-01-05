import React from 'react'
import './Latest.css'; // Importing the CSS file
import postImage1 from '../images/b1.jpg'; // Importing the first image
import postImage2 from '../images/b2.jpg'; // Importing the second image

const Latest = () => {
  return (
    <div id='Latest'>
    <div className="latest-container">
      <h1 style={{textAlign:'center'}}>LATEST FROM BLOG</h1><br />
      <div className="latest-posts">
        <div className="post">
          <img src={postImage1} alt="Post 1" className="post-image" />
          <div style={{padding:'20px',backgroundColor:'#ddd'}}>
          <h2 style={{padding:'7px'}}>Molestiae ad reiciendis dignissimos</h2>
          <p style={{padding:'7px'}}>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <br /><button className='read-more-btn'>Read More</button>
          </div>
        </div>
        <div className="post">
          <img src={postImage2} alt="Post 2" className="post-image" />
          <div style={{padding:'20px',backgroundColor:'#ddd'}}>
          <h2 style={{padding:'7px'}}>Dolores vel maiores voluptatem enim</h2>
          <p style={{padding:'7px'}}>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <br /><button className='read-more-btn'>Read More</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Latest
