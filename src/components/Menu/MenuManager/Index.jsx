import React, { useState, createContext } from 'react'

export const MenuContext = createContext({
    open: false,
    steOpen: () => { }
})

const MenuManager = (props) => {
    const [open, steOpen] = useState(false)
    return <MenuContext.Provider value={{ open, steOpen }}>{props.children}</MenuContext.Provider>
}

export default MenuManager