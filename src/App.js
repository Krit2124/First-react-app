import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  let links = ['Главная', 'Мои работы', 'И что-то ещё']

  let [counter, setCounter] = useState(0)

  const plus = () => {
    setCounter(counter+1)
  }

  const minus = () => {
    setCounter(counter-1)
  }

  return (
    <div className="App">
      <Header links={links} />
      <Main counter={counter} minus={minus} plus={plus}/>
    </div>
  );
}

export default App;
