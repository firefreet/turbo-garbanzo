import React from "react";

const EmployeeContext = React.createContext({
  filter: "",
  lastNameSort: false,
  firstNameSort: false,
  cubeNumberSort: false,
  changeSort: ()=>{},
  changeFilter: ()=>{}
});

export default EmployeeContext;