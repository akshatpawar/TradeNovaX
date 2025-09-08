import React from 'react'

function Hero() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row p-5 mb-5">
                <h2 className="fs-3 text-center">
                    I am building impactful solutions through technology
                    <br />
                    and exploring innovation with every project I create.
                </h2>
            </div>

            <div
                className="row p-5 mt-5 border-top text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-5">
                    <p>
                        I am a Computer Science Engineering graduate (2025) specializing in Artificial Intelligence & Machine Learning and full-stack development. 
                    </p>
                    <p>
                        With hands-on experience in technologies such as Python, SQL, Java, JavaScript, HTML, CSS, ReactJS, Node.js, TensorFlow, PyTorch, YOLOv9, OpenCV, Pandas, NumPy, Matplotlib, Git, Linux, and Vercel, I focus on solving problems through clean and efficient code.
                    </p>
                </div>
                <div className="col-6 p-5">
                    <p>
                        I have built projects ranging from AI/ML experiments like an object detection system for marine life, to web applications such as MiniMind, my personal portfolio, and a contact manager.
                    </p>
                    <p>
                        These experiences reflect my adaptability and passion for creating innovative solutions that combine software engineering and modern technologies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;