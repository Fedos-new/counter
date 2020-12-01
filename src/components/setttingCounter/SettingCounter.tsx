import React from 'react';
import '../../App.css';
import s from '../counter/Counter.module.css'
import Button from "../button/Button";


const SettingCounter = (props: {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    save: () => void
    disabled: boolean
    setDisabled: (value: boolean) => void
}) => {

    const changeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.target.value))
        props.startValue < 0 ? props.setDisabled(true) : props.setDisabled(false)
    }
    const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.target.value))
        props.maxValue <= 0 ? props.setDisabled(true) : props.setDisabled(false)
    }

    let errorClass = props.startValue < 0 || props.maxValue <= 0 ? s.inputError : s.input

    return (
        <div className={s.wrapper}>
            <div className={s.displaySet}>
                <span>max value: </span><input type={'number'} className={errorClass} onChange={changeMaxValue}
                                               value={props.maxValue}/>
                <span>start value: </span><input type={'number'} className={errorClass} onChange={changeStartValue}
                                                 value={props.startValue}/>
            </div>
            <div className={s.btns}>
                <Button value={'set'} onclick={props.save} disabled={props.disabled}/>
            </div>
        </div>
    );
}

export default SettingCounter;
