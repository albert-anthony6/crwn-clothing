import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, CartIconStyles, LabelStyles, InputStyles} from './header.styles';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {selectCurrentUser} from '../../redux/user/userSelectors';
import {selectBurgerBool} from '../../redux/burger/burgerSelectors';

import {connect} from 'react-redux';
import {signOutStart} from '../../redux/user/userActions';
import { toggleBurgerBool } from '../../redux/burger/burgerActions';

const Header = ({currentUser, hidden, bool, dispatch}) => (
    <HeaderContainer>
        <LogoContainer onClick={bool ? () => dispatch(toggleBurgerBool()) : null} to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <InputStyles type="checkbox" checked={bool} id="toggle"/>
        <OptionsContainer id="options">
            <OptionLink onClick={() => dispatch(toggleBurgerBool())} to="/">
                HOME
            </OptionLink>
            <OptionLink onClick={() => dispatch(toggleBurgerBool())} to="/shop">
                SHOP
            </OptionLink>

            <OptionLink onClick={() => dispatch(toggleBurgerBool())} to="/shop">
                CONTACT
            </OptionLink>
            {currentUser ? <OptionLink as="div" onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink> : <OptionLink onClick={() => dispatch(toggleBurgerBool())} to='/signin'>SIGN IN</OptionLink>}
        </OptionsContainer>
        <div onClick={bool ? () => dispatch(toggleBurgerBool()) : null}>
            <CartIconStyles>
                <CartIcon/>
            </CartIconStyles>
        </div>
        <LabelStyles onClick={() => dispatch(toggleBurgerBool())} htmlFor="toggle">&#9776;</LabelStyles>
        {
            hidden ? null : <CartDropdown/>   
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    bool: selectBurgerBool
});

export default connect(mapStateToProps)(Header);

// checked={`${hidden ? "false" : ""}`}