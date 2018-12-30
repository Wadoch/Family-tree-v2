import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/style.scss';

const NavigationLinks = ({ links }) => (
    <ul className={ styles.links } >
        {links.map(e => (
            <li
                key={ e.text }
                className={ styles.linkElement }
            >
                <a
                    href={ e.link }
                    className={ styles.link }
                >
                    {e.text}
                </a>
            </li>
        ))}
    </ul>
);

NavigationLinks.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            onClick: PropTypes.func,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default NavigationLinks;