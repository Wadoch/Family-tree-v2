import React, { Component } from 'react';
import styles from "./styles/styles.scss";

class AddFamilyElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            name: '',
        };
    }

    handleElementClick = () => {
        this.setState({clicked: true});
    };

    handleNameChange = () => {
        this.setState({name: document.getElementById('addFamilyFormName').value});
    };

    handleAddFamily = () => {
        if(this.state.name !== '') {
            this.props.handleAdd(this.state.name);
        }
    };

    render() {
        return (
            <li className={ styles.addFamily } onClick={ () => this.handleElementClick() }>
                {!this.state.clicked ?
                    (<a className={ styles.addFamilyLink }>
                        Add new family
                    </a>) :
                    (<div className={ styles.addFamilyForm }>
                        <input
                            placeholder='family name'
                            type='text'
                            id='addFamilyFormName'
                            onChange={ () => this.handleNameChange(this) }
                            className={ styles.addFamilyFormInput }
                        />
                        <button
                            className={ styles.addFamilyFormButton }
                            onClick={ () => this.handleAddFamily() }
                        >
                            ADD
                        </button>
                    </div>)
                }
            </li>
        );
    }
}

export default AddFamilyElement;