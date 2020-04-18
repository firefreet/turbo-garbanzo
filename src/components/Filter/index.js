import React, { useContext } from 'react';
import EmployeeContext from '../../utils/EmployeeContext';



function Filter() {
    const { filter, changeFilter, lastNameFilter, firstNameFilter, changeRadio } = useContext(EmployeeContext);
    const employeeState = useContext(EmployeeContext);


    return (
        <div className="form-group row ">
            <div className="col-4 col-lg-2 mt-1">
                <label htmlFor="searchField d-inline">
                    <p className="d-inline">Filter</p>
                    <small>
                        <i className="fas fa-arrow-right d-inline"></i>
                    </small>
                </label>
            </div>
            <div className=" float-right col-8 col-lg-3 mt-1">
                <input className="form-control" id="searchField" placeholder="by name"
                    onChange={(event) => { changeFilter(event,employeeState) }}
                    value={filter}>
                </input>
            </div>
            <div className="col-3 col-lg-2 mt-1">
                <div htmlFor="customRadionInline1">
                    <p className="d-inline">Filter by</p>
                    <small>
                        <i className="fas fa-arrow-right d-inline"></i>
                    </small>
                </div>
            </div>
            <div className="custom-control custom-radio custom-control-inline col col-lg-2 mt-1">
                <input type="radio"
                    id="lastNameFilter"
                    name="lastNameFilter"
                    className="custom-control-input"
                    checked={lastNameFilter}
                    onChange={(e)=>{changeRadio(e,employeeState)}}>
                </input>
                <label className="custom-control-label" htmlFor="lastNameFilter">L Name</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline col col-lg-2 mt-1">
                <input
                    type="radio"
                    id="firstNameFilter"
                    name="firstNameFilter"
                    className="custom-control-input"
                    checked={firstNameFilter}
                    onChange={(e)=>{changeRadio(e,employeeState)}}>
                </input>
                <label className="custom-control-label" htmlFor="firstNameFilter">F Name</label>
            </div>
        </div>
    )
}
export default Filter;