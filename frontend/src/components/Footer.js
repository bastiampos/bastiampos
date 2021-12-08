import { useSelector, useDispatch } from 'react-redux'
import { VscGithubInverted, VscTwitter, VscHome } from 'react-icons/vsc'
import { BsLinkedin, BsMap, BsFillJournalBookmarkFill, BsNewspaper, BsPersonBadgeFill } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdWeb, MdLanguage } from 'react-icons/md'
import { SiGmail, SiReact } from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import { HiOutlineExternalLink } from 'react-icons/hi'

import othersActions from '../redux/actions/others'

const Footer = () => {
   const language = useSelector(state => state.others.language)
   const dispatch = useDispatch()

   const changeLanguage = () => dispatch(othersActions.changeLanguage(language === 'ES' ? 'EN' : 'ES'))
   return (
      <footer>

         <div className="columnFooter">
            <p className="titleFooter">{language === 'ES' ? 'SOCIAL' : 'SOCIAL'}</p>
            <nav>
               <a href="https://github.com/bastiampos" rel="noreferrer" target="_blank">
                  <VscGithubInverted />
                  <p>GitHub</p>
               </a>
               <a href="https://twitter.com/bastiampos" rel="noreferrer" target="_blank">
                  <VscTwitter />
                  <p>Twitter</p>
               </a>
               <a href="https://linkedin.com/in/bastiampos" rel="noreferrer" target="_blank">
                  <BsLinkedin />
                  <p>LinkedIn</p>
               </a>
               <a href="mailto:bastiampos.job@gmail.com" rel="noreferrer" target="_blank">
                  <SiGmail />
                  <p>Gmail</p>
               </a>
            </nav>
         </div>
         <div className="columnFooter">
            <p className="titleFooter">{language === 'ES' ? 'RECURSOS (Proximamente)' : 'RESOURCES (Coming soon)'}</p>
            <nav>
               <NavLink to="community" className={({ isActive }) => isActive && 'activeRout'}>
                  <BsNewspaper />
                  <p>{language === 'ES' ? 'Blog' : 'Blog'}</p>
               </NavLink>
               <NavLink to="community" className={({ isActive }) => isActive && 'activeRout'}>
                  <BsMap />
                  <p>{language === 'ES' ? 'Roadmap' : 'Roadmap'}</p>
               </NavLink>
               <NavLink to="community" className={({ isActive }) => isActive && 'activeRout'}>
                  <MdWeb />
                  <p>{language === 'ES' ? 'UX/UI' : 'UX/UI'}</p>
               </NavLink>
               <NavLink to="community" className={({ isActive }) => isActive && 'activeRout'}>
                  <BsFillJournalBookmarkFill />
                  <p>{language === 'ES' ? 'Donde estudiar' : 'Where study'}</p>
               </NavLink>
            </nav>
         </div>
         <div className="columnFooter">
            <p className="titleFooter">{language === 'ES' ? 'NAVEGACION' : 'NAVEGATE'}</p>
            <nav>
               <NavLink to="/" className={({ isActive }) => isActive && 'activeRoute'}>
                  <VscHome />
                  <p>{language === 'ES' ? 'Inicio' : 'Home'}</p>
               </NavLink>
               <NavLink to="about" className={({ isActive }) => isActive && 'activeRoute'}>
                  <BsPersonBadgeFill />
                  <p>{language === 'ES' ? 'Sobre mi' : 'About'}</p>
               </NavLink>
               <NavLink to="community" className={({ isActive }) => isActive && 'activeRoute'}>
                  <MdLanguage />
                  <p>{language === 'ES' ? 'Comunidad' : 'Community'}</p>
               </NavLink>
               <NavLink to="projects" className={({ isActive }) => isActive && 'activeRoute'}>
                  <AiOutlineFundProjectionScreen />
                  <p>{language === 'ES' ? 'Proyectos' : 'Projects'}</p>
               </NavLink>
            </nav>
         </div>
         <div className="columnFooter">
            <p className="titleFooter">DATA</p>
            <p className="translateFooter" onClick={() => changeLanguage()}>
               {language === 'ES' ? 'Traducir al Ingles' : 'Translate to Spanish'}
            </p>
            <p>© 2021 Bastiampos.</p>
            <div className="alignFlex gap1 fromLiveIn">
               <p>{language === 'ES' ? 'De' : 'From'}</p>
               <img
                  src="https://flagcdn.com/h20/co.png"
                  srcSet="https://flagcdn.com/h40/co.png 2x, https://flagcdn.com/h60/co.png 3x"
                  height="20"
                  alt="Colombia"
               />
               <p>{language === 'ES' ? 'viviendo en' : 'live in'}</p>
               <img
                  src="https://flagcdn.com/h20/ar.png"
                  srcSet="https://flagcdn.com/h40/ar.png 2x, https://flagcdn.com/h60/ar.png 3x"
                  height="20"
                  alt="Argentina"
               />
            </div>
            <div className="poweredFooter alignFlex gap1">
               <p>Powered on</p><SiReact />
            </div>
         </div>
      </footer>
   )
}

export default Footer