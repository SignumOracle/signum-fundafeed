import React from "react";
import "../../styles/frontendBoilerplate/Footer.css"

const links = [
  {
    title: 'Contact',
    link: 'https://linktr.ee/Signum'
  },  
  {
    title: 'Docs',
    link: 'https://signum.win/docs/'
  },  
  {
    title: 'Discord',
    link: ''
  },  
]

function Footer() {
  return (
    <div className="Footer">
      <p className="FooterText">&copy; 2024 SIGNUM</p>
    </div>
  )
}

export default Footer