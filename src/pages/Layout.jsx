import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <header className="">
                <div className="logo">
                    <a href="#">zVintauge</a>
                    <span>Collectible Vintage & Antique Photos</span>
                </div>
                <div id="cssmenu" className="align-center">
                    <ul>
                        <li className="active">
                            <a href="index.html">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="gallery.html">
                                <span>Gallery</span>
                            </a>
                        </li>
                        <li className="has-sub">
                            <a href="archive.html">
                                <span>Blog</span>
                            </a>
                            <ul>
                                <li className="has-sub">
                                    <a href="#">
                                        <span>Item 1</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span>Sub Item</span>
                                            </a>
                                        </li>
                                        <li className="last">
                                            <a href="#">
                                                <span>Sub Item</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a href="#">
                                        <span>Item 2</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span>Sub Item</span>
                                            </a>
                                        </li>
                                        <li className="last">
                                            <a href="#">
                                                <span>Sub Item</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="single.html">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="last">
                            <a href="contact.html">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="owl-slide" className="owl-carousel">
                    <div className="item">
                        <img
                            src="../../public/assets/images/slide1.jpg"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../../public/assets/images/slide2.jpg"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../../public/assets/images/slide3.jpg"
                            alt="Slide 3"
                        />
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;
