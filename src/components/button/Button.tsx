import React from 'react';
import '../../App.css';
import s from '../counter/Counter.module.css'
import {ButtonsType} from "../counter/Counter";

function Button(props:ButtonsType) {

    return (
        <button className={s.btn} onClick={props.onclick}  disabled={props.disabled} >
            {props.value}
        </button>
    );
}

export default Button;
