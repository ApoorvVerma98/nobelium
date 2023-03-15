// //Assignment 1 and 2...
// import React from 'react';
// import ImageChanger from "./ImageChanger";
// import TextArea from './TextArea';

// function App() {//This line defines a new function called App. This function returns the JSX code that defines the entire application. 
// //App is a React component, and it is defined using a functional component.
//   return (//This line starts the return statement that defines the JSX code for the App component. This JSX code is what gets rendered to the screen.
//   <div className="App">{/*This line creates a new div element with the className of App. This div element serves as the top-level container for the App component.*/}
//   <ImageChanger />{/*This line includes the ImageChanger component inside the div element created in step 6. 
//   This component renders an image and a button that changes the image when clicked.*/}
//   <TextArea />{/*This line includes the TextArea component inside the div element created in step 6. This component renders a text area that allows the user to type in text.*/}
//     </div>
//   );//This line ends the return statement that defines the JSX code for the App component.
// }

// export default App;//This line exports the App component as the default export of this module. This allows other files to import and use the App component.

//....................................................................//.............................................................................................//

//Assignment 3 

import React, { useState } from 'react';//here in this line imports the React library and the useState hook from the react module...........

import Login from "./SignInForm";//These lines import the Login and Signup components 
import Signup from "./SignUpForm"; //from two other files in the same directory and 
import "./sign-up-form and sign-in-form.css"//a CSS file that contains styles for the Login and Signup components.........
                                    

const Auth = () => { //This line defines a new component named Auth using an arrow function.
  const [isLogin, setIsLogin] = useState(true);//This line declares a new state variable isLogin and initializes it to true using the useState hook.
  //It also declares a function setIsLogin which can be used to update the value of isLogin
  const toggleForm = () => {//This line defines a new function toggleForm which updates the value of isLogin by toggling it between true and false.
    setIsLogin(!isLogin);  
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        {isLogin ? <Login /> : <Signup />}
      </div>
      <div className="form-toggle">
        <button onClick={toggleForm}>
          {isLogin ? 'Sign up' : 'Login'}
        </button>
        {!isLogin && (
          <p>
            Don't have any account? <span className="highlight">Sign up</span> now.
          </p>
        )}
      </div>
    </div>
  );
  
};/*This block of code defines the JSX that will be rendered by the Auth component. The code returns a div element with the class name auth-container, 
which contains two child div elements. The first child div element has the class name form-container and conditionally renders either the Login or Signup 
component based on the value of isLogin. The second child div element has the class name form-toggle and contains a button that toggles the value of isLogin when clicked. 
The text on the button changes depending on the value of isLogin. If isLogin is false, the component also renders a paragraph that encourages the user to sign up.*/

export default Auth;//This line exports the Auth component as the default export of this file, making it available for use in other files.



