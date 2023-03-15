import React, { useState } from 'react';//These lines import the React library and the useState hook from the react module. 
import "./sign-up-form and sign-in-form.css"//They also import the CSS file that contains styles for the Signup component.


const Signup = () => {//This line defines a new component named Signup using an arrow function.
  const [name, setName] = useState('');//These lines declare three state variables  
  const [email, setEmail] = useState('');//(name, email, and password) using the useState hook,
  const [password, setPassword] = useState('');//and initialize them to empty strings.

  const handleSubmit = (e) => {//This line defines a new function handleSubmit which prevents the default 
    e.preventDefault();//form submission behavior and can be used to handle form submission later.
    // handle form submission here
  };

  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <div className="social-buttons">
        <a href="https://www.facebook.com/login"><button className="facebook-button">Continue with Facebook</button></a>
        <a href="https://accounts.google.com/signin"><button className="google-button">Continue with Google</button></a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};/*This block of code defines the JSX that will be rendered by the Signup component. 
The code returns a div element with the class name form-container, which contains a h2 element with the text "Sign up", two social login buttons (Facebook and Google),
and a form element. The form element has three label elements with input fields for name, email, and password, respectively.
Each input field is associated with a corresponding state variable and uses the onChange event to update the state variables as the user types.
The form also has a button element for submitting the form. The onSubmit event of the form is associated with the handleSubmit function defined earlier.*/

export default Signup;//This line exports the Signup component as the default export of this file, making it available for use in other files.
