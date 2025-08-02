import React, { useState } from "react";
import { Folder, File, Link, Package } from "react-feather";
import { useNavigate } from "react-router-dom";
import ContactButton from "../ContactButton/Index";
import abcProj from '../../assets/aboutMe11.jpg';
import pqrProj from '../../assets/experience11.jpg';
import xyzProj from '../../assets/skills2.jpg';
import lmnProj from '../../assets/projects11.jpg';
import pentagonProj from '../../assets/contactMe11.jpg';

const ProjectsTree = () => {
    const [openNodes, setOpenNodes] = useState({
        WebDesigns: true,
        Projects: true,
        Frontend: true,
        Backend: true,
        FullStack: true,
    }); // Keeps track of open nodes.
    const [hoveredImage, setHoveredImage] = useState(null); // Tracks the hovered image.

    const toggleNode = (nodeName) => {
        setOpenNodes((prev) => ({
            ...prev,
            [nodeName]: !prev[nodeName],
        }));
    };

    const handleHover = (image) => {
        setHoveredImage(image);
    };

    const handleHoverLeave = () => {
        setHoveredImage(null);
    };

    const navigate = useNavigate();

    return (
        <div className="file-tree-container">
            <h1>Projects</h1>
            <div className="file-tree-inner-container row">
                <div className="file-tree col-md-4">
                    <ul className="tree">
                        {/* Projects Folder */}
                        <li>
                            <div className="node" onClick={() => toggleNode("Projects")}>
                                <Folder />
                                <span className="folder-name">Projects</span>
                            </div>
                            {openNodes["Projects"] && (
                                <ul className="sub-tree">
                                    {/* WebDesigns Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("WebDesigns")}>
                                            <Folder />
                                            <span className="folder-name">Web Designs</span>
                                        </div>
                                        {openNodes["WebDesigns"] && (
                                            <ul className="sub-tree">
                                                <li
                                                    onMouseEnter={() => handleHover(abcProj)}
                                                    onMouseLeave={handleHoverLeave}
                                                >
                                                    <div className="node">
                                                        <File />
                                                        <span>abc project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* Frontend Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("Frontend")}>
                                            <Folder />
                                            <span className="folder-name">Frontend</span>
                                        </div>
                                        {openNodes["Frontend"] && (
                                            <ul className="sub-tree">
                                                <li
                                                    onMouseEnter={() => handleHover(pqrProj)}
                                                    onMouseLeave={handleHoverLeave}
                                                >
                                                    <div className="node">
                                                        <File />
                                                        <span>pqr project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                                <li
                                                    onMouseEnter={() => handleHover(xyzProj)}
                                                    onMouseLeave={handleHoverLeave}
                                                >
                                                    <div className="node">
                                                        <File />
                                                        <span>xyz project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* Backend Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("Backend")}>
                                            <Folder />
                                            <span className="folder-name">Backend</span>
                                        </div>
                                        {openNodes["Backend"] && (
                                            <ul className="sub-tree">
                                                <li
                                                    onMouseEnter={() => handleHover(lmnProj)}
                                                    onMouseLeave={handleHoverLeave}
                                                >
                                                    <div className="node">
                                                        <File />
                                                        <span>lmn project <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* FullStack Folder */}
                                    <li>
                                        <div className="node" onClick={() => toggleNode("FullStack")}>
                                            <Folder />
                                            <span className="folder-name">Full Stack</span>
                                        </div>
                                        {openNodes["FullStack"] && (
                                            <ul className="sub-tree">
                                                <li
                                                    onMouseEnter={() => handleHover(pentagonProj)}
                                                    onMouseLeave={handleHoverLeave}
                                                >
                                                    <div className="node">
                                                        <File />
                                                        <span>Pentagon Career Institute <Link width="15px" /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

                <div className="col-md-5 projects-preview d-flex justify-content-center align-items-center">
                    {hoveredImage && (
                        <img
                            src={hoveredImage}
                            alt="Project Preview"
                            className={hoveredImage ? "active" : ""}
                        />
                    )}
                </div>

                <div className="col-md-2">
                    <ContactButton
                        content="All Projects"
                        icon={Link}
                        className="all-projects-button"
                        style={{ position: "absolute", right: "1vw", top: "215vh" }}
                        onClick={() => navigate('/projects')} // Navigate to /projects route
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectsTree;
