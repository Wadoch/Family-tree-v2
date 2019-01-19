import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { verifyJWT } from '../../Redux/authentication/actions';
import { getSingleFamily } from '../../Redux/family/actions';

import FamilyTree from '../../Components/FamilyTree';

import styles from './styles/styles.scss';

const mapStateToProps = ({ family }) => ({
    familyId: family.currentFamilyId,
    people: family.currentFamily.people,
    familyName: family.currentFamily.name,
});

const mapDispatchToProps = dispatch => ({
    initPage: (familyId) => {
        dispatch(verifyJWT());
        dispatch(getSingleFamily(familyId))
    },
    addNewPerson: () => {},
});

const mapPeople = (people = []) => people.map(person => ({
    details: person.details,
    relationships: person.relationship,
    personId: person.personId,
}));

class CreateFamilyScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addPersonOpen: false,
        };
    }

    componentDidMount() {
        const { initPage, familyId } = this.props;
        if(familyId === '') {
            this.props.history.push('/');
        }
        initPage(familyId);
    }

    render() {
        const { people, familyName, addNewPerson } = this.props;

        return (
            <div className={ styles.container }>
                <h3 className={ styles.familyName }>
                    {familyName}
                </h3>
                <FamilyTree
                    people={ mapPeople(people) }
                />
                <div className={ styles.addPerson } onClick={ () => addNewPerson() } >
                    <div
                        className={ classnames({
                            [styles.addPersonForm]: true,
                            [styles.hidden]: !this.state.addPersonOpen,
                        }) }
                    >
                        <div>
                            <label>Name: </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>Surname: </label>
                            <input type='text' />
                        </div>
                        <div>
                            <select>
                                <option>Parent</option>
                                <option>Partner</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div>
                            <label>Date of birth:</label>
                            <input type='date' />
                        </div>
                        <div>
                            <label>Date of death:</label>
                            <input type='date' />
                        </div>
                        <button>
                            Add person
                        </button>
                    </div>
                    <div
                        className={ styles.addPersonButton }
                        onClick={ () => this.setState({addPersonOpen: !this.state.addPersonOpen}) }
                    >
                        {this.state.addPersonOpen ? 'X' : '+'}
                        {/*TODO: show actual people on select list */}
                        {/*TODO: handle add action */}
                        {/*TODO: Add relationship for both parents when add */}
                        {/*TODO: Draw single person block */}
                        {/*TODO: Sort family as tree */}
                        {/*TODO: Draw whole family */}
                        {/*TODO: Add offline part of website */}
                        {/*TODO: Add SVG icons */}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFamilyScreen);