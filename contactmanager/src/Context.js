import React, {Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
    //an action has a type and payload
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state, contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload
                )
            };
        default:
            return state
    }

};

//this is where all the states of the application will reside
export class GlobalStates extends Component {
    state = {
        contacts: [
            {
                id: 1,
                fullName: 'Souvik Chakraborty',
                emailId: 'souvikc40@gmail.com',
                phoneNo: '9716330981'
            },
            {
                id: 2,
                fullName: 'Subham Chakraborty',
                emailId: 'subham3oct@gmail.com',
                phoneNo: '9716330982'
            },
            {
                id: 3,
                fullName: 'Soshanka Chakraborty',
                emailId: 'csoshanka@yahoo.com',
                phoneNo: '9716330983'
            }
        ],
        dispatch: action => {
            //this.setState(state => reducer(state, action))
            this.setState(reducer(this.state, action))
        }
    };

    render() {
        return (
            //this value will be available throughout the application
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;