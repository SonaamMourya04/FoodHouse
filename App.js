import React from "react";
import ReactDOM from "react-dom/client";


const element = React.createElement(
    "div",
     null, 
    React.createElement(
        "h1",
         null,
          "Welcome to EarthBites🚀"),
    React.createElement(
        "p", 
        null, 
        "This is a basic React app")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
