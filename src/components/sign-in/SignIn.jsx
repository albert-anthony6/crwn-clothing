import React from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import {googleSignInStart, emailSignInStart} from '../../redux/user/userActions';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name="email" type="text" value={this.state.email} label="email" required/>
                    <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="password" required/>

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);