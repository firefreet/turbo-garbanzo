import React, {useContext} from 'react';
import EmployeeContext from '../../utils/EmployeeContext';

function Sort() {
    const { changeSort, lastNameSort, firstNameSort, cubeNumberSort } = useContext(EmployeeContext);
    const employeeState = useContext(EmployeeContext);

    return (
        <div className="row d-flex justify-content-center">
            <ul className="nav justify-content-center bg-secondary w-100 mx-3 py-1">
                <li className="nav-item">
                    <p className="nav-link mb-0 mr-1">Sort by&nbsp;&nbsp;&nbsp;...</p>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={event=>{changeSort(event,employeeState)}} data-empprop="ln" data-field="lastNameSort" data-bool={lastNameSort.toString()}>L Name</button>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={event=>{changeSort(event,employeeState)}} data-empprop="fn" data-field="firstNameSort" data-bool={firstNameSort.toString()}>F Name</button>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={event=>{changeSort(event,employeeState)}} data-empprop="cn" data-field="cubeNumberSort" data-bool={cubeNumberSort.toString()}>Cube&nbsp;&nbsp;#</button>
                </li>
            </ul>
        </div>
    )
}

export default Sort;