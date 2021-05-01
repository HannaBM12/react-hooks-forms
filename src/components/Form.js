import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form; 

  // const [firstName, setFirstName] = useState("Hanna");
  // const [lastName, setLastName] = useState("Mulugeta");

  // function handleFirstNameChange(e){
  //   setFirstName(e.target.value)
  // }


  // function handleLastNameChange(e){
  //   setLastName(e.target.value)
  // }

// console.log(props)
//   return (
//     <form>
//       <input 
//       type="text" 
//       value={props.firstName}
//       onChange={props.handleFirstNameChange} />
//       <input 
//       type="text" 
//       value={props.lastName}
//       onChange={props.handleLastNameChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
