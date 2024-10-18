import './App.css';
import Tasks from './components/Tasks';
import Time from './components/Time';
import { useEffect, useState } from 'react';

function App() {
  const [timeGreeting, setTimeGreeting] = useState('')

  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');

  const [mainGoalInput, setMainGoalInput] = useState('');
  const [mainGoal, setMainGoal] = useState('');

  const [nameInputClassName, setNameInputClassName] = useState('block');
  const [mainGoalInputClassName, setMainGoalInputClassName] = useState('hidden');

  const [mainGoalChecked, setMainGoalChecked] = useState(false);

  useEffect(() => {
    const updatedGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setTimeGreeting("Good Morning");
      } else if (hour < 18) {
        setTimeGreeting("Good Afternoon");
      } else {
        setTimeGreeting("Good Evening");
      }
    };

    updatedGreeting();
    const timer = setInterval(updatedGreeting, 1000);

    return () => clearInterval(timer);
  })

  return (
    <div className="App">
      <div className='bg-gray-900 text-white h-screen flex flex-col justify-center'>
        <div>
          <h2 className='text-8xl'><Time /></h2>
          <h3 className='text-4xl mb-24'>
            {nameInputClassName === 'hidden' && (
              <p>{timeGreeting}, <button className='hover:underline' onClick={() => {
                setNameInputClassName('block');
                setMainGoalInputClassName('hidden');
              }}>{name}.</button></p>
            )}
          </h3>
        </div>


        {mainGoalInputClassName === 'hidden' && nameInputClassName === 'hidden' &&
          (
            <>
              <h2 className='font-bold text-2xl'>Today</h2>
              <label>
                <input type="checkbox" className='w-6 h-6 bg-transparent' checked={mainGoalChecked} onChange={(e) => {
                  setMainGoalChecked(e.target.checked);
                }} /><button className={mainGoalChecked ? 'line-through over:underline text-4xl ml-4 text-gray-700' : 'hover:underline text-4xl ml-4'} onClick={() => {
                  setMainGoalInputClassName('block');
                }}>{`${mainGoal}`}</button>
              </label>
            </>
          )
        }

        <div className={nameInputClassName} >
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            setName(nameInput);
            setNameInputClassName('hidden');
            if (!name || !mainGoal) {
              setMainGoalInputClassName('block');
            }
          }}>
            <p><label htmlFor="name">What should we call you?</label></p>
            <input type="text" className='py-1 px-2 border-b border-white bg-transparent focus:outline-none text-center' value={nameInput} placeholder='Input your name' onChange={(e) => { setNameInput(e.target.value) }} />
            <br></br>
            <input type="submit" className='bg-blue-800 text-white px-2 py-1 hover:bg-blue-900 mt-4 invisible' value="Enter" />
          </form>
        </div>

        <div className={mainGoalInputClassName}>
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            setMainGoal(mainGoalInput);
            setMainGoalInputClassName('hidden');
          }}>
            <p className='mb-4'><label htmlFor="name">What is your main goal for Today?</label></p>
            <input type="text" className='py-1 px-2 border-b border-white bg-transparent focus:outline-none text-center' value={mainGoalInput} placeholder='Input your Goal for Today' onChange={(e) => { setMainGoalInput(e.target.value) }} />
            <br />
            <input type="submit" className='bg-blue-800 text-white px-2 py-1 hover:bg-blue-900 mt-4 invisible' value="Enter" />
          </form>
        </div>

        <div className='absolute bottom-0 right-0 pb-4 pr-6'>
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
