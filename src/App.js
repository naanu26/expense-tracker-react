import React, {Component} from 'react';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/state';
import fire from './firebase';
import './App.css';
import Login from './Login';

// const initialState = {
//   transactions: [
//   //     {id: 1, text: 'Flower', amount: 20},
//   //     {id: 2, text: 'Food', amount: 300},
//   //     {id: 3, text: 'Shop', amount: 1200},
//   //     {id: 4, text: 'Book', amount: 50},
//   // ]
// }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  // componentWillMount will dispaly first when page is loaded
  componentDidMount() { 
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      }else {
        this.setState({user: null});
      }
    });
  }
  render() {
    return ( 
      <div>

        {/* check if user is logged in or not */}

        {this.state.user ? ( <GlobalProvider>
                                <Header />
                                <div className="container">
                                  <Balance />
                                  <TransactionList />
                                  <AddTransaction />
                                </div>
                              </GlobalProvider>) : (<Login /> )}
      </div>
    );
  } 
}

export default App;
