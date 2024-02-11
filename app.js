// const heading = React.createElement("h1", {id:"header"}, "Hello world");//A core operation is involeved in creating a element

const content=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")])
])

console.log(content);
const root = ReactDOM.createRoot(document.getElementById("root"));//execution takes palce in this root
root.render(content)//the heading is inserted and the root is rendered


