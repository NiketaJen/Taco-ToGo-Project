import React, {useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import { useHistory } from "react-router";

const API = "http://localhost:3000/users"

const SignUpForm =(props) => {
    const [user, createUser ] = useState({
        name: "",
        username: "",
        password_digest: ""
    });

    let history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: user.name,
              username: user.username,
              password_digest: user.password_digest,
            }),
          })
            .then((res) => res.json())
            .then((p) => history.push("/login"));
        };
      
   
        return(
            <div className="SignUpForm"><h1>Create An Account</h1>
             <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label> Name</label>
                <input 
                    placeholder='Name' 
                    name='name' 
                    onChange={(e)=> createUser({...user, name: e.target.value})} 
                    value={user.name}/>
                </Form.Field>
                <Form.Field>
                <label>Username</label>
                <input 
                    placeholder='Username' 
                    name='username' onChange={(e)=> createUser({...user, username: e.target.value})} 
                    value={user.username}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input 
                    placeholder='Password' 
                    name='password_digest' 
                    onChange={(e)=> createUser({...user, password_digest: e.target.value})} 
                    value={user.password_digest}/>
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        ) 
}







export default SignUpForm;
