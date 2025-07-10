import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import '@testing-library/jest-dom'
test("Header js", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn = screen.getByRole("button",{name:"Login"});
  const cartItems = screen.getByText("Cart (0 items)")
    
  fireEvent.click(loginbtn);
  const logoutbtn = screen.getByRole("button",{name:"Logout"});

  expect(logoutbtn).toBeInTheDocument();
  expect(loginbtn).toBeInTheDocument();
  expect(cartItems).toBeInTheDocument();
});
