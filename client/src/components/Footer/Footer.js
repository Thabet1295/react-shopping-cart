import React from 'react';
import "../../css/Footer/Footer.css";
import {words} from '../../words';
function Footer()
{
    return (
       <footer>
              {words.footerCopyright}
       </footer>
    )
}

export default Footer;