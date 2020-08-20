import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignUpForm extends React.Component{

    render(){
        return(
            <div className="SignUpForm"><h1>Create An Account</h1>
             <Form>
                <Form.Field>
                <label> Name</label>
                <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        ) 
    }
}







export default SignUpForm;
