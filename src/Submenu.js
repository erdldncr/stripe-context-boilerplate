import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'
const Submenu = () => {
  const {isSubMenuOpen}=useGlobalContext()

  return <aside className={`submenu ${isSubMenuOpen&&'show'}`}>
    subMenu
  </aside>
}

export default Submenu
