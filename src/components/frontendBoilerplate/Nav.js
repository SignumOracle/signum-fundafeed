import React, { useContext } from 'react'
//Assets
import signumLogo from '../../assets/signum_logo.png';
//Components
import WalletConnect from './WalletConnect'
//Styles
import '../../styles/frontendBoilerplate/Nav.css'
//Contexts
import { UserContext } from '../../contexts/User'

function Nav() {
  const user = useContext(UserContext)
  return (
    <div className="Nav">
      <a
        href="https://signum.win/"
        alt="https://signum.win/"
        rel="noopener noreferrer"
      >
        <img className="TellorLogo" style={{width: "100px"}} src={signumLogo} alt="Signum Logo" />
      </a>
      {user && user.currentUser ? <WalletConnect nav={true} /> : null}
    </div>
  )
}

export default Nav
