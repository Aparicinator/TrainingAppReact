import React from "react";
import ReactDOM from "react-dom";

import env from '@env';

const App = () => console.log({ env }) || (
    <div>
        <h1>Hello, welcome to env environment!</h1>
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));