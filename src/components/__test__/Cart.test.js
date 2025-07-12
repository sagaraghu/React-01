import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import DATA from '../mocks/mockResMen.json';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(()=>{return Promise.resolve({
    json:()=> Promise.resolve(DATA)
})});

it("should load rest men component", async () => {
    await act(async () => render(<Provider store={appStore}><BrowserRouter><Header/><RestaurantMenu /><Cart /></BrowserRouter></Provider>));

    const accordionHeader = screen.getByText("Breads (3)");

    fireEvent.click(accordionHeader);
    const itemlist = screen.getAllByTestId("itemList");

    expect(itemlist.length).toBe(3);
    const addbtn = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addbtn[0]);

    const headercart = screen.getByText("Cart (1 items)")

    expect(headercart).toBeInTheDocument();

    fireEvent.click(addbtn[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    const cartItemList = screen.getAllByTestId("itemList");
    expect(cartItemList.length).toBe(5);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(itemlist.length).toBe(3);
    expect(screen.getByText("Your cart is empty ... Add Items to Cart")).toBeInTheDocument();
});