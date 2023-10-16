// import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Example from './components/Navbar';

function App() {
  // // let counter = 0;

  // // to update the count value on the web page, we use the useState() function.
  // // This can easily and directly update the value unlike that in vanilla JavaScript
  // const [count, setCounter] = useState(0);

  // // function to add a new value to the previous initial value
  // const addValue = () => {
  //   setCounter((prevCount) => prevCount + 1);
  // };

  // // deduct the value
  // const subValue = () => {
  //   setCounter(count - 1);
  // };

  // let myObj = {
  //   name: 'Sabastian',
  //   age: 32,
  //   city: 'New York',
  // };

  return (
    <>
      <Example />
      <h1 className="text-3xl bg-green-800">React course using Vite</h1>
      {/* <h2>Count Value: {count}</h2>
      <button onClick={addValue} className="text-center p-4 text-orange-200">
        Add value
      </button>
      <br></br>
      <button onClick={subValue}>Remove Value</button> */}
      <Card username="Jesse" />
      <Card post="Backend developer" />
      <Card username="Jenny" post="Backend Staff" />
      <Card username="Bob" post="Database Manager" />
      <Footer />
    </>
  );
}

export default App;
