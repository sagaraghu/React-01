import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory(props) {
//   console.log("props", props?.data);
  const {setShowIndex, showItems} = props;
  const { title, itemCards } = props?.data;

  const handleToggle = () => {
    setShowIndex();
  }

  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleToggle}>
          <span className="font-bold text-lg">
            {title} {itemCards?.length > 0 ? `(${itemCards?.length})` : ""}
          </span>
                   
            <span>↓</span>
        </div>
        {/** accordion open  */}
        {/* //create a componentn to show items */}

        { showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
