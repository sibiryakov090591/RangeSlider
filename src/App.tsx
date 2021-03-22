import React, {useState} from 'react';
import './App.css';
import PriceRange from "./PriceRange/PriceRange";

function App() {

    // Constants
    const START_FROM_VALUE = 99;
    const START_TO_VALUE = 10690;


    // State
    const [fromValue, setFromValue] = useState(START_FROM_VALUE);
    const [toValue, setToValue] = useState(START_TO_VALUE);


    // Handlers
    const priceRangeHandler = (from: number, to: number) => {
        setFromValue(from);
        setToValue(to);
    }


    // Render
    return (
        <div className="App">
            <PriceRange title={`Цена, ₽`}
                        min={START_FROM_VALUE}
                        max={START_TO_VALUE}
                        from={fromValue}
                        to={toValue}
                        onChangeValues={priceRangeHandler}
            />
        </div>
    );
}

export default App;
