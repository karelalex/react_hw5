import './App.css';
import {Ex1Class, Ex1Func} from "./Ex1";
import React, {useState} from "react";

function App() {
    const [comp, setComp] = useState('class')

    return (
        <div className="App">
            <button onClick={() => setComp(comp === 'class' ? 'func' : 'class' )}>Смена компонента</button>
            {comp === 'class' && <Ex1Class cuc={77}/>}
            {comp === 'func' && <Ex1Func cuc={44}/>}
        </div>
    );
}

export default App;
