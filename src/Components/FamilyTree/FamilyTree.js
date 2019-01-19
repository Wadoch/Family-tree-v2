import React from 'react';
import PropTypes from 'prop-types';

import Person from '../Person';

const FamilyTree = ({ people }) => (
    <div>
        FamilyTree
        {people.map(person => (
            <Person
                key={ person.personId }
                details={ person.details }
                personId={ person.personId }
            />
        ))}
    </div>
);

FamilyTree.propTypes = {
    people: PropTypes.array,
};

FamilyTree.defaultProps = {
    people: [],
};

export default FamilyTree;