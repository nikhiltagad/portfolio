import React, { useContext } from 'react'
import { MenuContext } from '../MenuManager/Index'
import cn from 'classnames'

const MenuButton = () => {

    const { open, steOpen } = useContext(MenuContext)

    return (
        <div className={cn('menu-button-wrap', { open })}>
            <button className='menu-button' onClick={() => steOpen(!open)}><span></span></button>
        </div>
    )
}

export default MenuButton