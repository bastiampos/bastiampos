import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import othersActions from '../redux/actions/others'

const Header = () => {
   const dispatch = useDispatch()
   const language = useSelector(state => state.others.language)

   const changeLanguage = () => dispatch(othersActions.changeLanguage(language === 'ES' ? 'EN' : 'ES'))

   return (
      <header className="alignFlex">
         <div className="logo"><h1>Bastiampos</h1></div>
         <nav className="alignFlex horizontalNav">
            <NavLink to="/" className={({ isActive }) => isActive && 'activeRoute'}>
               {language === 'ES' ? 'Inicio' : 'Home'}
            </NavLink>
            <NavLink to="about" className={({ isActive }) => isActive && 'activeRoute'}>
               {language === 'ES' ? 'Sobre mi' : 'About'}
            </NavLink>
            <NavLink to="community" className={({ isActive }) => isActive && 'activeRoute'}>
               {language === 'ES' ? 'Comunidad' : 'Community'}
            </NavLink>
            <NavLink to="projects" className={({ isActive }) => isActive && 'activeRoute'}>
               {language === 'ES' ? 'Proyectos' : 'Projects'}
            </NavLink>
            <div className="alignFlex buttonHeaderNav" onClick={() => changeLanguage()}>
               <p>{language === 'ES' ? 'EN' : 'ES'}</p>
            </div>
         </nav>
         <div className="verticalNav">
            <RiMenu3Line />
         </div>
      </header>
   )
}

export default Header
