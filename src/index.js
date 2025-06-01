import React from "react";
import ReactDOM from "react-dom/client";

function App(){
    return<h1>Hello react!!</h1>
}
//React V18
const root = ReactDOM.createRoot(document.getElementById ("root"));
root.render(<App/>);

<React.StrictMode>
    <App />
</React.StrictMode>