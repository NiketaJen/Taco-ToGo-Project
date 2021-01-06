import React, {useState} from "react";
import "../css/Login.css";
import { Button, Form } from 'semantic-ui-react'
import { useHistory } from "react-router";

const Login = (props) => {
  let history = useHistory();

  const [user, changeUser ] = useState({
    username: "",
    password: ""
  });

  // const loggedIn = () => {
  //   localStorage.setItem("loggedIn", true);
  //   history.push("/");
  // };

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(response => response.json())
    .then(userInfo => {
      localStorage.setItem("token", userInfo.token)
      history.push("/menu")
      })
  }

  return (
    <div className="LoginPageContainer">
      <div className="LoginPage">
        <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label>Username</label>
                <input 
                    placeholder='Username' 
                    name='username' onChange={(e)=> changeUser({...user, username: e.target.value})} 
                    value={user.username}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input 
                    placeholder='Password' 
                    name='password' 
                    onChange={(e)=> changeUser({...user, password: e.target.value})} 
                    value={user.password}/>
                </Form.Field>
                
                <Button type='submit'>Login</Button>
        </Form>

              {/* <form onSubmit={(e) => this.handleSubmit}>
               <label>Username</label>
               <input>
                  onChange={(e) => this.handleChange} placeholder= 'Username' name='username' type='text'
               </input>
                <label>Password</label>
                <input>
                   onChange={(e) => this.handleChange} placeholder= 'Password' name='password' type='password'
                </input>
                <input type="submit" className="LoginButton" onClick={() => loggedIn()} content="Login" />
              </form>  */}
      </div>
    </div>
  );
};

export default Login;
