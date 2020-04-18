import React from "react";

const EmployeeContext = React.createContext({
  filter: "",
  lastNameSort: true,
  firstNameSort: false,
  cubeNumberSort: false,
  lastNameFilter: true,
  firstNameFilter: false,
  changeSort: ()=>{},
  changeFilter: ()=>{},
  changeRadio: ()=>{}
});

export default EmployeeContext;