import React from "react";
import GalleryItem from "../components/GalleryItem";
import {
    img1,
    img11,
    img13,
    img10,
    img14,
    img3,
    img6,
    img7,
    img8,
    img9,
    img5,
    img4,
    img2,
    img12,
} from "../images";
function Gallery() {
    const title = "Lovely Smiles";
    const tag1 = "Design";
    const tag2 = "Illustrations";
    return (
        <section id="container">
            <div className="wrap-container">
                <div id="main-content" className="zerogrid">
                    <div className="wrap-content">
                        <div className="row">
                            <GalleryItem
                                img1={img11}
                                img2={img1}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img6}
                                img2={img8}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img14}
                                img2={img3}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                        </div>
                        <div className="row">
                            <GalleryItem
                                img1={img13}
                                img2={img10}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img3}
                                img2={img1}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img7}
                                img2={img9}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                        </div>
                        <div className="row">
                            <GalleryItem
                                img1={img5}
                                img2={img4}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img2}
                                img2={img12}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                            <GalleryItem
                                img1={img9}
                                img2={img7}
                                entryTitle={title}
                                tag1={tag1}
                                tag2={tag2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
