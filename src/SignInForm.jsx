import React, { useState } from 'react';//This line imports the React library and the useState hook from the react module.
import "./sign-up-form and sign-in-form.css";//This line imports a CSS file that contains styling rules for the component.

const Login = () => {//This line defines a new React component called Login as an arrow function.
  const [email, setEmail] = useState('');//These lines use the useState hook to create two state variables, email and password, and
  const [password, setPassword] = useState('');// two corresponding state update functions, setEmail and setPassword, that initialize their values to empty strings.

  const handleSubmit = (e) => {//This line defines a function called handleSubmit that is called when the login form is submitted. 
    e.preventDefault();//It prevents the default behavior of the form, which is to reload the page, 
    // and does nothing else. The comment suggests that the code for handling the form submission would go here.
  };

  return (
    <div className="form-container">
      <h2>Welcome</h2>
      <h4>Log In your account!</h4>
      <div className="social-buttons">
        <a href="https://www.facebook.com/login"><button className="facebook-button">Continue with Facebook</button></a>
        <a href="https://accounts.google.com/signin"><button className="google-button">Continue with Google</button></a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};/*This block of code is the JSX that defines the structure and content of the login form. It includes an HTML form element with two input fields for email and password,
and a submit button. The onSubmit attribute of the form is set to call the handleSubmit function defined earlier.
The value attributes of the input fields are set to the email and password state variables, respectively, so that their values are controlled by React state. 
The onChange attributes of the input fields are set to call the setEmail and setPassword functions, respectively, whenever their values change, 
so that the state variables are updated. The className attributes are set to apply CSS classes defined in the imported CSS file, which will style the form. 
Finally, the JSX is enclosed in parentheses and returned by the component function.*/





export default Login;
