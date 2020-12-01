import React, {useEffect, useState} from 'react';
import '../../App.css';
import s from './Counter.module.css'
import Button from "../button/Button";

export type ButtonsType = {
    value: string
    onclick: () => void
    disabled: boolean
}

function Counter(props: {
    startValue: number
    maxValue: number
}) {
    useEffect(() => {
        setCount(props.startValue)
    }, [props.startValue]);

    const [count, setCount] = useState<number | string>(props.startValue)

    const inc = () => {
        setCount(props.startValue)
        if (count < props.maxValue) {
            setCount(+count + 1)
        }
    }
    const reset = () => {
        setCount(props.startValue)
    }

    let error = props.startValue < 0 || props.maxValue < 0

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={count >= props.maxValue || error ? s.spanRed : s.spanDefault}>
                    {error ? 'please enter values > 0' : count}
                </span>
            </div>
            <div className={s.btns}>
                <Button value={'inc'} onclick={inc} disabled={count === props.maxValue}/>
                <Button value={'reset'} onclick={reset} disabled={false}/>
            </div>
        </div>
    );
}

export default Counter;
