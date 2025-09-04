import React from 'react'

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo1.png" style={{ width: "50%" }} />
                        <p className='mt-3 text-muted'>&copy; TradeNovaX Broking Pvt. Ltd.<br /> All rights reserved.</p>
                    </div>
                    <div className="col">
                        <p className='foot-li fs-5'>Company</p>
                        <a className='foot-li' href="">About</a>
                        <br />
                        <a className='foot-li' href="">Products</a>
                        <br />
                        <a className='foot-li' href="">Pricing</a>
                        <br />
                        <a className='foot-li' href="">Referral programme</a>
                        <br />
                        <a className='foot-li' href="">Careers</a>
                        <br />
                        <a className='foot-li' href="">Zerodha.tech</a>
                        <br />
                        <a className='foot-li' href="">Press & media</a>
                        <br />
                        <a className='foot-li' href="">Zerodha cares (CSR)</a>
                        <br />
                    </div>
                    <div className="col">
                        <p className='foot-li fs-5'>Support</p>
                        <a className='foot-li' href="">Contact</a>
                        <br />
                        <a className='foot-li' href="">Support portal</a>
                        <br />
                        <a className='foot-li' href="">Z-Connect blog</a>
                        <br />
                        <a className='foot-li' href="">List of charges</a>
                        <br />
                        <a className='foot-li' href="">Downloads & resources</a>
                        <br />
                    </div>
                    <div className="col">
                        <p className='foot-li fs-5'>Account</p>
                        <a className='foot-li' href="">Open an account</a>
                        <br />
                        <a className='foot-li' href="">Fund transfer</a>
                        <br />
                        <a className='foot-li' href="">60 day challenge</a>
                        <br />
                    </div>
                </div>
                <div className="my-5 text-muted" style={{ fontSize: "12px" }}>
                    <p>
                        TradeNovaX Broking Pvt. Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ0000XXXX
                        CDSL: Depository services through TradeNovaX Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-XXX-20XX
                        Commodity Trading through TradeNovaX Commodities Pvt. Ltd. MCX: XXXXX – SEBI Registration no.: INZ0000XXXX
                        Registered Address: TradeNovaX Broking Pvt. Ltd., #XX1/XX2, 5th Cross, Tech Park Road, Opp. Green Valley School, J.P. Nagar 5th Phase, Bengaluru - 560078, Karnataka, India.

                        For any complaints pertaining to securities broking please write to complaints@tradenovax.com
                        , and for DP-related queries to dp@tradenovax.com
                        . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
                        Benefits: Effective communication and speedy redressal of grievances.
                    </p>

                    <p>
                        Investments in securities markets are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock broker. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                        KYC is a one-time exercise while dealing in securities markets. Once KYC is done through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when approaching another intermediary.
                        Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please provide your Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account.
                        As a business, TradeNovaX does not provide stock tips and has not authorized anyone to trade on behalf of clients. If you find anyone claiming to be part of TradeNovaX and offering such services, please contact us at report@tradenovax.com
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;