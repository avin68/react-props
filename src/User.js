import "./User.css"
import React from "react";

// function User(props){
//     let {name, age, height} = props
    
//     return(
//         <div className="container">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Height: {height}</p>
//         </div>
//     )
// }

// function User({name='avin', age=32, height=100}){
   
//     return(
//         <div className="container">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Height: {height}</p>
//         </div>
//     )
// }


// function User(props){
//     console.log(props.children)
//     return(
//         <div className="container">
//             <p>name: {props.name}</p>
//         </div>
//     );
// }


// function User({name, children}){

//     return(
//         <div className="container">
//             <p>name: {name} </p>
//             {children}
//         </div>
//     );
// }


// class User extends React.Component {
//     render(){
//         return(
//             <div className="container">
//                 <p>
//                     name: {this.props.name}
//                 </p>
//                 <p>
//                     age: {this.props.age}
//                 </p>
//                 <p>
//                     age: {this.props.height}
//                 </p>
//             </div>
//         );
//     }
// }
// User.defaultProps = {
//     name: 'اوین',
//     age: 25,
//     height : 100
// }



// function User(props){
   
//     return(
//         <div className="container">
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Height: {props.height}</p>
//         </div>
//     )
// }

// User.defaultProps = {
//     name: 'اوین',
//     age: 25,
//     height : 100
// }

// function User(props){
//    let {name , age , height} = props
//     return(
//         <div className="container">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Height: {height}</p>
//         </div>
//     )
// }

// User.defaultProps = {
//     name: 'سالی',
//     age: 45,
//     height : 200
// }

function User(props){
   let {name="عسل" , age=33 , height=45} = props
    return(
        <div className="container">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default User