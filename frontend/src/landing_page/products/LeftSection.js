import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5 px-5">
            <div className="row">
                <div className="col-6">
                    <img style={{ maxWidth: "100%", height: "auto" }} src={imageURL} />
                </div>
                <div className="col-1"></div>
                <div className="col-5 px-5 mt-5">
                    <h2>{productName}</h2>
                    <p>{productDesription}</p>
                    <div>
                        <a className="text-decoration-none" href={tryDemo}>Try Demo{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="text-decoration-none" href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="mt-3">
                        <a className="text-decoration-none" href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a className="text-decoration-none" href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                style={{ marginLeft: "50px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;