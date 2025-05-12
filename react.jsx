//react is library not a framework
//React is a JavaScript library for building user interfaces.
//It allows developers to create large web applications that can change data, without reloading the page.

// import { Component } from "react";

// import React from "react";

// class Hello extends React.Component {
//   render() {
//     return <h1>Hello, world!</h1>;
//   }
// }
// ReactDOM.render(
//     <Hello toWhat="world" />,
//     document.getElementById("root")
//     );


//some important points
//we can return only one html element at once ,but we can wrap them inside the parent html tag.
// class test extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <p>this is a test</p>
//       </div>
//     );
//   }
// }
//we can use jsx inside for loop,if else statements
// class Condition extends React.Component {
//     render() {
//         if (condition==true) {
//             return <h1>True</h1>;
//         }
//         else {
//             return <h1>False</h1>;
//         }
//     }
// }
//HTML attribute names like class become "className" in JSX


// function welcome(props) {
//     return <h1 className="greeting">Hello, {props.name}</h1>;
// }


//we can use javascript expressions inside curly braces

// function example() {
//     const name = "John";
//     const element = <h1>Hello, {name}</h1>;
//     return element;
// }
// const example = () => {
//     const name = "John";
//     const element = <h1>Hello, {name}</h1>;
//     return element;
// }

//class statefull component
// A component is being claled like html tags, but starting with capital letter.


//PROPS

// What is "Props" and how to use it in React?
//  * React has a different approach to data flow & manipulation than other frameworks.
// What is Props?
//  * React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.
//  * "Props" is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
//  * But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
//  * Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
//  * Props are immutable, meaning that they cannot be changed by the child component.

// class parentComponent extends Component {
//     render() {
//         return (
//             <h1>
//                 I am the first child<childComponent name="child1" />
//             </h1>
//         );
//     }
// // }

// <childcomponent someAttribute="value" another attribute="value" />


// const addition = (a, b) => {
//     return a + b;
// }

// const childComponent = (props) => {
//     return <p> {prop text}</p>
// }

// class ParentComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>I am the parent component</h1>
//                 <ChildComponent name="child1" />
//                 <ChildComponent name="child2" />
//             </div>
//         );
//     }
// }

~