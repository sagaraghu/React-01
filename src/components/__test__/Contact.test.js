import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Page test cases", () =>{
    test("Should load contact us component",()=>{
        render(<Contact />);
    
        //above line is render, which render the component in jsdom 
    
        //how to check component is rendered or not 
        //how will we test contact component is loaded or not i.e heading , input boxes and submit shown or not 
    
        const heading = screen.getByRole("heading")
        //above line will find all the headings inside component  
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact component",()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
        //getByRole
        // roles are deined by html by jest-dom like heading,button 
        //getByText
        const button1 = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
        expect(button1).toBeInTheDocument();
      
    });
    
    test("Should load input placeholder name contact component",()=>{
        render(<Contact />);
       
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
      
    });
    
    test("Should load 2 inputboxes contact component",()=>{
        render(<Contact />);
       
        const input = screen.getAllByRole("textbox");
        expect(input.length).toBe(2);
      
    });
});