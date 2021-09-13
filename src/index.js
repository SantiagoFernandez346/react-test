import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { useState } = React
const Button = ({ increment, onClickFunction }) => {
const handleClick = () => {
onClickFunction(increment)
}
return <button onClick={handleClick}>+{increment}</button>
}

const App = () => {
const [count, setCount] = useState(0)


const incrementCount = increment => {
setCount(count + increment)
}


return (
<div>
<Button increment={1} onClickFunction={incrementCount} />
<span>{count}</span>
</div>
)
}
document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);