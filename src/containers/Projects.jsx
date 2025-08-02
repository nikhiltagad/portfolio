import React from 'react'
import MenuManager from '../components/Menu/MenuManager/Index'
import Menu from '../components/Menu/Index'
import AllProjects from '../components/AllProjects'

const Projects = () => {
    return (
        <MenuManager>
            <Menu />
            <AllProjects />
        </MenuManager>
    )
}

export default Projects