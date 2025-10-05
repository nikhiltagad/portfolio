import React, { useRef, useEffect } from 'react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import gsap from 'gsap';
import ContactButton from '../ContactButton/Index';
import { Download } from 'react-feather';
import myPic from '../../assets/myPic.jpg';
import nikPDF from '../../assets/nik.pdf';

const AboutMe = () => {

    const handleResumeClick = () => {
        // Opens the PDF in a new tab
        console.log('hi');
        
        window.open(nikPDF, '_blank');
    }

    const imgRef = useRef();
    const nameRef = useRef();

    useEffect(() => {
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Animate the image
        gsap.set(imgRef.current, { x: -800, opacity: 0 });

        gsap.to(imgRef.current, {
            x: 0,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: imgRef.current,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 2,
                once: true,
            },
        });

        // Animate the name with typing effect
        gsap.fromTo(
            nameRef.current,
            { text: "" },
            {
                text: "Nikhil Tagad",
                duration: 2,
                delay: 1.5,
                scrollTrigger: {
                    trigger: nameRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 2,
                    once: true,
                },
            }
        );
    }, []);

    return (
        <div className='aboutMeContainer row mt-3'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                <img ref={imgRef} className='image-fluid myImage' src={myPic} alt="" />
            </div>
            <div className='col-md-6 aboutMe-content'>
                <h1>
                    Hello! My name is{' '}
                    <span
                        style={{ color: '#c81d77', fontWeight: 'bold' }}
                        ref={nameRef}
                    ></span>
                </h1>
                <p style={{ textAlign: 'justify' }}>
                    I'm a{' '}
                    <span style={{ fontWeight: 'bold' }}>Full Stack Developer</span>{' '}
                    passionate about building engaging and efficient web applications. With{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        expertise in  Core Java, Advance Java, SQL, PL SQL, React.js, Manual Testing, API Testing, Github
                    </span>
                    , I create seamless user experiences and scalable backend solutions.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Having{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        interned at  Div and Section Technologies Pvt. Ltd.
                    </span>
                    , I honed my skills working on real-world projects. Familiar with tools
                    like{' '}
                    <span style={{ fontWeight: 'bold' }}>Figma, Git, and GSAP</span>, I
                    thrive on turning ideas into impactful web solutions.
                </p>
                <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    Let's create something amazing together!
                </p>
                <ContactButton
                    content="Resume"
                    Download Resume
                    icon={Download}
                    onClick={() => handleResumeClick}
                />
            </div>
        </div>
    );
};

export default AboutMe;
