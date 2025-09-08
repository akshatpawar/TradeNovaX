import React from 'react'

function Team() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h2 className="fs-3 text-center ">About Me</h2>
            </div>

            <div
                className="row px-5 py-2 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="/media/images/Akshat.png"
                        alt="Akshat"
                        style={{ borderRadius: "100%", width: "50%" }}
                    />
                    <h5 className="mt-5 mb-2">Akshat Pawar</h5>
                    <h6>Software Engineer</h6>
                    <h6>Full-Stack & AI/ML Enthusiast</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        I focus on writing clean, efficient code and building solutions that make an impact. Open to challenges and eager to learn, I thrive in dynamic environments where innovation and collaboration drive results.
                    </p>
                    <p>
                        With experience in both web development and introductory AI/ML, I have worked on projects that explore the use of machine learning while also delivering full-stack applications. My approach is rooted in adaptability and continuous improvement, always aiming to create solutions that are practical and effective.
                    </p>
                    <p>
                        Connect on <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/akshatpawar/" target='_blank'>Linkedin</a> / <a style={{ textDecoration: "none" }} href="https://www.github.com/akshatpawar/" target='_blank'>GitHub</a> /{" "}
                        <a style={{ textDecoration: "none" }} href="https://akshatpawar.pages.dev/" target='_blank'>Portfolio</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;