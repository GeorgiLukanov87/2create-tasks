import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import Content from "../Content/Content";
import styles from "../Hero/Hero.module.css";

const Hero = () => {
    const [selectedImage, setSelectedImage] = useState("");
    
    useEffect(() => {
        const randomImage = getRandomImage();
        setSelectedImage(randomImage);
    }, []);

    const imagesPath = [
        "/images/screen-0.png",
        "/images/screen-1.png",
        "/images/screen-2.png",
        "/images/screen-3.png",
        "/images/screen-4.png",
    ];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imagesPath.length);
        return imagesPath[randomIndex];
    };

    let strStyle = `linear-gradient(0deg, rgba(36, 58, 90, 0.7), rgba(36, 58, 90, 0.7)), url(${selectedImage})`

    return (
        <main className="hero-main">
            <section className={styles["hero"]} style={{ backgroundImage: strStyle }}>
                <Content />
                <Contact />
            </section>
        </main>
    );
};

export default Hero;
