import logo from './logo.svg';
import React, {useRef} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
// import { TripActions } from './store';
import { addAsyncCard } from './store/cards';
import { useDispatch } from 'react-redux';
import { CardState } from './models/types/card-state';
import Toast from './components/Toast';
import { messageActions } from './store/messages';


function App() {
  const dispatch = useDispatch()
  const cards = useSelector((state:{cards:CardState})=> state.cards)
  const loader = useSelector((state:{loader:{isLoading:boolean}})=> state.loader)
  const form = useRef<HTMLFormElement>()
  console.log(cards)

  const submitHandler = (e:Event)=>{
    e.preventDefault()
    const numberField = (form.current?.elements as unknown as HTMLFormElement)?.number as HTMLInputElement;

    if(form.current?.checkValidity()){
      dispatch<any>(addAsyncCard(parseInt(numberField.value)))
      form.current.reset()
    } else {
      const message: Array<string> = []
      if(numberField.validity.patternMismatch)
        message.push("Only numbers can be used")
      if(numberField.validity.valueMissing)
        message.push("A number must be entered into the field")
      if(numberField.validity.rangeOverflow)
        message.push("The max number count should be 16")
      if(numberField.validity.rangeUnderflow)
        message.push("The min number number should be 9999999999999999")     
      
      dispatch(messageActions.addMessages(message))
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${loader.isLoading ? 'loading' : '' }`} alt="logo" />

        {/* @ts-ignore */}
        <form onSubmit={e=>submitHandler(e)} ref={form}>
          <input 
            name="number" 
            type='number' 
            placeholder='Enter credit card number' 
            min={0}
            max={9999999999999999}
            required pattern="[0-9]{16,16}"
            />
          <button type="submit">Add Card</button>
        </form>

        <ul>
          {cards.map(card=><li>{card}</li>)}
        </ul>
      </header>
      <Toast/>
    </div>
  );
}

export default App;
