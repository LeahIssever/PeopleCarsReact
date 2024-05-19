import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withRouterParams from '../components/withRouterParams';
import CarRow from '../components/CarRow';

class DeleteCars extends React.Component {
    state = {
        cars: []
    }
    
    componentDidMount = async () => {
        const { personId } = this.props.params;
        const { data } = await axios.get(`/api/peoplecars/getcars?personid=${personId}`);
        console.log(data);
        this.setState({cars: data});
    }

    onDeleteClick = async () => {
        const { personId } = this.props.params;
        await axios.post('/api/peoplecars/deletecars', { personId });
        this.props.navigate('/');
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.cars.map(c => <CarRow car={c} key={c.id} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6" style={{ marginTop: 20 }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <button className='btn btn-primary btn-lg w-100'>No</button>
                        </Link>
                    </div>
                    <div className="col-md-6" style={{ marginTop: 20 }}>
                        <button onClick={this.onDeleteClick} className='btn btn-danger btn-lg w-100'>Yes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouterParams(DeleteCars);