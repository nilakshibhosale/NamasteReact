// let heading = React.createElement("h1", {id: "heading"}, "hello world React")
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

let parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "hello world h1!"),
    React.createElement("h2", {}, "hello world h2!"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "hello world h1!"),
    React.createElement("h2", {}, "hello world h2!"),
  ]),
])
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
