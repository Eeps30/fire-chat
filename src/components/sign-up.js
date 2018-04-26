import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form';
import Card from './card';
import RenderInput from './render-input';
import { connect } from 'react-redux'
import { signUp } from '../actions';

class SignUp extends Component {
    
    

    handleSignUp(values){
        console.log('Sign Up Info: ', values);
        this.props.signUp(values)
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <Card title="SIGN UP">
                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                    <Field name="email" label="Email" component={RenderInput}/>
                    <Field name="username" label="Username" component={RenderInput}/>
                    <Field name="password" label="Password" component={RenderInput} type="password"/>
                    <Field name="confirmPassword" label="Confirm Password" component={RenderInput} type="password"/>
                    <button className="btn">Sign Up</button>
                </form>
            </Card>
        )
    }
}

function validate(values){
    const { email, username, password, confirmPassword} = values;
    const errors = {};

    if(!email) errors.email = 'Please enter your email'
    if(!username) errors.username = 'Please enter your username'
    if(!password) errors.password = 'Please enter a password'
    if(password !== confirmPassword) errors.confirmPassword = 'Passwords do not match'

    return errors
}

SignUp = reduxForm({
    form: 'sign-up',
    validate
})(SignUp);

export default connect(null, { signUp } )(SignUp);