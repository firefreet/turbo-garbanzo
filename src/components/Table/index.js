import React, { useContext, useEffect } from 'react';
import EmployeeContext from '../../utils/EmployeeContext';


function Table() {
    const { filter, employeeArr } = useContext(EmployeeContext);


    return (
        <table className="table table-striped bg-secondary mt-2 w-100">
            <thead className="thead-light">
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Phone Number</th>
                    <th>Cube Number</th>
                </tr>
            </thead>
            <tbody>
                {employeeArr.map((v, i) => {
                    return (
                        <tr key={i}>
                            <td>{v.ln}</td>
                            <td>{v.fn}</td>
                            <td>{v.pn}</td>
                            <td>{v.cn}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;