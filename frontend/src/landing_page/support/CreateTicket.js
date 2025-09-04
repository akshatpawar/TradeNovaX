import React from 'react'

function CreateTicket() {
    return (

        <div className="container mt-4 px-5">
            <div className="accordion" id="supportAccordion">
                {/* Account Opening */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                        >
                            Account Opening
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className='supportList'>
                                <a href="#"><li>Resident Individual</li></a>
                                <a href="#"><li>Minor</li></a>
                                <a href="#"><li>Non Resident Indian (NRI)</li></a>
                                <a href="#"><li>Company, Partnership, HUF and LLP</li></a>
                                <a href="#"><li>Glossary</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Your TradeNovaX Account */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                        >
                            Your TradeNovaX Account
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className="supportList">
                                <a href="#"><li>Your Profile</li></a>
                                <a href="#"><li>Account modification</li></a>
                                <a href="#"><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                                <a href="#"><li>Nomination</li></a>
                                <a href="#"><li>Transfer and conversion of securities</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Kite */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                        >
                            Kite
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className="supportList">
                                <a href="#"><li>IPO</li></a>
                                <a href="#"><li>Trading FAQs</li></a>
                                <a href="#"><li>Margin Trading Facility (MTF) and Margins</li></a>
                                <a href="#"><li>Charts and orders</li></a>
                                <a href="#"><li>Alerts and Nudges</li></a>
                                <a href="#"><li>General</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Funds */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                        >
                            Funds
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className="supportList">
                                <a href="#"><li>Add money</li></a>
                                <a href="#"><li>Withdraw money</li></a>
                                <a href="#"><li>Add bank accounts</li></a>
                                <a href="#"><li>eMandates</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Console */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                        >
                            Console
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className="supportList">
                                <a href="#"><li>Portfolio</li></a>
                                <a href="#"><li>Corporate actions</li></a>
                                <a href="#"><li>Funds statement</li></a>
                                <a href="#"><li>Reports</li></a>
                                <a href="#"><li>Profile</li></a>
                                <a href="#"><li>Segments</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Coin */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                        >
                            Coin
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        data-bs-parent="#supportAccordion"
                    >
                        <div className="accordion-body">
                            <ul className="supportList">
                                <a href="#"><li>Mutual funds</li></a>
                                <a href="#"><li>National Pension Scheme (NPS)</li></a>
                                <a href="#"><li>Fixed Deposit (FD)</li></a>
                                <a href="#"><li>Features on Coin</li></a>
                                <a href="#"><li>Payments and Orders</li></a>
                                <a href="#"><li>General</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;