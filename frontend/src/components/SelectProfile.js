import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import { FaRegIdCard } from 'react-icons/fa'
import { MdManageAccounts } from 'react-icons/md'

const SelectNavItem = () => {
   const language = useSelector(state => state.others.language)
   const user = useSelector(state => state.auth.user)

   return (
      <div className="selectProfile">
         {!user && <Link to="signin" className="itemSelectProfile">
            <VscSignIn />
            <p>{language === 'ES' ? 'Iniciar sesión' : 'Sign in'}</p>
         </Link>}
         {!user && <Link to="signup" className="itemSelectProfile">
            <FaRegIdCard />
            <p>{language === 'ES' ? 'Registrarme' : 'Sign up'}</p>
         </Link>}
         {user && <div className="itemSelectProfile">
            <MdManageAccounts />
            <p>{language === 'ES' ? 'Mi cuenta(pronto)' : 'My account(soon)'}</p>
         </div>}
         {user && <div className="itemSelectProfile">
            <VscSignOut />
            <p>{language === 'ES' ? 'Cerrar sesión' : 'Sign out'}</p>
         </div>}
      </div>
   )
}

export default SelectNavItem
