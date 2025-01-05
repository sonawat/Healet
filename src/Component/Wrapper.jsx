import React, { useRef } from 'react';
import './Wrapper.css';

const Wrapper = () => {
    const wrMainRef = useRef(null);

    const next = () => {
        const wrMain = wrMainRef.current;
        const slideWidth = wrMain.offsetWidth;

        wrMain.scrollBy({
            left: slideWidth,
            behavior: 'smooth',
        });
    };

    const prev = () => {
        const wrMain = wrMainRef.current;
        const slideWidth = wrMain.offsetWidth;

        wrMain.scrollBy({
            left: -slideWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div id='Testimonial'>
       <br /><br /> <h1 style={{textAlign:'center'}}>TESTIMONIAL</h1>
        <div id='Wrapper'>

       
            <div className='Wrmain' ref={wrMainRef}>
                <div className="Wr">
                <br /><br />
                    <div className='wrimg'>
                    </div>
                    <br />
                    <h2 style={{color:'orangered'}}>Samantha Jonas</h2>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial',marginTop:'8px'}}>It is a long established fact that a reader will be distracted by the readable cIt is a long  </p>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial'}}>established fact that a reader will be distracted by the readable c</p>
                    <br /><br /></div>

                    <div className="Wr">
                <br /><br />
                    <div className='wrimg'>
                    </div>
                    <br />
                    <h2 style={{color:'orangered'}}>Samantha Jonas</h2>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial',marginTop:'8px'}}>It is a long established fact that a reader will be distracted by the readable cIt is a long  </p>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial'}}>established fact that a reader will be distracted by the readable c</p>
                    <br /><br /></div>

                    <div className="Wr">
                <br /><br />
                    <div className='wrimg'>
                    </div>
                    <br />
                    <h2 style={{color:'orangered'}}>Samantha Jonas</h2>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial',marginTop:'8px'}}>It is a long established fact that a reader will be distracted by the readable cIt is a long  </p>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial'}}>established fact that a reader will be distracted by the readable c</p>
                    <br /><br /></div>

                    <div className="Wr">
                <br /><br />
                    <div className='wrimg'>
                    </div>
                    <br />
                    <h2 style={{color:'orangered'}}>Samantha Jonas</h2>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial',marginTop:'8px'}}>It is a long established fact that a reader will be distracted by the readable cIt is a long  </p>
                    <p style={{fontSize:'20px',fontFamily:'-moz-initial'}}>established fact that a reader will be distracted by the readable c</p>
                    <br /><br /></div>
                {/* <div className="Wr">2</div>
                <div className="Wr">3</div>
                <div className="Wr">4</div> */}
            </div>
            <div className="btn-container">
                <button className='bt' onClick={prev}>Prev</button>
                <button className='bt' onClick={next}>Next</button>
            </div>
        <br /><br /></div></div>
    );
};

export default Wrapper;
