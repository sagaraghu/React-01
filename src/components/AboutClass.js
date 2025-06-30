import {Component} from "react";
import UserClass from "./UserClass";

class AboutClass extends  Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent render")
        return(
            <>
            About Component {this.state.count}
            <UserClass name={"RAGHU"}/>
            {/* <UserClass name={"RAGHU2"}/> */}
            </>
        )
    }
        
}

export default AboutClass;