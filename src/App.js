import React from "react";
import Heading from "./Heading";
import InputFields from "./InputFields";
import SubmitButton from "./SubmitButton";

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <Heading text="Register Here..." />
        <InputFields />
        <SubmitButton text="Submit" handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default App;

//.........//.........//.........//.........//.........//.........//.........//.........//.........//.........//........//.........//.........

// import './App.css';

// function App() {
//   return (
  
//     <div className="form-box">
//     <form>
//     <h1> Register here... </h1>
//       <input type= "text" placeholder= "Mobile No..."></input><br>
//       </br>
//       <input type= "text" placeholder= "Password..."></input><br>
//       </br>
//       <button>Submit</button><br>
//       </br>

//     </form>
//   </div>

//   );
// }

// export default App;
