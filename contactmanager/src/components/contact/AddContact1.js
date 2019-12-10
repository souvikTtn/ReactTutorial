//this is an example of uncontrolled component
import React, {Component} from 'react';
class AddContact1 extends Component {
//another way to add default props in a component
    constructor(props){
        super(props);
        this.fullNameInput=React.createRef();
        this.phoneNoInput=React.createRef();
        this.emailIdInput=React.createRef();
    }


    static defaultProps={
        fullName: 'Souvik Chakraborty',
        emailId: 'souvikc40@gmail.com',
        phoneNo: '9716330981'
    };


    onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Successfully Submitted");
       const contact={
           fullName: this.fullNameInput.current.value,
           emailId: this.emailIdInput.current.value,
           phoneNo: this.phoneNoInput.current.value
       }
        console.log(contact);
    };

    render() {
        const {fullName, emailId, phoneNo} = this.props;
        return (
            <div className="card mb-3 m-2">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">
                                Name</label>
                            <input type="text" name="fullName" className="form-control form-control-lg"
                                   placeholder="Enter Name...." defaultValue={fullName} ref={this.fullNameInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">
                                Contact Info</label>
                            <input type="phone" name="phoneNo" className="form-control form-control-lg"
                                   placeholder="Enter Phone Number...." defaultValue={phoneNo} ref={this.phoneNoInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">
                                Email</label>
                            <input type="email" name="emailId" className="form-control form-control-lg"
                                   placeholder="Enter Email...." defaultValue={emailId} ref={this.emailIdInput}/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact1;