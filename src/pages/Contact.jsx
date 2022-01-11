import React from "react";

function Contact() {
    return (
        <section id="container">
            <div className="wrap-container">
                <section className="content-box zerogrid">
                    <div className="row wrap-box">
                        <h3
                            className="t-center"
                            style={{ fontSize: "30px", margin: "10px 0 30px" }}
                        >
                            Contact Form
                        </h3>
                        <div className="embed-container maps">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162295!2d-120.7989351!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sMain+St%2C+Denair%2C+CA+95316%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434"
                                width="100%"
                                height="450px"
                                frameborder="0"
                                style={{ border: 0 }}
                            ></iframe>
                        </div>
                        <div id="contact_form">
                            <form
                                name="form1"
                                id="ff"
                                method="post"
                                action="contact.php"
                            >
                                <label className="row">
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter name"
                                                required="required"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email"
                                                required="required"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                                required="required"
                                            />
                                        </div>
                                    </div>
                                </label>
                                <label className="row">
                                    <div className="wrap-col">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            rows="4"
                                            cols="25"
                                            required="required"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                </label>
                                <center>
                                    <input
                                        className="sendButton"
                                        type="submit"
                                        name="submitcontact"
                                        value="Submit"
                                    />
                                </center>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Contact;
