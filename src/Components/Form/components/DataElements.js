import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/style.scss';

const DataElements = ({ data }) => {
    const elements = data.map((element, key) => (
        <div key={ key } className={ styles.formElement }>
            <label>{element.text}</label>
            <input
                type={ element.type }
                name={ element.name }
                id={ element.name }
            />
        </div>
    ));

    return (
        <div className={ styles.dataWrapper }>
            {elements}
        </div>
    )
};

DataElements.propTypes = {
    data: PropTypes.array,
};

DataElements.defaultProps = {
    data: [],
};

export default DataElements;