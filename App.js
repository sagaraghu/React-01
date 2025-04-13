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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105857/1553.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { res } = props;
  const { resName, cuisine, rating, sla } = res;
  return (
    <div className="res-card">
      <img
        alt="img1"
        className="res-logo"
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4="
      />
      <h3>{resName}</h3>
      <h4>{cuisine?.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{sla}minutes</h4>
    </div>
  );
};
const resList = [
  {
    resName: "Meghana Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    rating: "4.4",
    sla: 36,
    id:1
  },
  { resName: "KFC", cuisine: ["Burger", "Fast Food"], rating: "4.6", sla: 15, id:2 },
];
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map(res => (
          <RestaurantCard res={res} key={res?.id} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* //Header
      //Body
      //Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
