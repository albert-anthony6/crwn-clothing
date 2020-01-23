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
import {selectBurgerBool} from '../../redux/burger/burgerSelectors';


import {connect} from 'react-redux';
import { toggleBurgerBool } from '../../redux/burger/burgerActions';

const Header = ({currentUser, hidden, bool, dispatch}) => (
    <div className="header">
        <Link className="logo-container" onClick={bool ? () => dispatch(toggleBurgerBool()) : null} to="/">
            <Logo className="logo"/>
        </Link>
        <input type="checkbox" checked={bool} id="toggle"/>
        <div className="options">
            <Link className="option" onClick={() => dispatch(toggleBurgerBool())} to="/">
                HOME
            </Link>
            <Link className="option" onClick={() => dispatch(toggleBurgerBool())} to="/shop">
                SHOP
            </Link>

            <Link className="option" onClick={() => dispatch(toggleBurgerBool())} to="/shop">
                CONTACT
            </Link>
            {currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" onClick={() => dispatch(toggleBurgerBool())} to='/signin'>SIGN IN</Link>}
        </div>
        <div onClick={bool ? () => dispatch(toggleBurgerBool()) : null}>
            <CartIcon className="cart-icon"/>
        </div>
        <label onClick={() => dispatch(toggleBurgerBool())} htmlFor="toggle">&#9776;</label>
        {
            hidden ? null : <CartDropdown/>   
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    bool: selectBurgerBool
});

export default connect(mapStateToProps)(Header);

// checked={`${hidden ? "false" : ""}`}