import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../Context";

/*
import './Contact.css' ;
*/
class Contact extends Component {
    static propTypes = {
        /* fullName: PropTypes.string.isRequired,
         emailId: PropTypes.string.isRequired,
         phoneNo: PropTypes.string.isRequired*/
        contact: PropTypes.object.isRequired,
        //  onDeleteClickHandler:PropTypes.func.isRequired
    };
    state = {
        showContactInfo: false
    };

    //every event is bind to an event object
    //in case we use => we dont need to bind this
    /*onShowClick = (name, e) => {
        //console.log(e.target);
        //e.target gives the actual element
        //  console.log(this.state)
        console.log(name)
    };
*/
    onShowClick = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    };
    onDeleteClick = (id,dispatch) => {
        //this.props.onDeleteClickHandler();
        dispatch({type:'DELETE_CONTACT',payload:id})
    };

    render() {
        const {id,fullName, emailId, phoneNo} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-3 m-2">
                            <h4>{fullName}
                                <i className="fas fa-sort-down"/>
                                <button type="button" className="btn btn-primary m-2"
                                        onClick={this.onShowClick}>Expand
                                </button>
                                <button type="button" className="btn btn-danger m-2"
                                        /*onClick={this.onDeleteClick}>delete*/
                                        onClick={this.onDeleteClick.bind(this,id,value.dispatch)}>delete
                                </button>
                            </h4>
                            {
                                showContactInfo && (<ul className="list-group">
                                    <li className="list-group-item">Email : {emailId}</li>
                                    <li className="list-group-item">Phone : {phoneNo}</li>
                                </ul>)
                            }
                        </div>
                    )
                }}
            </Consumer>
            /*<div className="card card-body mb-3 m-2">
                <h4>{fullName}
                   {/!* <i className="fas fa-sort-down" onClick={this.onShowClick.bind(this, fullName)}/>*!/}
                    {/!*<i className="fas fa-sort-down" onClick={this.onShowClick}/>*!/}
                    <button type="button" className="btn btn-primary m-2" onClick={this.onShowClick}>Expand</button>
                    <button type="button" className="btn btn-danger m-2" onClick={this.onDeleteClick}>delete</button>
                </h4>
                {
                    showContactInfo &&(<ul className="list-group">
                        <li className="list-group-item">Email : {emailId}</li>
                        <li className="list-group-item">Phone : {phoneNo}</li>
                    </ul>)
                }
            </div>*/
        );
    }
}

/*Contact.propTypes = {
    fullName: PropTypes.string.isRequired,
    emailId: PropTypes.string.isRequired,
    phoneNo: PropTypes.string.isRequired
};*/

export default Contact;