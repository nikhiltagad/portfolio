import React, { useEffect } from 'react';
import ContactButton from '../ContactButton/Index'
import gsap from 'gsap';
import AboutMe from '../AboutMe/Index';
import { Plus } from 'react-feather';
import ProjectsTree from '../ProjectsTree/Index';

const Heading = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.id = 'cursor';
        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        // Event handlers for hover effects on h1
        const handleMouseEnterH1 = () => {
            cursor.innerHTML = 'Pixel Perfect';
            cursor.style.color = 'white';
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: '#7573706d',
            });
        };

        const handleMouseLeaveH1 = () => {
            cursor.innerHTML = '';
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: '#7d7b7b',
            });
        };

        // Event handler to reset cursor behavior when leaving outer-container-2
        const handleMouseLeaveContainer = () => {
            cursor.innerHTML = '';
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'transparent',
            });
        };

        document.addEventListener('mousemove', moveCursor);

        const h1 = document.querySelector('h1');
        const outerContainer2 = document.querySelector('.outer-container-2');

        if (h1) {
            h1.addEventListener('mouseenter', handleMouseEnterH1);
            h1.addEventListener('mouseleave', handleMouseLeaveH1);
        } else {
            console.error('h1 element not found');
        }

        if (outerContainer2) {
            outerContainer2.addEventListener('mouseleave', handleMouseLeaveContainer);
        } else {
            console.error('.outer-container-2 element not found');
        }

        // Cleanup on component unmount
        return () => {
            document.removeEventListener('mousemove', moveCursor);
            if (h1) {
                h1.removeEventListener('mouseenter', handleMouseEnterH1);
                h1.removeEventListener('mouseleave', handleMouseLeaveH1);
            }
            if (outerContainer2) {
                outerContainer2.removeEventListener('mouseleave', handleMouseLeaveContainer);
            }
            document.body.removeChild(cursor);
        };
    }, []);

    return (
        <div className='outer-container'>
            <div className="outer-container-2">
                <div className="main-container" id="main-container">
                    <h1>
                        Welcome
                        <br />
                        Shubham's
                        <br />
                        Portfolio
                    </h1>
                    <ContactButton content="Contact Me"
                        icon={Plus}
                        className="contact-me-button" style={{ position: 'absolute', right: '10vw', bottom: '25vh' }}
                        onClick={() => console.log('Contact button clicked!')} />
                </div>
            </div>
            <AboutMe />
            <ProjectsTree />
        </div>
    )
}

export default Heading