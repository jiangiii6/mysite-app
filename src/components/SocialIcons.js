import facebook from '../assets/images/facebook.svg';
import Pinterest  from '../assets/images/pinterest.svg';
import Gmail  from '../assets/images/email.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import React from 'react';

const SocialIcons = () => {
    return (
        <div className="social">
          <a href="https://github.com/">
                <img className="social-logo"  src={facebook}/>
            </a>

         
            <a href="https://www.linkedin.com/">
            <img className="social-logo"  src={LinkedIn}/>
            </a>

            <a href="https://github.com/">
            <img className="social-logo"  src={Pinterest}/>
            </a>

            <a href="https://twitter.com/">
            <img className="social-logo"  src={Gmail}/>
            </a>
        </div>
    );
};

export default SocialIcons;
