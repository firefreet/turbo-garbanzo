import React, {useContext} from 'react';
import './style.css';
import EmployeeContext from '../../utils/EmployeeContext';

function Nav() {
    const { changeFilter, changeSort, lastNameSort, firstNameSort, cubeNumberSort }  = useContext(EmployeeContext);

    return (
        <div>
            <ul className="nav justify-content-center bg-secondary">
                <li className="nav-item">
                    <p className="nav-link mb-0">Sort by...</p>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={changeSort} data-empprop="ln" data-field="lastNameSort" data-bool={lastNameSort.toString()}>Last Name</button>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={changeSort} data-empprop="fn" data-field="firstNameSort" data-bool={firstNameSort.toString()}>First Name</button>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <button className="nav-link rounded btn-sm py-0 mx-3" onClick={changeSort} data-empprop="cn" data-field="cubeNumberSort" data-bool={cubeNumberSort.toString()}>Cube Number</button>
                </li>
            </ul>
        </div>
    )
}
export default Nav;
