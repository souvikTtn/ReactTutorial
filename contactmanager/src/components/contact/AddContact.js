import React, {Component} from 'react';
import {Consumer} from "../../Context";
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        fullName: '',
        emailId: '',
        phoneNo: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        console.log("Form Successfully Submitted");
        const {fullName,emailId,phoneNo}=this.state;
        //if key and value are same we only need to pass the value
        const contact={
            id:uuid(),
            fullName,emailId,phoneNo
        };
        dispatch({type: 'ADD_CONTACT', payload: contact});
        console.log(this.state);
        this.setState({
            fullName: '',
            emailId: '',
            phoneNo:''
        })
    };

    render() {
        const {fullName, emailId, phoneNo} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (<div className="card mb-3 m-2">
                                <div className="card-header">
                                    Add Contact
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Name</label>
                                            <input type="text" name="fullName" className="form-control form-control-lg"
                                                   placeholder="Enter Name...." value={fullName}
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Contact Info</label>
                                            <input type="phone" name="phoneNo" className="form-control form-control-lg"
                                                   placeholder="Enter Phone Number...." value={phoneNo}
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Email</label>
                                            <input type="email" name="emailId" className="form-control form-control-lg"
                                                   placeholder="Enter Email...." value={emailId}
                                                   onChange={this.onChange}/>
                                        </div>
                                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }
}

export default AddContact;