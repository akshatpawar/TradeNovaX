import React from 'react'

function Pricing() {
    return (
        <div className="container mt-5 py-5">
            <div className="row px-5">
                <div className="col-5 px-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        See Pricing{" "}
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-7  mb-5">
                    <div className="row text-center">
                        <div className="col">
                            <img style={{width: "120px"}} src='media/images/pricing0.svg' alt='Free account opening' />
                            <p style={{fontSize: "14px"}}>Free account opening</p>
                        </div>
                        <div className="col">
                            <img style={{width: "120px"}} src='media/images/pricing0.svg' alt='Free equity delivery' />
                            <p style={{fontSize: "14px"}}>
                                Free equity delivery and
                                <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className="col">
                            <img style={{width: "120px"}} src='media/images/intradayTrades.svg' alt='Intraday and F&O' />
                            <p style={{fontSize: "14px"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;