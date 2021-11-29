import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'

const Header = () => {

   const [language, setLanguage] = useState('ES')

   const changeLanguage = () => {
      setLanguage(language === 'ES' ? 'EN' : 'ES')
      localStorage.setItem('language', language === 'ES' ? 'EN' : 'ES')
   }

   return (
      <header className="alignFlex">
         <div className="logo"><h1>bastiampos</h1></div>
         <nav className="alignFlex horizontalNav">
            <NavLink to="/" className={({ isActive }) => isActive && 'activeHeader'}>
               {language === 'ES' ? 'Inicio' : 'Home'}
            </NavLink>
            <NavLink to="about" className={({ isActive }) => isActive && 'activeHeader'}>
               {language === 'ES' ? 'Sobre mi' : 'About'}
            </NavLink>
            <NavLink to="content" className={({ isActive }) => isActive && 'activeHeader'}>
               {language === 'ES' ? 'Contenido' : 'Content'}
            </NavLink>
            <NavLink to="projects" className={({ isActive }) => isActive && 'activeHeader'}>
               {language === 'ES' ? 'Proyectos' : 'Projects'}
            </NavLink>
            <fieldset className="alignFlex" onClick={() => changeLanguage()}>
               <p>{language === 'ES' ? 'EN' : 'ES'}</p>
            </fieldset>
         </nav>
         <div className="verticalNav">
            <RiMenu3Line />
         </div>
      </header>
   )
}

export default Header
