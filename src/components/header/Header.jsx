import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {selectCurrentUser} from '../../redux/user/userSelectors';


import {connect} from 'react-redux';

// ******************************************************

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            bool: null
        }
    }

    togg = () => {
        this.setState({
            bool: !this.state.bool
        })
    }

    render(){
        return(
            <div className="header">
                <Link className="logo-container" onClick={() => this.togg()} to="/">
                    <Logo className="logo"/>
                </Link>
                <input type="checkbox" checked={this.state.bool} id="toggle"/>
                <div className="options">
                    <Link className="option" onClick={() => this.togg()} to="/">
                        HOME
                    </Link>
                    <Link className="option" onClick={() => this.togg()} to="/shop">
                        SHOP
                    </Link>

                    <Link className="option" onClick={() => this.togg()} to="/shop">
                        CONTACT
                    </Link>
                    {this.props.currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" onClick={() => this.togg()} to='/signin'>SIGN IN</Link>}
                </div>
                <div onClick={this.state.bool ? () => this.togg() : null}>
                    <CartIcon className="cart-icon"/>
                </div>
                <label onClick={() => this.togg()} htmlFor="toggle">&#9776;</label>
                {
                    this.props.hidden ? null : <CartDropdown/>   
                }
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

// checked={`${hidden ? "false" : ""}`}