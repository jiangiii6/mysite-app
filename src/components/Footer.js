import { Link } from 'react-router-dom';
import SocialIcons from '../components/SocialIcons';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <SocialIcons />
                <p className="footer-container__contact-text">
                Phone: XXXXXX   <span>Email: XXXXX@gmail.com</span>
                </p>

                <div className="inner-container">
                    <ul className="inner-container__items">
                    <li className="inner-container-item">
                            <div className="inner-container__item_link" >
                            XXXX Copyright © 2021 NY
                            </div>
                        </li>

                        <li className="inner-container-item">
                            <Link className="inner-container__item_link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link
                                className="inner-container__item_link"
                                to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link
                                className="inner-container__item_link"
                                to="/contact">
                                Resume
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link
                                className="inner-container__item_link"
                                to="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>                  
                </div>
        </div>
    );
};

export default Footer;
