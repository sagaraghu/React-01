import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../RestaurantCard";

it("should render Restaurant card component with props data",()=>{
    render(<RestaurantCard res={MOCK_DATA}/>);

    const name = screen.getByText("Bakingo");
    expect(name).toBeInTheDocument();
});

it("should render Restaurant component with promoted label",()=>{
    //test hoc withPromotedLabel
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    render(<PromotedRestaurant res={MOCK_DATA} />);
  
    // Check for "Promoted" label
    expect(screen.getByText("Promoted")).toBeInTheDocument();
  
    // Check that Restaurant name still appears
    expect(screen.getByText("Bakingo")).toBeInTheDocument();
});