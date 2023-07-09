const heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "grandchild1"),
    React.createElement("h1", {}, "grandchild2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "grandchild1"),
    React.createElement("h1", {}, "grandchild2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
