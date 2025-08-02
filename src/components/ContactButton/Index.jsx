import React from 'react';

const ContactButton = ({
    icon: Icon = null, // Default to no icon
    content = 'Contact Me', // Default button text
    style = {}, // Custom inline styles
    className = '', // Custom class names
    onClick, // Click handler
}) => {
    return (
        <button
            className={`contact-button ${className}`}
            style={style}
            onClick={onClick}
        >
            {content && <span>{content}</span>} {/* Render content if provided */}
            {Icon && <Icon />} {/* Render icon if provided */}
        </button>
    );
};

export default ContactButton;
