import React from 'react'

function Hero() {
    return (

        // <section className="container-fluid pt-5" id="supportHero">
        //     <div className="p-5 " id="supportWrapper">
        //         <h4>Support Portal</h4>
        //         <a href="">Track Tickets</a>
        //     </div>
        //     <div className="row mx-5" id="supportContent">
        //         <div className="col-6 p-5">
        //             <h1 className="fs-3">
        //                 Search for an answer or browse help topics to create a ticket
        //             </h1>
        //             <input placeholder="Eg. how do I activate F&O" />
        //             <br />
        //             <a href="">Track account opening</a>{' '}
        //             <a href="">Track segment activation</a>{' '}
        //             <a href="">Intraday margins</a>{' '}
        //             <a href="">Kite user manual</a>
        //         </div>
        //         <div className="col-6 p-5">
        //             <h1 className="fs-3">Featured</h1>
        //             <ol>
        //                 <li>
        //                     <a href="">Current Takeovers and Delisting - January 2024</a>
        //                 </li>
        //                 <li>
        //                     <a href="">Latest Intraday leverages - MIS & CO</a>
        //                 </li>
        //             </ol>
        //         </div>
        //     </div>
        // </section>


        <section className="container-fluid mt-5 p-5 bg-light">
            <div className="container mt-5 px-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className='text-dark'>Support Portal</h2>
                    <button className="btn btn-primary">My tickets</button>
                </div>
                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;