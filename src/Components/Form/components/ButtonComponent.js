import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/style.scss';

const ButtonComponent = ({ data }) => (
    <div className={ styles.formElement }>
        <button onClick={ data.onClick }>
            {data.text}
        </button>
    </div>
);

ButtonComponent.propTypes = {
    data: PropTypes.object,
};

ButtonComponent.defaultProps = {
    data: {},
};

export default ButtonComponent;