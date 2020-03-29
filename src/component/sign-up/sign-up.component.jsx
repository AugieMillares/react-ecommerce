import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (e) {
            console.error(e);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name='displayName' label='display name' type='text' value={displayName} required
                               handleChange={this.handleChange}/>
                    <FormInput name='email' label='email' type='email' value={email} required
                               handleChange={this.handleChange}/>
                    <FormInput name='password' label='password' type='password' value={password}
                               handleChange={this.handleChange} required/>
                    <FormInput name='confirmPassword' label='confirm password' type='password' value={confirmPassword}
                               handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignUp;