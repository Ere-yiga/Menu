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
    <div className = "container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header(){
 //const style = {color: "blue", fontSize: "40px"};
 const style = {} 
 return(
    <header className="header">
      <h1 style={style}>Pizza Co.</h1>
    </header>
  )
}
function Menu(){
  const pizzas = PizzaData; 
  /* const pizzas= {};*/
  const numPizzas = pizzas.length;

  return (
    <main className = "menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>

          <p>Italian</p>

          <ul className="pizzas">
            {PizzaData.map(pizza =>
               <Pizza pizzaObj={pizza} key={pizza.name}/>)}
          </ul>
        </>
      ): <p>We're still working on our menu, please come back later</p>} 
     {/*  <Pizza name="Pizza Spinachi" ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName="pizzas/spinaci.jpg" 
      price={10}
      />

      <Pizza name="Pizza Funghi"
      ingredients="Tomato mushrooms"
      price={12}
      photoName = "pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
//INSTEAD OF USING .props everytime, I CAN JUST DESTRUCTURE
function Pizza({ pizzaObj }){
  //if(pizzaObj.soldOut) return null;
  return(
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div className="">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  )
};

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour
  console.log(isOpen)
  //if(hour >= openHour && hour <= closingHour)alert("We are opened");
  //else alert("We are closed");

/*   if(!isOpen)
    return (
      <p>
        We're happy to welcome you betweem {openHour}:00 and {closingHour}:00
      </p>
    )  */
  
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closingHour} openHour={openHour}/>
      ) : <p>We're happy to welcome you betweem {openHour}:00 and {closingHour}:00</p>}
    </footer>
  );
  //React.createElement("footer", null, "Welcome peeps");
}

function Order({ closingHour, openHour }){
  return(
    <div className="order">
      <p>We are open from {openHour}:00 to {closingHour}:00. Come visit us or order online</p>          
      <button className="btn">Order</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById ("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
