//import logo from './logo.svg';
//import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';

//　ランダム生成 0~1の小数 * max(50)以下の最大の整数 + 1(50までならないから)
const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};


function Guess({ onGuess }){
  const [val, setVal] = React.useState(0);

  const handleChange = e => setVal(e.target.value);
  const handleClick = e => onGuess(val * 1); //val * 1 means

  return (
    <React.Fragment>
    <input type="number" value={val} onChange={handleChange} />
    <button type="button" onClick={handleClick}>予想する</button>
    </React.Fragment>
  );
}

function NumberGuessing(){
  const max = 50;
  const initialCount = 5;
  const [answer, setAnswer] = React.useState(random(max));
  const [count, setCount] = React.useState(initialCount);
  const [message, setMessage] = React.useState('');

  const judge = num => {
    if (count === 0) return;

    //count
    setCount(count - 1);

    if (num === answer) {
      setMessage('正解です！');
    } else if (count === 1) {
      setMessage('残念でした！正解は' + answer);
    } else if (num > answer) { 
      setMessage('もっと小さいです');
    } else if (num < answer) {
      setMessage('もっと大きいです');
    }
  };

  const replay = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage('');
  };

  return (
    <React.Fragment>
    <Guess onGuess={judge}/>
    <p>{message}</p>
    <p>あと{count}回</p>
    <button type="button" onClick={replay}>
      はじめから
    </button>
    </React.Fragment>
  );


}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
export default NumberGuessing;