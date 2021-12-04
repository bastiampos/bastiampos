import React from 'react'
import { NavLink } from 'react-router-dom'

const SelectNavItem = ({ items, stylesClass }) => {
   return (
      <div className={stylesClass && stylesClass}>
         {items && items.map(i => (
            <NavLink to={i.route && i.route} onClick={(e) => i.action && i.action()}>
               {i.icon && i.icon}
               <p>{i.text && i.text}</p>
            </NavLink>
         ))}
      </div>
   )
}

export default SelectNavItem
