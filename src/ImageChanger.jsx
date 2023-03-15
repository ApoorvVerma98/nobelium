import React, { useState } from 'react';// - imports React and the useState hook from the 'react' library.
import './image-changer.css';//imports the CSS file for this component.


export default function ImageChanger() {//- defines a default function component called ImageChanger.
  const [image, setImage] = useState('https://picsum.photos/200');//declares a state variable image using the useState hook with a default value of 'https://picsum.photos/200' 
  //and a function to update its value called setImage.

  const handleChangePic = () => {// defines a function called handleChangePic that generates a random number between 1 and 1000 and uses it to update the image state 
    //variable with a new image URL.
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setImage(`https://picsum.photos/id/${randomNumber}/200`); // update the image url
  };

  return (// returns the JSX (JavaScript XML) code that defines the UI for this component.
    <div className="container">{/* - a container div that holds the entire component. */}
      <div className="left-part">{/* a div that holds the image element on the left side of the component. */}
        <img src={image} alt="Random Pic" />{/*an image element with its src attribute set to the image state variable, and its alt attribute set to 'Random Pic'. */}
      </div>
      <div className="right-part">{/* a div that holds the button element on the right side of the component. */}
        <button onClick={handleChangePic}>Change Pic</button>{/* a button element with an onClick attribute that triggers the handleChangePic 
        function when clicked, and displays the text 'Change Pic'. */}
      </div>
    </div>
  );
}

