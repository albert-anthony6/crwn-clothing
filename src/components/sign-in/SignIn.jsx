import React from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

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

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }catch(error){
            console.log(error);
        }

    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name="email" type="text" value={this.state.email} label="email" required/>
                    <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="password" required/>

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In WIth Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;