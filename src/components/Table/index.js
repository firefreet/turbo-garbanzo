import React from 'react';

function Table() {
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
            {/* <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr> */}
            
        </table>
    );
}

export default Table;