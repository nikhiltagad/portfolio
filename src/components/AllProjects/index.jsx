import React, { useEffect, useState } from "react";
import ContactButton from "../ContactButton/Index";

const products = [
    { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
    { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
    { title: "Rogue", link: "https://userogue.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
    { title: "Editorially", link: "https://editorially.org", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
    { title: "Editrix AI", link: "https://editrix.ai", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png" },
    { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
    { title: "Algochurn", link: "https://algochurn.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png" },
    { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
];

const AllProjects = () => {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const splitProducts = (products) => {
        const firstRow = products.slice(0, 4);
        const secondRow = products.slice(4, 8);
        return [firstRow, secondRow];
    };

    const rows = splitProducts(products);

    return (
        <div id="hero-parallax" className="hero-container">
            <div className="products-container">
                {rows.map((row, rowIndex) => (
                    <div
                        className={`row row-${rowIndex + 1}`}
                        style={{
                            transform: `translateX(${scrollTop * 0.5 * (rowIndex % 2 === 0 ? 1 : -1)}px)`,
                        }}
                        key={rowIndex}
                    >
                        {row.map((product, index) => (
                            <div className="product-card" key={index}>
                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                    <img src={product.thumbnail} alt={product.title} />
                                </a>
                                <div className="overlay"></div>
                                <h2>{product.title}</h2>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="header">
                <div>
                    <h1>Made with<br /><span style={{ color: '#007BFF' }}>Code</span> and <span style={{ color: '#6F4E37' }}>Coffee</span> </h1>
                    <p>
                        Fueling creativity with a blend of code and coffee, where innovation brews one line at a time.
                    </p>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-4">
                <ContactButton content="Web Designs" />
                <ContactButton content="Frontend" />
                <ContactButton content="Backend" />
                <ContactButton content="Full Stack" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h1>Pentagon Career Institure</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quasi architecto.</li>
                    </ul>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default AllProjects;
