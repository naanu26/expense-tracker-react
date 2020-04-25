import React, {Component} from 'react';
import '../App.css';
import fire from '../firebase';

class Header extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    //logout function
    logout() {
        fire.auth().signOut();
        alert("logout successful");
    }


    render() {
        return (
            <h2>
                {/* Title of the page */}
                TRACK YOUR DAILY EXPENSE       

                {/* logout button */}
                <button id="logout"  onClick={this.logout}>Logout</button>
            </h2>
        );
    }
    
}

export default Header;

