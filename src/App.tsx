import React from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import SettingCounter from './components/setttingCounter/SettingCounter';



function App() {


    return (
        <div className="App">
            <header className="App-header">
                <SettingCounter />
                <Counter/>
            </header>
        </div>
    );
}

export default App;
