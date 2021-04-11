import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth,provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login(){
    const [state,dispatch]=useStateValue();
    const signIn=(e)=>{
        auth
            .signInWithPopup(provider)
            .then(result =>{
                console.log(result);
               dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch(error=>{
                alert(error.message)
                });
    }
    return (
        <div className="login">
            <div className="login_container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/498px-Slack_Technologies_Logo.svg.png" />
            <h1>Sign In to Uptron Africa</h1>
                <p>uptronafrica.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;