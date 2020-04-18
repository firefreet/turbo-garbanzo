import React, {useEffect, useContext } from 'react';
import EmployeeContext from '../../utils/EmployeeContext';


function Table() {
    const { filter, lastNameFilter, employeeArr } = useContext(EmployeeContext);

    var employeeFilter
    if (lastNameFilter) {
        employeeFilter = employeeArr.filter(v => {
            if (v.ln.toLowerCase().indexOf(filter.toLowerCase()) >= 0) return true
        })
    } else {
        employeeFilter = employeeArr.filter(v => {
            if (v.fn.toLowerCase().indexOf(filter.toLowerCase()) >= 0) return true
        })
    }

    return (
        <div className="mw-100">
            <table className="table table-striped bg-secondary mt-2">
                <thead className="thead-light">
                    <tr>
                        <th className="px-1">L Name</th>
                        <th className="px-1">F Name</th>
                        <th className="px-1">Phone</th>
                        <th className="px-1">Cube</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeFilter.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td className="px-1">{v.ln}</td>
                                <td className="px-1">{v.fn}</td>
                                <td className="px-1">{v.pn}</td>
                                <td className="px-1">{v.cn}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;