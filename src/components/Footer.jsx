import React from "react";
import { Link } from "react-router-dom";
import {
    img1,
    img10,
    img11,
    img13,
    img2,
    img4,
    img5,
    img6,
    img9,
} from "../images";
function Footer() {
    return (
        <footer>
            <div className="zerogrid wrap-footer">
                <div className="row">
                    <div className="col-1-4 col-footer-1">
                        <div className="wrap-col">
                            <h3 className="widget-title">About Us</h3>
                            <p>
                                Ut volutpat consectetur aliquam. Curabitur
                                auctor in nis ulum ornare. Metus elit vehicula
                                dui. Curabitur auctor in nis ulum ornare. Sed
                                consequat, augue condimentum fermentum
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque la
                                udantium
                            </p>
                        </div>
                    </div>
                    <div className="col-1-4 col-footer-2">
                        <div className="wrap-col">
                            <h3 className="widget-title">Recent Post</h3>
                            <ul>
                                <li>
                                    <Link to="/">MOST VISITED COUNTRIES</Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        5 PLACES THAT MAKE A GREAT HOLIDAY
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        PEBBLE TIME STEEL IS ON TRACK TO SHIP IN
                                        JULY
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        STARTUP COMPANY???S CO-FOUNDER TALKS ON
                                        HIS NEW PRODUCT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-4 col-footer-3">
                        <div className="wrap-col">
                            <h3 className="widget-title">Tag Cloud</h3>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <Link to="/">cooking</Link>
                                <Link to="/">animals</Link>
                                <Link to="/">countries</Link>
                                <Link to="/">city</Link>
                                <Link to="/">children</Link>
                                <Link to="/">home</Link>
                                <Link to="/">likes</Link>
                                <Link to="/">photo</Link>
                                <Link to="/">link</Link>
                                <Link to="/">law</Link>
                                <Link to="/">shopping</Link>
                                <Link to="/">skate</Link>
                                <Link to="/">scholl</Link>
                                <Link to="/">video</Link>
                                <Link to="/">travel</Link>
                                <Link to="/">images</Link>
                                <Link to="/">love</Link>
                                <Link to="/">lists</Link>
                                <Link to="/">makeup</Link>
                                <Link to="/">media</Link>
                                <Link to="/">password</Link>
                                <Link to="/">pagination</Link>
                                <Link to="/">wildlife</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 col-footer-4">
                        <div className="wrap-col">
                            <h3 className="widget-title">Gallery</h3>
                            <div className="row">
                                <div className="col-1-3">
                                    <div className="wrap-col">
                                        <Link to="/">
                                            <img src={img11} alt="image11" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img1} alt="image1" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img13} alt="image13" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="wrap-col">
                                        <Link to="/">
                                            <img src={img10} alt="image10" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img9} alt="image9" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img4} alt="image4" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="wrap-col">
                                        <Link to="/">
                                            <img src={img2} alt="image2" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img6} alt="image6" />
                                        </Link>
                                        <Link to="/">
                                            <img src={img5} alt="image5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zerogrid bottom-footer">
                <div className="row">
                    <div className="bottom-social">
                        <Link to="/">
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-google-plus"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-pinterest"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-vimeo"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa fa-youtube"></i>
                        </Link>
                    </div>
                </div>
                <div className="copyright">
                    Copyright @ - Designed by{" "}
                    <a href="https://www.zerotheme.com">ZEROTHEME</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
