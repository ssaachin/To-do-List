import React from 'react';
import './App.css';
import InputField from "./components/InputField";


// let name: number;
// name= 5;

// function printNAme(name: string) {
//   console.log(name)
// }

// printNAme("Sachidgn")

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">TypeTask</span>
      <InputField />
    </div>
  );
}

export default App;
