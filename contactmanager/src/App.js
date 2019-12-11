import React, {Component} from 'react';
import './App.css';
import Contacts from './components/contact/Contacts'
import Header from './components/layout/Header'
import 'bootstrap-4.1.3/dist/css/bootstrap.min.css'
import {GlobalStates} from "./Context";
import AddContact1 from "./components/contact/AddContact1"
import AddContact from "./components/contact/AddContact"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test"
//class based component
class App extends Component {
    render() {
        /*const name='souvik';
        const showMath=true;
        let math;
        if(showMath){
            math=<h4>hello math conditional</h4>
        }
        else {
            math=null;
        }*/

        return (
            <GlobalStates>
                <Router>
            <div className="App">
                {/* <h1>The App Component</h1>*/}
                {/*<h4>hello {name.toUpperCase()}</h4>
                {math}*/}
                <Header branding="Contact Manager"/>
                <div className="container">
                    {/* <Contact fullName="Souvik Chakraborty" emailId="souvikc40@gmail.com" phoneNo="9716330981"/>
                    <Contact fullName="Subham Chakraborty" emailId="subhamc40@gmail.com" phoneNo="9716330982"/>
                    <Contact fullName="Soshanka Chakraborty" emailId="sc40@gmail.com" phoneNo="9716330983"/>
                <Contact fullName="Manju Chakraborty" emailId="mc40@gmail.com" phoneNo="9716330984"/>
                <Contact fullName="Amit Chakraborty" emailId="amic40t@gmail.com" phoneNo="9716330985"/>
                <Contact fullName="Mrinal Chakraborty" emailId="mcc40@gmail.com" phoneNo="9716330986"/>
                <Contact fullName="Sonali Chakraborty" emailId="soc40@gmail.com" phoneNo="9716330987"/>
                <Contact fullName="Dulal Chakraborty" emailId="dc40@gmail.com" phoneNo="9716330988"/>*/}
                {/*<AddContact1/>*/}
                    <Switch>
                        <Route exact path="/" component={Contacts}/>
                        {/*<Route exact path="/about/:id" component={About}/>*/}
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact/add" component={AddContact}/>
                        <Route exact path="/test" component={Test}/>
                        <Route component={NotFound}/>
                    </Switch>
                {/*<About/>
                <AddContact/>
                <Contacts/>*/}
                </div>
            </div>
                </Router>
            </GlobalStates>
        );
    }
}

export default App;
