import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className="container mt-5 px-5">
            <div className="row">
                <div className="col-5 px-5 mt-5">
                    <h2>{productName}</h2>
                    <p>{productDesription}</p>
                    <div>
                        <a className="text-decoration-none" href={learnMore}>Learn More{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img style={{ maxWidth: "100%", height: "auto" }} src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;