import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import counter from "./store/counter";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const Counter: React.FC = observer(() => {
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="elements">
                <a className="btn-floating btn-medium waves-effect waves-light red" onClick={counter.decrease}>
                    <i className="material-icons">remove</i>
                </a>
                <h3 className="m0">{counter.count}</h3>
                <a className="btn-floating btn-medium waves-effect waves-light red" onClick={counter.increase}>
                    <i className="material-icons">add</i>
                </a>
            </div>
        </div>
    )
})

export default Counter;