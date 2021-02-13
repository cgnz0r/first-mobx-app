import './App.css';
import React from "react";
import Counter from './Counter';
import Todo from './Todo';

const App: React.FC = () => {
    return (
        <div className="app">
            <Counter />
            <Todo />
        </div>
    );
}

export default App;