import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ details, personId }) => (
    <div>
        {personId} - {details.firstName}
    </div>
);

Person.propTypes = {
    details: PropTypes.shape({
        firstName: PropTypes.string,
        surname: PropTypes.string,
    }),
    personId: PropTypes.string.isRequired,
};

Person.defaultProps = {
    details: {
        firstName: '',
        surname: '',
    },
};

export default Person;