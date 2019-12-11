import React, {Component} from 'react';

class Test extends Component {
    state={
        title:'',
        userId:''
    };

    componentDidMount() {
        console.log("componentDidMount ...");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    title:data.title,
                    userId: data.userId
                })
            });
    }

    /*//deprecated
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

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromprops ...");
        //must be a state or null
        return null
    }*/

    render() {
        return (
            <div>
                <h1>Test Component</h1>
                <p>{this.state.title}</p>
                <p>{this.state.userId}</p>
            </div>
        );
    }
}

export default Test;