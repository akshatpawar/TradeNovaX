import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5 py-5'>
            <div className='row px-5 d-flex justify-content-center align-items-center'>
                <div className='col-5 px-5'>
                    <h2 className='fs-2'>Trust with confidence</h2>
                    <div className='mt-5'>
                        <h3 className='fs-4'>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='fs-4'>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='fs-4'>The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='fs-4'>Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-7 px-5'>
                    <img src='media/images/ecosystem.png' className='img-fluid' style={{ maxWidth: '100%', height: 'auto'}} alt='Ecosystem' />
                    <div className="text-center">
                        <a href="" className="mx-3" style={{ textDecoration: "none" }}>
                            Explore our products{" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="" className="mx-3" style={{ textDecoration: "none" }}>
                            Try Kite demo{" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='row mt-5 px-5 text-center'>
                <img src='media/images/press-logos.png' className='img-fluid' style={{ maxWidth: '60%', height: 'auto', margin: '0 auto' }} alt='Press-Logos' />
            </div>
        </div>
     );
}

export default Stats;