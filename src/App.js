import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { Grocery } from "./components/Grocery";

const AppLayout = () => {
  return (
    <div className="container">
      <Header className="fixed top-0 left-0" />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>loading....!</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading....!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading....!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
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
