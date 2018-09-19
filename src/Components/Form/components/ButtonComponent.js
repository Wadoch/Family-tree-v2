import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/style.scss';

const ButtonComponent = ({ data }) => (
    <div className={ styles.buttonWrapper }>
        <div className={ styles.formElement }>
            <button
                onClick={ data.onClick }
                className={ data.className }
            >
                {data.text}
            </button>
        </div>
    </div>
);

ButtonComponent.propTypes = {
    data: PropTypes.object,
};

ButtonComponent.defaultProps = {
    data: {},
};

export default ButtonComponent;