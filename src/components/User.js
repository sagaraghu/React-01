import { use, useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
return (
    <div className="user-card">
        <p>Count : {count}</p>
        <p>Count2 : {count2}</p>
        <p>Name : {name}</p>
        <p>Location : Hyderabad</p>
    </div>
);
}

export default User;