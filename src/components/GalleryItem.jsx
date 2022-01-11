import React from "react";
import { Link } from "react-router-dom";
function GalleryItem({ img1, img2, entryTitle, tag1, tag2 }) {
    return (
        <div className="col-1-3">
            <div className="wrap-col">
                <article>
                    <div className="post-thumbnail-wrap">
                        <Link to="/" className="portfolio-box">
                            <img src={img2} alt="fds" />
                            <div className="portfolio-box-second">
                                <img src={img1} alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="entry-header ">
                        <h3 className="entry-title">{entryTitle}</h3>
                        <div className="l-tags">
                            <Link to="/">{tag1}</Link> /
                            <Link to="/">{tag2}</Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default GalleryItem;
