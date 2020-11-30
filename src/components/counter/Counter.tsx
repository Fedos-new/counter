import React, {useState} from 'react';
import '../../App.css';
import s from './Counter.module.css'
import Button from "../button/Button";


export type ButtonsType = { // need to fix any  !done
    value: string
    onclick: ()=> void
}


function Counter() {
    const value = 5
    const [count, setCount] = useState<number>(0)
    const inc = () => {
        if (count < value) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={count < value ? s.spanDefault : s.spanRed}>{count}</span>
            </div>
            <div className={s.btns}>
                <Button value={'inc'} onclick={inc}/>
                <Button value={'reset'} onclick={reset}/>
            </div>
        </div>
    );
}

export default Counter;
