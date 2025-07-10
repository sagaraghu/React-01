import { useContext, useEffect, useRef, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { resList } from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/hooks/UserContext";

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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
 const {loggedInUser, setUserName}= useContext(UserContext)

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
      // "https://swiggy-api-4c740.web.app/swiggy-api.json"
      // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
      // "https://pastebin.com/raw/0QcdEDBL"
    );

    const json = await data.json();

    // console.log("josn data",json)

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

  // console.log("list",filteredRes)

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

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return  <>Looks like you are offline !! pllease check your internt </>
  }

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
      <div className="flex items-center">
       <div className="Search m-4 ">
         <input
         className="border border-solid border-black"
           type="text"
           alt="search"
           value={searchText}
           onChange={(e) => {
             setSearchText(e.target.value);
           }}
           data-testid="searchInput"
         />
         <button onClick={handleFilter} className="px-3 py-1 bg-green-300 m-4 rounded-lg cursor-pointer">Search</button>
       </div>
       <div className="">
           <button onClick={bestRating} className="px-3 py-1 bg-gray-100 rounded-lg cursor-pointer">BestRating</button>
         </div>
         <div className="p-4 m-4 flex items-center">
         <label>UserName : </label>
         <input
         className="border border-solid border-black p-2"
           type="text"
           alt="search"
           value={loggedInUser}
           onChange={(e) => {
            setUserName(e.target.value);
           }}
         />
        
       </div>
         </div> 
       <div className="res-container flex flex-wrap" >
         {filteredRes?.map((res,index) => {
           const isLastItem = index === filteredRes.length - 1;
           return (
            <Link to={"/restaurants/"+ res?.info?.id} key={res?.info?.id} ref={isLastItem ? lastElement : null}> 
            {res?.info?.avgRating > 4.2 ? (<RestaurantCardPromoted res={res}/>): (<RestaurantCard res={res} />) }
            </Link>
          )
         }
          
         
         )}
       </div>
     </div>
    //  </InfiniteScroll>
  );
};

export default Body;