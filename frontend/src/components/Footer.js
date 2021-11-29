import { VscGithubInverted, VscTwitter } from 'react-icons/vsc'
import { BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className="alignFlex">
         <div className="alignFlex gap1 linkFooter" style={{ fontSize: '20px' }}>
            <a href="https://github.com/bastiampos" rel="noreferrer" target="_blank"><VscGithubInverted /></a>
            <a href="https://twitter.com/bastiampos" rel="noreferrer" target="_blank"><VscTwitter /></a>
            <a href="https://linkedin.com/in/bastiampos" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <p style={{ fontSize: '15px' }}>@bastiampos</p>
         </div>
         <div>
            <nav className="alignFlex gap1 footerNav">
               <NavLink to="/">Home</NavLink>
               <NavLink to="about">About</NavLink>
               <NavLink to="content">Content</NavLink>
               <NavLink to="projects">Projects</NavLink>
            </nav>
         </div>
         <div className="alignFlex gap1 linkFooter" style={{ fontSize: '20px' }}>
            <a href="mailto:bastiampos.job@gmail.com" rel="noreferrer" target="_blank"><BsMailbox2 /></a>
            <a style={{ fontSize: '15px' }} href="mailto:bastiampos.job@gmail.com" rel="noreferrer" target="_blank">bastiampos.job@gmail.com</a>
         </div>
      </footer>
   )
}

export default Footer

{/* <VscGithubInverted />
<VscTwitter />
<BsLinkedin />
<BsMailbox2 /> */}
