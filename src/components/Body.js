import { useEffect, useRef, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router"

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([])
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextOffset, setNextOffset] = useState(null);
  const [loading, setLoading] = useState(false);

  const observer = useRef();
  const lastElement = useRef();


  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       fetchMoreData();
  //     }
  //   },
  //   );
  //   if (lastElement.current) observer.current.observe(lastElement.current);
  // }, [filteredRes, loading]);

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("josn data",json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const fetchMoreData = async () => {
    setLoading(true);
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&nextOffset=CJhlELQ4KIDYl/Wui4erVTCnEzgC")
    const result = await response.json();
    const newItems = result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurantList(prev => [...prev, ...newItems]);
    setFilteredRes(prev => [...prev, ...newItems]);
    setNextOffset(result?.data?.pageOffset?.nextOffset);
    setHasMore(newItems.length > 0);
    setLoading(false);
  };

  

  const bestRating = () => {
    const list = restaurantList?.filter((item) => item?.info?.avgRating > 4);
    setFilteredRes(list);
  };

  const handleFilter = () => {
    const res = restaurantList?.filter((item) => {
      return item?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    setFilteredRes(res);
  };

  if (filteredRes?.length === 0) {
    return <>Loading......</>;
  }

  // return (
  //   <InfiniteScroll
  //     dataLength={restaurantList.length}
  //     next={fetchMoreData}
  //     hasMore={hasMore}
  //     loader={<h4>Loading...</h4>}
  //   >
  //   <div className="body">
  //     <div className="Search">
  //       <input
  //         type="text"
  //         alt="search"
  //         value={searchText}
  //         onChange={(e) => {
  //           setSearchText(e.target.value);
  //         }}
  //       />
  //       <button onClick={handleFilter}>Search</button>
  //       <div className="filter">
  //         <button onClick={bestRating}>BestRating</button>
  //       </div>
  //     </div>
  //     <div className="res-container">
  //       {filteredRes?.map((res,index) => (
  //         <RestaurantCard res={res} key={index} />
  //       ))}
  //     </div>
  //   </div>
  //   </InfiniteScroll>
  // );

  // return (
  //   <div className="body">
  //      <div className="Search">
  //        <input
  //          type="text"
  //          alt="search"
  //          value={searchText}
  //          onChange={(e) => {
  //            setSearchText(e.target.value);
  //          }}
  //        />
  //        <button onClick={handleFilter}>Search</button>
  //        <div className="filter">
  //          <button onClick={bestRating}>BestRating</button>
  //        </div>
  //      </div>
  //      <div className="res-container" >
  //        {filteredRes?.map((res,index) => {
  //         const isLastItem = index === filteredRes.length - 1;
  //         return (
  //           <div
  //             ref={isLastItem ? lastElement : null}
  //             key={index}
  //           >
  //             <RestaurantCard res={res} />
  //           </div>
  //         );
  //        }
  //        )}
  //      </div>
  //    </div>
  // );

  return (
    // <InfiniteScroll
    //   dataLength={restaurantList.length}
    //   next={fetchMoreData}
    //   hasMore={hasMore}
    //   loader={<h4>Loading...</h4>}
    // >
    <div className="body">
       <div className="Search">
         <input
           type="text"
           alt="search"
           value={searchText}
           onChange={(e) => {
             setSearchText(e.target.value);
           }}
         />
         <button onClick={handleFilter}>Search</button>
         <div className="filter">
           <button onClick={bestRating}>BestRating</button>
         </div>
       </div>
       <div className="res-container" >
         {filteredRes?.map((res,index) => {
           const isLastItem = index === filteredRes.length - 1;
           return (
            <Link to={"/restaurants/"+ res?.info?.id} key={res?.info?.id} ref={isLastItem ? lastElement : null}> <RestaurantCard res={res} /> </Link>
          )
         }
          
         
         )}
       </div>
     </div>
    //  </InfiniteScroll>
  );
};

export default Body;