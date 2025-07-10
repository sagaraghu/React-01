# React-01

# Food App


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
// const jsxheading = <h1 id="heading" tabIndex={5}>Namaste React JSX</h1>;
// console.log(jsxheading);

// //normal function

// const TitlChild = function () {
//   return (<h2>normal function </h2>)
// }
// //REACT COMPONENT

// const Title = () => (
//   <div><TitlChild /><h1 className="heading">title component</h1> </div>
// );
// const elem = <span>ELEMNT</span>
// const number = "";
// const ntitle = (<div>{elem}normal JS variable </div>)

// const HeadingComponent = () =>  (<>
//   {number && <Title />}
//   {ntitle}
//   {/* <Title /> */}
//   <h1>HEading component </h1></>)
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

//REACT-04

/**
 * Header
 *  - logo
 *  - nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    -RestaurantCard
 *    -
 */
Default Export/Import 

- Default i.e export default Component 
- import Component from ""


Named Export/Import 

export const Component ;
import {Component} from "path


/** 
# REDUX TOOLKIT
- Install @reduxjs/toolkit and react-redux 
- build our store
- connect our store to our APP
- will create cart slice
- dispatch action - when click on add button 
- then will read the DATA using Selector 
*/


# Setting up testing in our app
- install react testing library 
-installed jest 
- installed babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation 
- jest configuration  - npm init jest@latest
- jest 28 and greater we need to install jest-environment-jsdom
-install @babel/preset-react - to make JSX work in test cases 

- now we need to include @babel/preset-react inside our bael config file 
- install testing-library/jest-dom as error comes due to toBeInTheDocument