import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from '../utils/UserContext';
class About extends Component{
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {

  }
  render()
  {
    return(
      <div>
        <h1>About Class Component</h1>
        <UserContext.Consumer >{({loggedUser})=><p>{loggedUser}</p>}</UserContext.Consumer>
        {/* <UserClass name={"first"} location={"abc"}/> */}
      </div>
    )
  }
}
export default About;