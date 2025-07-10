import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/hooks/UserContext";

class AboutClass extends  Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount")
    }

    render(){
        // console.log("Parent render")
        return(
            <>
            About Component {this.state.count}
            <div>
                LoggedIn <UserContext.Consumer>
                    {(data)=><h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name={"RAGHU"}/>
            {/* <UserClass name={"RAGHU2"}/> */}
            </>
        )
    }
        
}

export default AboutClass;