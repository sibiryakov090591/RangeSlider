import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import styles from "./Input.module.css";

type PropsType = {
    minValue: number
    maxValue: number
    from: number
    to: number
    onChangeFromValue: (min: number) => void
    onChangeToValue: (max: number) => void
}

const InputComponent: React.FC<PropsType> = ({
                                                 minValue,
                                                 maxValue,
                                                 from,
                                                 to,
                                                 onChangeFromValue,
                                                 onChangeToValue
                                             }) => {
    // Hooks
    const [fromValue, setFromValue] = useState(from);
    const [toValue, setToValue] = useState(to);
    useEffect(() => {
        setFromValue(from)
        setToValue(to)
    }, [from, to])


    // Handlers
    const setFromHandler = () => {
        if (fromValue <= minValue) {
            onChangeFromValue(minValue)
            setFromValue(minValue)
        } else if (fromValue >= maxValue) {
            onChangeFromValue(maxValue)
            setFromValue(maxValue)
        } else {
            onChangeFromValue(fromValue)
        }
    }
    const setToHandler = () => {
        if (toValue >= maxValue) {
            onChangeToValue(maxValue)
            setToValue(maxValue)
        } else if (toValue <= minValue) {
            onChangeToValue(minValue)
            setToValue(minValue)
        } else {
            onChangeToValue(toValue)
        }
    }
    const onChangeFromValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // Only numbers input
        const value = +e.currentTarget.value.replace(/\D/g, '')
        setFromValue(value)
    }
    const onChangeToValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // Only numbers input
        const value = +e.currentTarget.value.replace(/\D/g, '')
        setToValue(value)
    }
    const onKeyPressFromHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            setFromHandler()
        }
    }
    const onKeyPressToHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            setToHandler()
        }
    }


    // Render
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <input className={styles.input}
                       value={fromValue}
                       onChange={onChangeFromValueHandler}
                       onBlur={setFromHandler}
                       onKeyPress={onKeyPressFromHandler}
                />
                <div className={styles.borderText}>
                    От
                </div>
            </div>
            <div className={styles.inputWrapper}>
                <input className={styles.input}
                       value={toValue}
                       onChange={onChangeToValueHandler}
                       onBlur={setToHandler}
                       onKeyPress={onKeyPressToHandler}
                />
                <div className={styles.borderText}>
                    До
                </div>
            </div>
        </div>
    );
}

export default InputComponent;
