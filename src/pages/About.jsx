import React from "react";
import { Link } from "react-router-dom";
import { slide2 } from "../images";
function About() {
    return (
        <section id="container">
            <div className="wrap-container">
                <div id="main-content">
                    <div className="wrap-content">
                        <div className="row">
                            <article className="single-post zerogrid">
                                <div className="row wrap-post">
                                    <div className="entry-header">
                                        <span className="time">
                                            June 26, 2013 by admin
                                        </span>
                                        <h2 className="entry-title">
                                            <Link to="/">
                                                RETRO GALLERY: FRAGMENTING
                                                PERSISTENT FLIGHT AND PATHOLOGY
                                            </Link>
                                        </h2>
                                        <span className="cat-links">
                                            <Link to="/">BUSINESS</Link>,{" "}
                                            <Link to="/">LIFESTYLE</Link>
                                        </span>
                                    </div>
                                    <div className="post-thumbnail-wrap">
                                        <img src={slide2} alt="" />
                                    </div>
                                    <div className="entry-content">
                                        <div className="excerpt">
                                            <p>
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum
                                                exercitation ullamco laboris
                                                nisi ut aliquip.
                                            </p>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum. Consetetur sadipscing
                                            elitr, sed diam nonumy eirmod tempor
                                            invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At
                                            vero eos et accusam et justo duo
                                            dolores et ea rebum.
                                        </p>
                                        <blockquote>
                                            <p>
                                                Stet clita kasd gubergren, no
                                                sea takimata sanctus est Lorem
                                                ipsum dolor sit amet vultatup
                                                duista.
                                            </p>
                                        </blockquote>
                                        <p>
                                            Duis autem vel eum iriure dolor in
                                            hendrerit in vulputate velit esse
                                            molestie consequat, vel illum dolore
                                            eu feugiat nulla facilisis at vero
                                            eros et accumsan et iusto odio
                                            dignissim qui blandit praesent
                                            luptatum zzril.
                                        </p>
                                        <h2>Heading 1</h2>
                                        <p>
                                            Ut wisi enim ad minim veniam, quis
                                            nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl ut aliquip ex
                                            ea commodo consequat. Duis autem vel
                                            eum iriure dolor in hendrerit in
                                            vulputate velit esse lorem ipsum
                                            dolor sit amet.
                                        </p>
                                        <h2>Heading 2</h2>
                                        <p>
                                            Duis autem vel eum iriure dolor in
                                            hendrerit in vulputate velit esse
                                            molestie consequat, vel illum dolore
                                            eu feugiat nulla facilisis. At vero
                                            eos et accusam et justo.
                                        </p>
                                        <h2>Heading 3</h2>
                                        <p>
                                            Consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum hendrerit in vulputate
                                            velit esse molestie.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum.
                                        </p>
                                        <p>
                                            <code>
                                                Stet clita kasd gubergren, no
                                                sea takimata sanctus est Lorem
                                                ipsum dolor sit amet.
                                            </code>
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum. Stet clita kasd gubergren,
                                            no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet.
                                        </p>
                                        <div className="note">
                                            <ol>
                                                <li>Lorem ipsum</li>
                                                <li>
                                                    Sit amet vultatup nonumy
                                                </li>
                                                <li>Duista sed diam</li>
                                            </ol>
                                            <div className="clear"></div>
                                        </div>
                                        <p>
                                            Duis autem vel eum iriure dolor in
                                            hendrerit in vulputate velit esse
                                            molestie consequat, vel illum dolore
                                            eu feugiat nulla facilisis at vero
                                            eros et accumsan et iusto odio
                                            dignissim qui blandit praesent
                                            luptatum zzril delenit augue duis
                                            dolore te feugait nulla facilisi.
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt
                                            ut laoreet dolore magna aliquam erat
                                            volutpat.
                                        </p>
                                        <p>
                                            Consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores.
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <div className="zerogrid">
                                <div className="comments-are">
                                    <div id="comment">
                                        <h3>Leave a Reply</h3>
                                        <span>
                                            Your email address will not be
                                            published. Required fields are
                                            marked{" "}
                                        </span>
                                        <form
                                            name="comment_form"
                                            id="comment_form"
                                            method="post"
                                            action=""
                                        >
                                            <label>
                                                <span>Comment:</span>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                ></textarea>
                                            </label>
                                            <label>
                                                <span>Name:</span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                />
                                            </label>
                                            <label>
                                                <span>Email:</span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                />
                                            </label>
                                            <center>
                                                <input
                                                    className="sendButton"
                                                    type="submit"
                                                    name="submitcomment"
                                                    value="Submit"
                                                />
                                            </center>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
