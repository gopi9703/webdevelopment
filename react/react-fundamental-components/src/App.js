import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

// class App extends Component {

//   state = {
//           person: [
//             {name: 'max', age: 30},
// {name: 'max1', age: 31},
// {name: 'max2', age: 32}
//           ]};

// updateStateMethod = () => {
//   this.setState({ 
//   person: [
//             {name: 'max', age: 31},
// {name: 'max1', age: 32},
// {name: 'max2', age: 33}
//           ]
//   })
// }

//  componentWillMount() {
//       console.log('Component will mount!')
//    }
//   componentDidMount() {
//       console.log('Component did mount!')
//       this.getList();
//    }


// shouldComponentUpdate(nextProps, nextState){
//          return this.state.list!==nextState.list;
         //   return true;
//         }
//        componentWillUpdate(nextProps, nextState) {
//           console.log('Component will update!');
//        }
//        componentDidUpdate(prevProps, prevState) {
//           console.log('Component did update!')
//        }

//   render() {
  
//     return (
//       <div className="App">
//        <h1>Hi, I'm a React App</h1>
//        <p>This is really working!</p>
//        <button onClick={this.updateStateMethod}>Update</button>
//        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
//        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
//        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }



export default function App() {

  const [personState, SetPersonState] = useState({
    person: [
      { name: 'max', age: 30 },
      { name: 'max1', age: 31 },
      { name: 'max2', age: 32 }
    ]
  });

  // const updateStateMethod = () => {
  //   SetPersonState({
  //     person: [
  //       { name: 'max', age: 31 },
  //       { name: 'max1', age: 32 },
  //       { name: 'max2', age: 33 }
  //     ]
  //   });
  // };

const deletePerson = (personIndex) => {
  const person = [...personState.person];
  person.splice(personIndex, 1)
  SetPersonState({person : person})
}

const randomNumber = Math.random();

if(randomNumber > .5) {
  throw new Error('some thing went wrong');
}


  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button >Update</button>
      {personState.person.map((person, index) => {
      return <ErrorBoundary key={person.name}>
       <Person name={person.name} age={person.age}  click={() => deletePerson(index)} />
      </ErrorBoundary>
}) }
   
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}



