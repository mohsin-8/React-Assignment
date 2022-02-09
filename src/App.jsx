import React, { useState } from 'react';
import HomeComp from './Component/HomeComp';

const App = () => {
  // const [color, setColor] = useState("red");
  // const [car, setCar] = useState({
  //   brand: 'Ford',
  //   model: 'Mustang',
  //   year: '1964',
  //   color: 'red'
  // });

  // const updateColor = () => {
  //   setCar(previousState => {
  //     return { ...previousState, color: 'blue' }
  //   })
  // }

  // const [name, setName] = useState('Mohsin');
  // console.log(name);
  // let handleChange = () => {
  //   setName(`${name} Ali Khan`)
  // }
  const [word, setWord] = useState('Parent')
  return (
    <>
      <h1>{word}</h1>
      <HomeComp changeTitle={word => setWord(word)} />
      {/* <h1>my color is {color}</h1>
      <button onClick={() => setColor('blue')}>Change Color</button> */}
      {/* <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateColor}>Change Car Color</button> */}
      {/* <h1>Name: {name}</h1>
      <button onClick={handleChange}>Change Name</button> */}
    </>
  );
};

export default App;
