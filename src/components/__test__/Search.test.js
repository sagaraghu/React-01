import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import DATA from "../mocks/fetchMockData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


//defining our own dummy fetch function exactly as original fetch

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(DATA)}
    })
})

it("should Search Restaurant list for kfc text input",async ()=>{
    await act(async ()=> render(<BrowserRouter><Body /></BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(8)
    const searchbtn = screen.getByRole("button",{name:"Search"});
    const inputsearchbx = screen.getByTestId("searchInput");
    fireEvent.change(inputsearchbx, {target:{value:"KFC"}});

    fireEvent.click(searchbtn);
    const cards = screen.getAllByTestId("resCard")
    //screen should load 4 res card
    expect(cards.length).toBe(1);

    expect(searchbtn).toBeInTheDocument();
    
});

it("should filter best rated restaurant",async()=>{
    await act(async()=>(render(<BrowserRouter><Body /></BrowserRouter>)));

    const bestratedbtn = screen.getByRole("button",{name:"BestRating"});

    fireEvent.click(bestratedbtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(7);
})