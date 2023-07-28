import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        userInfo:{
          name:"abc",
          location:"gyfgjkhhhhhhhhhhhhhhhhhh"
        }
        
    }
    
    // console.log(this.props.name+"Child Constructor");
  }
 async componentDidMount() {
    // console.log(this.props.name+"Child component did mount");
  const data=  await fetch("https://api.github.com/users/tejubn");
  const json= await data.json();
  this.setState({
    userInfo:json
  })
  console.log(json)
  }
  render() {
    
    // console.log("Child render");
    const {name,location,avatar_url
    }=this.state.userInfo;

    return (
      <div>
        <img src={avatar_url}/>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <p>Contact : </p>
      </div>
    );
  }
}
export default UserClass;
