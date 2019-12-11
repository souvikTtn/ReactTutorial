import React from 'react';

const About = (props) => {
    return (
        <div>
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simple Application To manage Contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
           {/* <p>{props.match.params.id}</p>*/}
        </div>
    );
};

export default About;
