import {useState,useEffect} from "react"; 
import {useParams} from 'react-router';
import { MENUAPI_URL } from '../constant';

const useRestaurantMenu = ({resId}) => {
    
    const [resMenuInfo, setResMeniInfo] = useState(null);



    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENUAPI_URL+resId);
        const json = await data.json();
        setResMeniInfo(json.data)
    } 

    return resMenuInfo;
}

export default useRestaurantMenu;