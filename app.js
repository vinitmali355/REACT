import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"hd"},"namaste react");

const Jsxh = ()=>(
    <h1 className="head">it is a JSX</h1>
);

const Calls=()=>(
    <div>
        <Jsxh />
        <p>i am component composition</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calls />);
