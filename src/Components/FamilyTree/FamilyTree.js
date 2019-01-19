import React from 'react';
import PropTypes from 'prop-types';

import Person from '../Person';

import styles from './styles/styles.scss';

const FamilyTree = ({ people, removePerson }) => {
    if(people.length) {
        return (
            <div className={ styles.familyTreeContainer }>
                {people.map(person => (
                    <Person
                        key={ person.personId }
                        details={ person.details }
                        personId={ person.personId }
                        removePerson={ removePerson }
                    />
                ))}
            </div>
        );
    }
    return <div />
};

FamilyTree.propTypes = {
    people: PropTypes.arrayOf(Person.propTypes),
};

FamilyTree.defaultProps = {
    people: [],
};

export default FamilyTree;