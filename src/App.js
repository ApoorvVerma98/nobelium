import React from 'react'; //Imports React library, So I will use to create components.
import './App.css';//imports the CSS file that contains style for my App component.
import Card from './card'; // imports the Card component from the card.js file.

const User1 = { //JS object named user 1 contains info of first user
  name: 'Amit',
  image:
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
  designation: 'Graphic Designer',
  description:
    'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.',
};

const User2 = { //JS object named user 1 contains info of first user
  name: 'Ruhi',
  image:
    'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  designation: 'Singer',
  description:
    'Perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.',
};
// data is passed to the Card component through props drilling. The data of each user is defined in two objects, User1 and User2.
function App() { // its a react functional component 
  return (
    <div className="container">{/* objects are passed to the Card component as props using the spread operator.*/}
      <Card {...User1} /> {/*objects contain the information about each user such as */}
      <Card {...User2} /> {/*their name, image, designation, and description.*/}
    </div>
  );
}

export default App;
//The UI of the application works by rendering the Card component for each user object