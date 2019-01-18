import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const FamilyListElement = ({ id, name, peopleNum, handleClick, handleRemove, handleEdit }) => (
    <li className={ styles.familyListElement }>
        <a className={ styles.familyListElementLink } onClick={ () => handleClick(id) }>
            {name} ({peopleNum})
        </a>
        <div className={ styles.familyListElementButtons }>
            {/*<button className={ styles.familyListElementButtonsEdit } onClick={ () => handleEdit(id) }>Edit</button>*/}
            <button className={ styles.familyListElementButtonsRemove }  onClick={ () => handleRemove(id) }>X</button>
        </div>
    </li>
);

FamilyListElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    peopleNum: PropTypes.number,
    handleClick: PropTypes.func,
    handleRemove: PropTypes.func,
    handleEdit: PropTypes.func,
};

FamilyListElement.defaultProps = {
    peopleNum: 0,
    handleClick: () => {},
    handleRemove: () => {},
    handleEdit: () => {},
};

export default FamilyListElement;