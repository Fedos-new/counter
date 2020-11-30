import React from 'react';
import '../../App.css';
import s from '../counter/Counter.module.css'
import {ButtonsType} from "../counter/Counter";

function Button(props:ButtonsType) {

    return (
        <div className={s.btn} onClick={props.onclick}>
            {props.value}
        </div>
    );
}

export default Button;
