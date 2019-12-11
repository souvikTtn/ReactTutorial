import React, {Component} from 'react';
import {Consumer} from "../../Context";
import uuid from 'uuid';
import TextInputGroup from "../layout/TextInputGroup"

class AddContact extends Component {
    state = {
        fullName: '',
        emailId: '',
        phoneNo: '',
        errors: {}
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log("Form Successfully Submitted");
        const {fullName, emailId, phoneNo} = this.state;
        //if key and value are same we only need to pass the value
        if (fullName === '') {
            this.setState({
                errors: {
                    fullName: "FullName Is Required"
                }
            });
            return
        }
        if (emailId === '') {
            this.setState({
                errors: {
                    emailId: "Email Id Is Required"
                }
            });
            return
        }
        if (phoneNo === '') {
            this.setState({
                errors: {
                    phoneNo: "PhoneNo Is Required"
                }
            });
            return
        }
        const contact = {
            id: uuid(),
            fullName, emailId, phoneNo
        };
        dispatch({type: 'ADD_CONTACT', payload: contact});
        console.log(this.state);
        //clear state
        this.setState({
            fullName: '',
            emailId: '',
            phoneNo: '',
            errors: ''
        });
        //For redirection
        this.props.history.push("/")
    };


    render() {
        const {fullName, emailId, phoneNo, errors} = this.state;
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
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup label="Name" onChange={this.onChange} value={fullName}
                                                        placeholder="Enter Name...." name="fullName"
                                                        error={errors.fullName}/>
                                        <TextInputGroup label="Contact Info" onChange={this.onChange} value={phoneNo}
                                                        placeholder="Enter Phone Number...." name="phoneNo"
                                                        type="phone" error={errors.phoneNo}/>
                                        <TextInputGroup label="Email" onChange={this.onChange} value={emailId}
                                                        placeholder="Enter Email...." name="emailId" type="email"
                                                        error={errors.emailId}/>
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