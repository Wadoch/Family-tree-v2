import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import styles from './styles/styles.scss';

const Person = ({ details, personId, removePerson }) => {
    return (
        <div className={ classnames({
            [styles.personContainer]: true,
            [styles.male]: details.gender && details.gender.toLowerCase() === 'male',
            [styles.female]: details.gender && details.gender.toLowerCase() === 'female',
        }) }
        >
            <h3 className={ styles.name }>{details.firstName} {details.surname}</h3>
            <div className={ styles.date }>
                <div className={ styles.dateIcon }>Birth</div>
                <div className={ styles.dateValue }>
                    {moment(details.birthDate).isValid() ?
                        moment(details.birthDate).format('YY/MM/DD') :
                        'N/A'
                    }
                </div>
            </div> {/* TODO: svg icon */}
            <div className={ styles.date }>
                <div className={ styles.dateIcon }>Death</div>
                <div className={ styles.dateValue }>
                    {moment(details.deathDate).isValid() ?
                        moment(details.deathDate).format('YY/MM/DD') :
                        'N/A'
                    }
                </div>
            </div> {/* TODO: svg icon */}
            <div className={ styles.personButtons }>
                <div className={ styles.button }>
                    <a onClick={ () => {} }>
                        Edit
                    </a>
                </div>
                <div className={ styles.button }>
                    <a onClick={ () => removePerson(personId) }>
                        Delete
                    </a>
                </div>
            </div>
        </div>
    );
}

Person.propTypes = {
    details: PropTypes.shape({
        firstName: PropTypes.string,
        surname: PropTypes.string,
        gender: PropTypes.string,
        birthDate: PropTypes.string,
        deathDate: PropTypes.string,
        additionalInfo: PropTypes.string,
    }),
    personId: PropTypes.string.isRequired,
};

Person.defaultProps = {
    details: {
        firstName: 'N/A',
        surname: '',
        gender: '',
        birthDate: '',
        deathDate: '',
        additionalInfo: '',
    },
};

export default Person;