import React from 'react';
import ReactDOM  from 'react-dom/client';


const Title=()=>(
    <div>hello</div>
);
const HeadingComponent=function (){
    return (
    <h1>hai hello
    <Title/>
</h1>)};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)


// const heading=React.createElement("h1",{id:"heading"},"hi teju");
// // when its rendered to DOM then it becomes HTML element
// const jsxHeading=<h1 id="heading">JSX heading</h1>
// //JSX syntax
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)
// what is JSX ? it is a JS syntax which helps to easily create react element