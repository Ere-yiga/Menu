import React from "react";
import ReactDOM from "react-dom/client";
function App(){
  return(
    <div>
      <h1>Hello react</h1>
      <button>Click Me</button>
    </div>
  );
}
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("welcome")
});
const root = ReactDOM.createRoot(document.getElementById ("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 