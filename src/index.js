import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const PizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return(
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header(){
 const style = {color: "blue", fontSize: "40px"};
  return(
    <h1 style={style}>Hey there, you're welcome to Ereh's first React livepage</h1>
  )
}
function Menu(){
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
  )
}

function Pizza(){
  return(
    <div>
      <img src="/pizzas/spinaci.jpg" alt="pizza spinachi" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
};

function Footer(){
  const hour = new Date().getHours();
  const openHour = 9;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour
  console.log(isOpen)
  //if(hour >= openHour && hour <= closingHour)alert("We are opened");
  //else alert("We are closed");

  return <footer>{new Date().toLocaleTimeString()} Welcome peeps</footer> 
  //React.createElement("footer", null, "Welcome peeps");
}
const root = ReactDOM.createRoot(document.getElementById ("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

); 
