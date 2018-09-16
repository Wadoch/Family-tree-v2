import React from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from './components/ButtonComponent';
import DataElements from './components/DataElements';

import styles from './styles/style.scss';

const Form = ({content}) => {
    const {data, button } = content;

    return (
        <div className={ styles.container }>
            <DataElements data={ data } />
            <ButtonComponent data={ button } />
        </div>
    )
};

Form.propTypes = {
    content: PropTypes.object,
};

Form.defaultProps = {
    content: {},
};

export default Form;