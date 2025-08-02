import React from 'react'
import Menu from '../Menu/Index'
const Header = () => {
    return (
        <div className='header-wrap'>
            <p className='brand-description'>Designed and Developed By <span style={{ color: '#1c3e35', fontWeight: 'bold' }}>Nikhil</span></p>
            <Menu />
        </div>
    )
}

export default Header