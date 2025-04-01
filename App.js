import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div>
 *  <div>
 *      <h1></h1>
 *  </div>
 * </div>
 */
// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello H1 tag from React"
//   );

//   const heading2 = React.createElement(
//     "h1",
//     { id: "heading2", xyz: "abc2" },
//     "Hello H2 tag from React"
//   );

// const parent = React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child"},[heading,heading2]),React.createElement("div",{id:"child2"},[heading,heading2])])

// // console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "REACT ELEMENT");
const jsxheading = <h1 id="heading" tabIndex={5}>Namaste React JSX</h1>;
console.log(jsxheading);

//normal function 

const TitlChild = function () {
  return (<h2>normal function </h2>)
}
//REACT COMPONENT

const Title = () => (
  <div><TitlChild /><h1 className="heading">title component</h1> </div>
);
const elem = <span>ELEMNT</span>
const number = "";
const ntitle = (<div>{elem}normal JS variable </div>)

const HeadingComponent = () =>  (<>
  {number && <Title />}
  {ntitle}
  {/* <Title /> */}
  <h1>HEading component </h1></>)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);