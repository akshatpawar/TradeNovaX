import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 my-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' />
                <h1 className='mb-2'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 fs-5 btn btn-primary mt-3' style={{width: '20%', margin: '0 auto'}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;