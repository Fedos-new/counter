import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import SettingCounter from './components/setttingCounter/SettingCounter';
import {restoreState, saveState} from './localStorage';


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(false)

    useEffect(() => {
        setMaxValue(restoreState<number>('savedMaxValue', maxValue))
        setStartValue(restoreState<number>('savedStartValue', startValue))
    }, []);

    const save = () => {
        saveState<number>('savedMaxValue', maxValue)
        saveState<number>('savedStartValue', startValue)
        setDisabled(true)
    };

    return (
        <div className="App">
            <header className="App-header">
                <SettingCounter
                    startValue={startValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    save={save}
                    disabled={disabled}
                    setDisabled={setDisabled}
                />
                <Counter
                    startValue={startValue}
                    maxValue={maxValue}
                />
            </header>
        </div>
    );
}

export default App;
