import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    padding: 0 50px;
    font-size: 22px;

    @media screen and (max-width: 800px){
        margin-bottom: 15px;
    }

    @media screen and (max-width: 700px){
        font-size: 1.2em;
    }

    @media screen and (max-width: 500px){
        #toggle:checked + #options{
            display: flex;
        }
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 500px){
        flex-direction: column;
        justify-content: space-around;
        height: 30vh;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 65px;
        background-color: rgba(2, 2, 2, 0.9);
        display: none;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 800px){
        padding: 10px 7px;
    }

    @media screen and (max-width: 500px){
        color: white;
    }
`;

export const CartIconStyles = styled.div`
    margin-top: 10px;

    @media screen and (max-width: 500px){
        margin-top: 28px;
    }
`;

export const LabelStyles = styled.label`
    font-size: 26px;
    display: none;

    @media screen and (max-width: 500px){
        display: block;
        cursor: pointer;
        margin-top: 28px;
    }
`;

export const InputStyles = styled.input`
    display: none;
`;