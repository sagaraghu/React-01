import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 1,
            count2 :2,
            userInfo:{
                login:"dummyname"
            }
        }
        console.log(this.props.name+"Child constructor")
    }

    async componentDidMount(){
        console.log(this.props.name+"Child componentDidMount")
        const data = await fetch("https://api.github.com/users/sagaraghu");
        const json = await data.json();
        console.log("json value",json);
        this.setState({userInfo:json})
    }

    componentDidUpdate(){
        console.log("did update")
    }

    componentWillUnmount(){
        console.log("unmount")
    }


    render() {
        const { count, count2, userInfo } = this.state;
        const { name } = this.props;
        console.log(this.props.name+"Child render")
        return (
            <div className="user-card">
                <p>Count : {count}</p>
                <button onClick={()=>{this.setState({count : count +1})}}>Increase Count</button>
                <p>Count2 : {count2}</p>
                <p>Name : {userInfo.login}</p>
                <p>Location : Hyderabad</p>
            </div>
        );
    }
}

export default UserClass;