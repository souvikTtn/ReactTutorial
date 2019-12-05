import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {
    //this is one way of adding state
    /*constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id:1,
                    fullName: 'Souvik Chakraborty',
                    emailId: 'souvikc40@gmail.com',
                    phoneNo: '9716330981'
                },
                {
                    id:2,
                    fullName: 'Subham Chakraborty',
                    emailId: 'subham3oct@gmail.com',
                    phoneNo: '9716330982'
                },
                {
                    id:3,
                    fullName: 'Soshanka Chakraborty',
                    emailId: 'csoshanka@yahoo.com',
                    phoneNo: '9716330983'
                }
            ]
        }
    }*/
    //another way of adding state to a class
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
        ]
    };

    deleteContact(id){
        const filteredContact=this.state.contacts.filter(contact=>
            contact.id !==id);
        this.setState({
            contacts:filteredContact
        })
    }

    render() {
        const {contacts} = this.state;
        return (
            /*<div>
                {contacts.map(contact => (
                    <Contact key={contact.id} fullName={contact.fullName} emailId={contact.emailId} phoneNo={contact.phoneNo}/>
                ))}
            </div>*/
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} onDeleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;