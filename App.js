import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello from React"
);

/*
<div id = "parent">
    <div id="child">
    <h1>"teee"</h1>
</div>
    <div id="child2">
    <h1>"teee"</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "teeaaa"),
    React.createElement("h1", {}, "yesssss"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "tee"),
    React.createElement("h1", {}, "yee"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
