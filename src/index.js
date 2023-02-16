import App from "./components/App";
const react = require("react");
const reactDOM = require("react-dom");

reactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// JSX-JavaScript XML
// reactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// Vanilla JavaScript
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);
