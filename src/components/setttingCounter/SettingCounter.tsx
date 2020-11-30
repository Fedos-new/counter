import React, {useState} from 'react';
import '../../App.css';
import s from '../counter/Counter.module.css'
import Button from "../button/Button";


export type ButtonsType = {
    value: string
    onclick: ()=> void
}


function SettingCounter() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(7)

    const changeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number( e.target.value))
    }
    const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number( e.target.value))
    }

    console.log(maxValue);

    return (
        <div className={s.wrapper}>
            <div className={s.displaySet}>
                <span>max value: </span><input type={'number'} className={s.input} onChange={changeStartValue}/>
                <span>start value: </span><input type={'number'} className={s.input} onChange={changeMaxValue}/>
            </div>
            <div className={s.btns}>
                <Button value={'set'} onclick={()=>{}}/>
            </div>
        </div>
    );
}

export default SettingCounter;
