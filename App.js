import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container">
      <Header className="fixed top-0 left-0" />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const heading=React.createElement("h1",{id:"heading"},"hi teju");
// // when its rendered to DOM then it becomes HTML element
// const jsxHeading=<h1 id="heading">JSX heading</h1>
// //JSX syntax
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)
// what is JSX ? it is a JS syntax which helps to easily create react element
