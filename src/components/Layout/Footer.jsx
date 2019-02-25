import React from 'react'
import './Footer.css'

import logoUnifor from '../../assets/images/logo_unifor.png'
import logoNati from '../../assets/images/logo_nati_grande.png'

export default props =>
    <footer className="footer">
        <div className="mx-auro">
            <img src={logoUnifor} className="mx-5" alt="logo unifor" />
            <img src={logoNati} className="mx-5" alt="logo nati" />
        </div>
    </footer>