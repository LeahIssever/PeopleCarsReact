import React from "react";
import axios from "axios";
import PersonRow from "./PersonRow";
import { Link } from "react-router-dom";

class PeopleTable extends React.Component {
    
    render() {
        const { people } = this.props;
        return (
            <>
                <div className="row mt-5">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(p => <PersonRow key={p.id} person={p} />)}
                    </tbody>
                </table>
                </div>
            </>
        );
    }
}

export default PeopleTable;
