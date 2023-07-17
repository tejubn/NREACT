import React from 'react';
import ReactDOM  from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';


    const AppLayout=()=>{
        return(
            <div className='container'>
                <Header className="fixed top-0 left-0"/>
                <Body />
            </div>
        )
    }
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


// const heading=React.createElement("h1",{id:"heading"},"hi teju");
// // when its rendered to DOM then it becomes HTML element
// const jsxHeading=<h1 id="heading">JSX heading</h1>
// //JSX syntax
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)
// what is JSX ? it is a JS syntax which helps to easily create react element