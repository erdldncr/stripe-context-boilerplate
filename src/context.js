import React, { useState, useContext } from 'react'
import sublinks from './data'

export const AppContext=React.createContext()

export const AppProvider=({children})=>{
    const[isSidebarOpen,setIsSidebarOpen]=useState(false)
    const[isSubMenuOpen,setIsSubMenuOpen]=useState(true)

    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }
    const openSubMenu=()=>{
        setIsSidebarOpen(true)
    }
    const closeSubMenu=()=>{
        setIsSubMenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSubMenuOpen,
        isSidebarOpen,setIsSubMenuOpen,setIsSidebarOpen,openSubMenu,openSidebar,closeSubMenu,closeSidebar}} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}