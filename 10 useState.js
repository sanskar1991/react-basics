import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Mike', age: 27},
      { name: 'Mist', age: 26}
    ]
  });

  const switchNameHandler = () => {
    // console.log('Clicked');
    setPersonsState({
      persons: [
        { name: 'Max', age: 28},
        { name: 'Michel', age: 27},
        { name: 'Mist', age: 29}
      ]
    });
  };
    return (
      <div className="App">
        <h1>I'm React App</h1>
        <p>This is a paragraph</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Does it work?'))
  };

export default App;

