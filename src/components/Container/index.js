import React, { useState } from "react";
import Nav from '../Nav';
import Table from '../Table'
import EmployeeContext from '../../utils/EmployeeContext'
import employeeArr from './employeeArr';


function Container() {
    const [employeeState, setEmployeeState] = useState({
        employeeArr: employeeArr,
        filter: "",
        lastNameSort: true,
        firstNameSort: false,
        cubeNumberSort: false,
        lastNameFilter: true,
        firstNameFilter: false,
        changeSort: (event,state) => {
            event.preventDefault();
            console.log(state);
            console.log(employeeState);
            let { field, bool, empprop } = event.target.dataset
            bool = bool === "true" ? false : true
            const employeeArr = employeeState.employeeArr.sort((a, b) => {
                if (bool) {
                    return a[empprop] < b[empprop] ? 1 : -1
                } else {
                    return a[empprop] > b[empprop] ? 1 : -1
                }
            })
            setEmployeeState({ ...state, employeeArr, [field]: bool });
        },
        changeFilter: (event,state) => {
            event.preventDefault();
            console.log(employeeState);
            let { value } = event.target;
            setEmployeeState({ ...state, filter: value });
        },
        changeRadio: (event,state) => {
            console.log(employeeState);
            let name = event.target.name
            let val = false
            if (name === "lastNameFilter") {
                setEmployeeState({ ...state, [name]: (!val), firstNameFilter: val})
            } else {
                setEmployeeState({...state, [name]: (!val), lastNameFilter: val})
            }

        }
    });

    return (
        <EmployeeContext.Provider value={employeeState}>
            <div className="container">
                <Nav />
                <Table />
            </div>
        </EmployeeContext.Provider>
    );
}

export default Container;