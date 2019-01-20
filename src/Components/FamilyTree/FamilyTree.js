import React from 'react';
import PropTypes from 'prop-types';

import Person from '../Person';

import styles from './styles/styles.scss';

const findRoot = people => [people[0]];

const findPerson = (people, personId) => people.filter(e => e.personId === personId);

const mapIdsToPeople = (people, ids) => {
    let ppl = [];
    ids.forEach(id => {
        people.forEach(per => {
            if(id === per.personId) {
                ppl.push(per);
            }
        });
    });

    return ppl;
};

const drawPartner = (partner, removePersonHandler) => (
    <div className={ styles.partner }>
        <Person
            key={ partner.personId }
            details={ partner.details }
            personId={ partner.personId }
            removePerson={ removePersonHandler }
        />
    </div>
);

const drawGeneration = (people, children = [], removePersonHandler) => {
    return (
        <div className={ styles.generation }>
            {children.map(child => {
                return (
                    <div className={ styles.block }>
                        <div className={ styles.personContainerBlock }>
                            <div className={ styles.personContainer }>
                                <div className={ styles.person }>
                                    <Person
                                        key={ child.personId }
                                        details={ child.details }
                                        personId={ child.personId }
                                        removePerson={ removePersonHandler }
                                    />
                                </div>
                                {child.relationships && child.relationships.partner && child.relationships.partner !== '' ?
                                    drawPartner(findPerson(people, child.relationships.partner)[0], removePersonHandler) :
                                    null}
                            </div>
                        </div>
                        {child.relationships && child.relationships.children.length > 0 ?
                            drawGeneration(people, mapIdsToPeople(people, child.relationships.children), removePersonHandler) :
                            null}
                    </div>
                )
            })}
        </div>
    );
};

const FamilyTree = ({ people, removePerson }) => {
    if(people.length) {
        const root = findRoot(people);

        return (
            <div className={ styles.familyTreeContainer }>
                {root ? drawGeneration(people, root, removePerson) : null}
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