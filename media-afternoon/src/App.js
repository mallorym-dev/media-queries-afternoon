import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.dropdown = React.createRef()

  }
  
  render() {
    return (
      <div className="App">
       <nav>
         <div id='header'>Start Bootstrap</div>
          <div className='button-container'>
            <div button='button'>Services</div>
            <div button='button'>Portfolio</div>
            <div button='button'>About</div>
            <div button='button'>Team</div>
            <div button='button'>Contact</div>
          </div>
         
       </nav>
       <div className='body'>Welcome To Our Studio!</div>
       <div className='meet'>It's Nice To Meet You!</div>
       <div className='button-space'>
         <button className='tellme'>Tell Me More!</button>
       </div>
       <div className='services'>
        Services
       </div>
       <div className='lang'>Lorem ipsum dolor sit amet consectetur.</div>
       <div className='circles'>
         <div className='cirOne'></div>
         <div className='cirTwo'></div>
         <div className='cirThree'></div>
       </div>
       

        
      </div>
    );
  }
  
}

export default App;
