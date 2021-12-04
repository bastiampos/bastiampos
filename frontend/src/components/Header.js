import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

import SelectProfile from './SelectProfile'
// import othersActions from '../redux/actions/others'

const Header = () => {
   // const dispatch = useDispatch()
   const language = useSelector(state => state.others.language)
   const [showProfile, setShowProfile] = useState(false)

   // const changeLanguage = () => dispatch(othersActions.changeLanguage(language === 'ES' ? 'EN' : 'ES'))

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
            {/* <div className="alignFlex buttonHeaderNav" onClick={() => changeLanguage()}>
               <p>{language === 'ES' ? 'EN' : 'ES'}</p>
            </div> */}
         </nav>
         <div className="alignFlex gap1">
            <div className="alignFlex buttonHeaderNav profileHeaderButton" style={{ padding: 5 }} onClick={() => setShowProfile(!showProfile)}>
               <BsFillPersonFill />
               <IoIosArrowDown className={showProfile ? 'upArrow' : 'downArrow'} />
               {showProfile && <SelectProfile />}
            </div>
            <div className="verticalNav">
               <RiMenu3Line />
            </div>
         </div>
      </header>
   )
}

export default Header
