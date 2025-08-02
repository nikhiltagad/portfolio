import React, { useContext } from 'react'
import { GitHub, Linkedin, Mail, X } from 'react-feather';
import { MenuContext } from '../MenuManager/Index';
import cn from 'classnames'
import aboutMe from '../../../assets/aboutMe11.jpg'
import experience from '../../../assets/experience11.jpg'
import skills from '../../../assets/skills2.jpg'
import projects from '../../../assets/projects11.jpg'
import contactMe from '../../../assets/contactMe11.jpg'

const internalLinks = [
    {
        url: "#1",
        component: <span>About me</span>,
        img: aboutMe
    },
    {
        url: "#2",
        component: <span>Experience</span>,
        img: experience
    },
    {
        url: "#3",
        component: <span>Skills</span>,
        img: skills
    },
    {
        url: "#4",
        component: <span>Projects</span>,
        img: projects
    },
    {
        url: "#5",
        component: <span>Contact me</span>,
        img: contactMe
    },
];

const externalLinks = [
    {
        url: "https://www.linkedin.com/in/shubham2k24",
        component: <Linkedin />,
    },
    {
        url: "https://github.com/Shubham112004",
        component: <GitHub />,
    },
    {
        url: "mailto:shubham@example.com",
        component: <Mail />,
    },
    {
        url: "https://x.com/shubham2k4",
        component: <X />,
    },
];

const MenuContent = () => {

    const { open } = useContext(MenuContext)


    return (
        <div className='menu-holder'>
            <div className={cn("menu-inside", { open })}>
                <div className="menu-nav-container">
                    <ul className='internal-nav-links'>
                        {internalLinks.map(link => (
                            <li key={link.url}>
                                <a href={link.url}>{link.component}</a>
                                <img src={link.img} />
                            </li>
                        ))}
                    </ul>
                    <ul className='external-nav-links'>
                        {externalLinks.map(link => (
                            <li key={link.url}>
                                <a href={link.url} target='_blank'>{link.component}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuContent