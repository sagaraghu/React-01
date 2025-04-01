import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * <div>
 *  <div>
 *      <h1></h1>
 *  </div>
 * </div>
 */
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello H1 tag from React"
  );

  const heading2 = React.createElement(
    "h1",
    { id: "heading2", xyz: "abc2" },
    "Hello H2 tag from React"
  );

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[heading,heading2]),React.createElement("div",{id:"child2"},[heading,heading2])])

// console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);