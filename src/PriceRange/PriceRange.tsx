import React, {useState} from 'react';
import InputComponent from './Input/Input';
import SliderComponent from './Slider/Slider';
import styles from './PriceRange.module.css';

type PropsType = {
    title: string
    min: number
    max: number
    from: number
    to: number
    onChangeValues: (from: number, to: number) => void
}

const PriceRange: React.FC<PropsType> = ({
                                             title,
                                             min,
                                             max,
                                             from,
                                             to,
                                             onChangeValues
                                         }) => {

    // State
    const [fromValue, setFromValue] = useState(from);
    const [toValue, setToValue] = useState(to);


    // Handlers
    const inputFromHandler = (min: number) => {
        setFromValue(min);
        onChangeValues(fromValue, toValue);
    }
    const inputToHandler = (max: number) => {
        setToValue(max);
        onChangeValues(fromValue, toValue);
    }
    const sliderHandler = (values: number[]) => {
        setFromValue(values[0]);
        setToValue(values[1]);
    }


    // Render
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {title}
            </div>
            <InputComponent minValue={min}
                            maxValue={max}
                            from={fromValue}
                            to={toValue}
                            onChangeFromValue={inputFromHandler}
                            onChangeToValue={inputToHandler}
            />
            <SliderComponent minValue={min}
                             maxValue={max}
                             from={fromValue}
                             to={toValue}
                             onChangeRange={sliderHandler}
            />
        </div>
    )
}

export default PriceRange;
