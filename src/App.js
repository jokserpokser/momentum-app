import logo from './logo.svg';
import './App.css';
import Time from './components/Time';
import { useEffect, useState } from 'react';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');

  const [mainGoalInput, setMainGoalInput] = useState('');
  const [mainGoal, setMainGoal] = useState('');

  const [nameInputClassName, setNameInputClassName] = useState('block');
  const [mainGoalInputClassName, setMainGoalInputClassName] = useState('hidden');

  useEffect(() => {

  }, [name])
  return (
    <div className="App">
      <h2>Good Morning</h2>
      <h3><Time /></h3>

      {nameInputClassName == 'hidden' && (
        <p>Hello, <button className='hover:text-blue-900' onClick={() => {
          setNameInputClassName('block');
          setMainGoalInputClassName('hidden');
        }}>{name}!</button></p>
      )}

      {mainGoalInputClassName == 'hidden' && nameInputClassName == 'hidden' &&
        (
          <>
            <h2>Main Goal</h2>
            <p><button className='hover:text-blue-900' onClick={() => {
              setMainGoalInputClassName('block');
            }}>{`${mainGoal}`}</button></p>
          </>
        )
      }


      <div className={nameInputClassName}>
        <p><label htmlFor="name">What should we call you?</label></p>
        <input type="text" className='py-1 px-2 border-b border-black' value={nameInput} placeholder='Input your name' onChange={(e) => { setNameInput(e.target.value) }} />
        <button className='bg-blue-950 text-white px-2 py-1 hover:bg-blue-900' onClick={() => {
          setName(nameInput);
          setNameInputClassName('hidden');
          if (!name){
            setMainGoalInputClassName('block');
          }
        }}>Enter</button>
      </div>

      <div className={mainGoalInputClassName}>
        <p><label htmlFor="name">What is your main goal for Today?</label></p>
        <input type="text" className='py-1 px-2 border-b border-black' value={mainGoalInput} placeholder='Input your name' onChange={(e) => { setMainGoalInput(e.target.value) }} />
        <button className='bg-blue-950 text-white px-2 py-1 hover:bg-blue-900' onClick={() => {
          setMainGoal(mainGoalInput);
          setMainGoalInputClassName('hidden');
        }}>Enter</button>
      </div>

    </div>
  );
}

export default App;
