import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
// import { TripActions } from './store';
import { addAsyncCard } from './store/cards';
import { useDispatch } from 'react-redux';
import { CardState } from './models/types/card-state';


function App() {
  const dispatch = useDispatch()
  const cards = useSelector((state:{cards:CardState})=> state.cards)
  const loader = useSelector((state:{loader:{isLoading:boolean}})=> state.loader)
  console.log(cards)

  const submitHandler = (e:Event)=>{
    e.preventDefault()
    console.log(( e?.target as HTMLFormElement))
    // @ts-ignore
    const numberField =( e?.target as HTMLFormElement).elements?.number
    // @ts-ignore
    dispatch(addAsyncCard(numberField.value))
    ( e?.target as HTMLFormElement).reset()
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${loader.isLoading ? 'loading' : '' }`} alt="logo" />

        {/* @ts-ignore */}
        <form onSubmit={e=>submitHandler(e)}>
          <input name="number" type='text' placeholder='Enter credit card number'/>
          <button type="submit">Add Card</button>
        </form>

        <ul>
          {cards.map(card=><li>{card}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
