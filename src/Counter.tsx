import React, {useState} from 'react';
import './App.css';
import s from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState<number>(0)
    const inc = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    console.log(count)

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={count < 5 ? s.spanDefault : s.spanRed}>{count}</span>
            </div>
            <div className={s.btns}>
                <div className={s.btn} onClick={inc}>inc</div>
                <div className={s.btn} onClick={reset}>reset</div>
            </div>


        </div>
    );
}

export default Counter;
