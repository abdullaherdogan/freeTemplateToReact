import React from "react";
import Carousel from "../components/Carousel";
import GalleryItem from "../components/GalleryItem";
import {
    img1,
    img11,
    img12,
    img14,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    slide1,
    slide2,
    slide3,
} from "../images";
function Home() {
    return (
        <>
            <Carousel />
            <section id="container">
                <div className="wrap-container">
                    <section className="content-box box-1">
                        <div className="zerogrid">
                            <div className="wrap-box">
                                <div className="box-header">
                                    <h2>ABOUT US</h2>
                                </div>
                                <div className="box-content">
                                    <p>
                                        Lorem ipsum dosectetur adipisicing elit,
                                        sed do.Lorem ipsum dolor sit amet,
                                        consectetur Nulla <br />
                                        fringilla purus at leo dignissim congue.
                                        Mauris elementum accumsan leo vel
                                        tempor. Sit amet cursus nisl aliquam.{" "}
                                        <br />
                                        Aliquam et elit eu nunc rhoncus viverra
                                        quis at felis. Sed do
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-box box-style-1 box-2">
                        <div className="zerogrid">
                            <div className="wrap-box">
                                <div className="row">
                                    <GalleryItem
                                        img1={img1}
                                        img2={img11}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                    <GalleryItem
                                        img1={img6}
                                        img2={img8}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                    <GalleryItem
                                        img1={img14}
                                        img2={img3}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                </div>
                                <div className="row">
                                    <GalleryItem
                                        img1={img5}
                                        img2={img4}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                    <GalleryItem
                                        img1={img2}
                                        img2={img12}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                    <GalleryItem
                                        img1={img9}
                                        img2={img7}
                                        entryTitle="Lovely Smiles"
                                        tag1="Design"
                                        tag2="Illustrations"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-box box-3">
                        <div className="zerogrid">
                            <div className="wrap-box">
                                <div className="box-header">
                                    <h2>OUR PHILOSOPHY</h2>
                                </div>
                                <div className="box-content">
                                    <div className="row">
                                        <div className="col-1-2">
                                            <div className="wrap-col">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit, sed diam nonummy nibh
                                                    euismod tincidunt ut laoreet
                                                    dolore magna aliquam erat
                                                    volutpat. Ut wisi enim ad
                                                    minim veniam, quis nostrud
                                                    exerci tation ullamcorper
                                                    suscipit lobortis nisl ut
                                                    aliquip ex ea commodo
                                                    consequat. Duis autem vel
                                                    eum iriure dolor in
                                                    hendrerit in vulputate velit
                                                    esse molestie consequat, vel
                                                    illum dolore eu feugiat
                                                    nulla facilisis at vero eros
                                                    et accumsan et iusto odio
                                                    dignissim qui blandit
                                                    praesent luptatum zzril.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-1-2">
                                            <div className="wrap-col">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit, sed diam nonummy nibh
                                                    euismod tincidunt ut laoreet
                                                    dolore magna aliquam erat
                                                    volutpat. Ut wisi enim ad
                                                    minim veniam, quis nostrud
                                                    exerci tation ullamcorper
                                                    suscipit lobortis nisl ut
                                                    aliquip ex ea commodo
                                                    consequat. Duis autem vel
                                                    eum iriure dolor in
                                                    hendrerit in vulputate velit
                                                    esse molestie consequat, vel
                                                    illum dolore eu feugiat
                                                    nulla facilisis at vero eros
                                                    et accumsan et iusto odio
                                                    dignissim qui blandit
                                                    praesent luptatum zzril.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <blockquote>
                                            <p>
                                                Stet clita kasd gubergren, no
                                                sea takimata sanctus est Lorem
                                                ipsum dolor sit amet vultatup
                                                duista.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-box box-style-1 box-4">
                        <div className="zerogrid" style={{ width: "100%" }}>
                            <div className="wrap-box">
                                <div className="row">
                                    <article>
                                        <div className="col-1-2">
                                            <img src={slide1} alt="" />
                                        </div>
                                        <div className="col-1-2">
                                            <div className="entry-content t-center">
                                                <h3>
                                                    The title on the article
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam viverra convallis
                                                    auctor. Sed accumsan libero
                                                    quis mi commodo et suscipit
                                                    enim lacinia. Morbi rutrum
                                                    vulputate est sed
                                                    faucibus.consectetur
                                                    adipiscing elit. Aliquam
                                                    viverra convallis auctor.
                                                    Sed accumsan libero quis mi
                                                    commodo et suscipit enim
                                                    lacinia.
                                                </p>
                                                <a
                                                    className="button"
                                                    href="single.html"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="row">
                                    <article>
                                        <div className="col-1-2 f-right">
                                            <img src={slide2} alt="" />
                                        </div>
                                        <div className="col-1-2">
                                            <div className="entry-content t-center">
                                                <h3>
                                                    The title on the article
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam viverra convallis
                                                    auctor. Sed accumsan libero
                                                    quis mi commodo et suscipit
                                                    enim lacinia. Morbi rutrum
                                                    vulputate est sed
                                                    faucibus.consectetur
                                                    adipiscing elit. Aliquam
                                                    viverra convallis auctor.
                                                    Sed accumsan libero quis mi
                                                    commodo et suscipit enim
                                                    lacinia.
                                                </p>
                                                <a
                                                    className="button"
                                                    href="single.html"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="row">
                                    <article>
                                        <div className="col-1-2">
                                            <img src={slide3} alt="" />
                                        </div>
                                        <div className="col-1-2">
                                            <div className="entry-content t-center">
                                                <h3>
                                                    The title on the article
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam viverra convallis
                                                    auctor. Sed accumsan libero
                                                    quis mi commodo et suscipit
                                                    enim lacinia. Morbi rutrum
                                                    vulputate est sed
                                                    faucibus.consectetur
                                                    adipiscing elit. Aliquam
                                                    viverra convallis auctor.
                                                    Sed accumsan libero quis mi
                                                    commodo et suscipit enim
                                                    lacinia.
                                                </p>
                                                <a
                                                    className="button"
                                                    href="single.html"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Home;
