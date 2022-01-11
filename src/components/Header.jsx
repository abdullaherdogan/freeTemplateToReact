import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
    return (
        <header className="">
            <div className="logo">
                <Link to="/">zVintauge</Link>
                <span>Collectible Vintage & Antique Photos</span>
            </div>
            <div id="cssmenu" className="align-center">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeClassName="active">
                            <span>Gallery</span>
                        </NavLink>
                    </li>
                    <li className="has-sub">
                        <NavLink to="/" activeClassName="active">
                            <span>Blog</span>
                        </NavLink>
                        <ul>
                            <li className="has-sub">
                                <Link to="/">
                                    <span>Item 1</span>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <span>Sub Item</span>
                                        </Link>
                                    </li>
                                    <li className="last">
                                        <Link to="/">
                                            <span>Sub Item</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <Link to="/">
                                    <span>Item 2</span>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <span>Sub Item</span>
                                        </Link>
                                    </li>
                                    <li className="last">
                                        <Link to="/">
                                            <span>Sub Item</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li className="last">
                        <NavLink to="/contact" activeClassName="active">
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
