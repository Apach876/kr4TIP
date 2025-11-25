import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleClickPlus = () => {
        setCount(count + 1);
    };

    const handleClickMinus = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={handleClickPlus}>
                +
            </button>
            <button onClick={handleClickMinus}>
                -
            </button>
            <p>Счетчик: {count}</p>
        </div>
    );
}

export default App;