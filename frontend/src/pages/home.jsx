import React from 'react';

const homepage = () => {
    return (
        <>
            <div className='Main-title'>
                <div className="name">SUGANDHIM</div>
                <div className="quote">We care for your diet</div>

                <div className='social-links'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/fb.png')} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/insta.png')} alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/x.png')} alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../assets/yt.png')} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default homepage;