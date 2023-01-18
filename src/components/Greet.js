import React from "react";

// function Greet(){
//     return <h1>Hello DEV2 </h1>
// }

const Greet = ({name, hero, children}) =>{
    // console.log(props);
    return (
        <div>
            {/* <h1>Hello {props.name},vous avez {props.age}</h1>
            <p>{props.children}</p> */}
            <h1>Hello {name} a.k.a {hero}</h1>
            {children}
        </div>
    )
}
export default Greet;