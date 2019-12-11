import React, {Component} from 'react';

class Test extends Component {
    componentDidMount() {
        console.log("componentDidMount ...")
    }

    //deprecated
    componentWillMount() {
        console.log("componentWillMount ...")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate ...")
    }

    //deprecated
    componentWillUpdate() {
        console.log("componentWillUpdate ...")
    }

    //deprecated
    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceivePropse ...")
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export default Test;