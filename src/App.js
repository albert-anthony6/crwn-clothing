import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';

import Header from './components/header/Header';

import {selectCurrentUser} from './redux/user/userSelectors';
import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './redux/user/userActions';
import {connect} from 'react-redux';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
