import React, { useState } from 'react';//This line imports two modules from the 'react' library, React and useState. 
//React is the main module that is used to create React components, while useState is a hook that allows you to use state in functional components.......
import './text-area.css';//This line imports a CSS file that styles the TextArea component. The file is located in the same directory as the component file.


function TextArea() {//This line defines a new function called TextArea. This function returns the JSX code that defines the TextArea component. 
//TextArea is a React component, and it is defined using a functional component.
const [text, setText] = useState('');//This line declares a state variable called text, which is initialized to an empty string using the useState hook. 
//The setText function is used to update the text state variable.
const [remainingChars, setRemainingChars] = useState(100);//This line declares a state variable called remainingChars, which is initialized to 100 using the useState hook. 
//The setRemainingChars function is used to update the remainingChars state variable.

  const handleChange = (event) => {//This line defines a new function called handleChange. This function is called whenever the user types in the text area, 
  //and it updates the state variables accordingly.
    const inputText = event.target.value;//This line gets the current value of the text area and stores it in the inputText variable.
    setText(inputText);//This line updates the text state variable with the current value of the text area.
    setRemainingChars(100 - inputText.length);//This line calculates the number of remaining characters based on the current 
    //length of the text and updates the remainingChars state variable.
  };

  return (//This line starts the return statement that defines the JSX code for the TextArea component.
    <div>{/*This line creates a new div element that wraps the entire TextArea component.*/}
      <textarea
        maxLength="100"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}//This line creates a textarea element with a maxLength attribute set to 100, a placeholder attribute set to "Enter text here",
        //and value and onChange attributes that are set to the text state variable and the handleChange function, respectively.
      />
      <div>{remainingChars} characters remaining</div>{/*This line creates a new div element that displays the number of remaining characters.*/}
    </div>//This line ends the div element that wraps the entire TextArea component.

  );
}

export default TextArea;//This line exports the TextArea component as the default export of this module. This allows other files to import and use the TextArea component.
