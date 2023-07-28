import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <>
        <h1>About US</h1>
        <UserClass name={"First"} location={"bengaluru"} contact={"234950"} />
      </>
    );
  }
}
export default About;
