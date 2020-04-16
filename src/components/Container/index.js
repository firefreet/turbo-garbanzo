import React, { useState, useEffect } from "react";
import Nav from '../Nav';
import Table from '../Table'
import EmployeeContext from '../../utils/EmployeeContext'
import employeeArr from './employeeArr';


function Container() {
    const [employeeState, setEmployeeState] = useState({
        employeeArr: employeeArr,
        filter: "",
        lastNameSort: true,
        firstNameSort: true,
        cubeNumberSort: true,
        changeSort: (event) => {
            event.preventDefault();
            let { field, bool, empprop } = event.target.dataset
            bool = bool === "true" ? false : true
            const employeeArr = employeeState.employeeArr.sort((a, b) => {
                if (bool) {
                    return a[empprop] < b[empprop] ? 1 : -1
                } else {
                    return a[empprop] > b[empprop] ? 1 : -1
                }
            })
            setEmployeeState({ ...employeeState, employeeArr, [field]: bool })
        },
        changeFilter: (search) => {
            setEmployeeState({ ...employeeState, filter: search })
        }
    });

    useEffect(() => {

    }, [employeeState.filter, employeeState.lastNameSort, employeeState.firstNameSort, employeeState.cubeNumberSort])

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