import React, {useState} from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import {googleSignInStart, emailSignInStart} from '../../redux/user/userActions';
import {connect} from 'react-redux';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});   

    const {email, password} = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = (e) => {
        const {value, name} = e.target;
        setCredentials({...userCredentials, [name]: value});
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name="email" type="text" value={email} label="email" required/>
                <FormInput handleChange={handleChange} name="password" type="password" value={password} label="password" required/>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);