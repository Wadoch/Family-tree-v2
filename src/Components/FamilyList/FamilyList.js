import React from 'react';
import PropTypes from 'prop-types';

import FamilyListElement from './FamilyListElement';
import AddFamilyElement from './AddFamilyElement';

import styles from './styles/styles.scss';

const FamilyList = ({ list, handleAdd }) => (
    <ul className={ styles.familyList }>
        { list.map(({id, name, peopleNum, handleClick, handleRemove, handleEdit}) =>
            <FamilyListElement
                key={ id }
                id={ id }
                name={ name }
                peopleNum={ peopleNum }
                handleClick={ handleClick }
                handleEdit={ handleEdit }
                handleRemove={ handleRemove }
            />)
        }
        <AddFamilyElement
            handleAdd={ handleAdd }
        />
    </ul>
);

FamilyList.propTypes = {
    list: PropTypes.array,
    handleAdd: PropTypes.func.isRequired,
};

FamilyList.defaultProps = {
    list: [],
};

export default FamilyList;