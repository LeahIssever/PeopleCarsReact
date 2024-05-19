import React from "react";
import { produce } from "immer";
import axios from "axios";
import withRouterParams from "../components/withRouterParams";

class AddCar extends React.Component {
    state = {
        make: "",
        model: "",
        year: "", 
        person: {
            firstName: "",
            lastName: ""
        }
    }

    componentDidMount = async () => {
        const { personId } = this.props.params;
        const {data} = await axios.get(`/api/peoplecars/getperson?id=${personId}`);
        this.setState({person: data});
    }

    onTextChange = (e) => {
        const nextState = produce(this.state, draftState => {
            draftState[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmitClick = async () => {
        const { personId } = this.props.params;
        const {make, model, year} = this.state;
        await axios.post('/api/peoplecars/addcar', { make, model, year, personId});
        this.props.navigate('/');
    }

    render() {
        const {make, model, year} = this.state;
        const {firstName, lastName} = this.state.person;

        return (
            <div style={{ minHeight: 1000, paddingTop: 200 }}>
                <div className="row">
                    <div className='col-md-6 offset-md-3 card bg-light p-4'>
                        <h2>Add a car for {firstName} {lastName}</h2>
                        <input type="text" className='form-control' name='make' value={make} onChange={this.onTextChange} placeholder="Make" />
                        <br />
                        <input type="text" className='form-control' name='model' value={model} onChange={this.onTextChange} placeholder="Model" />
                        <br />
                        <input type="text" className='form-control' name='year' value={year} onChange={this.onTextChange} placeholder="Year" />
                        <br />
                        <button className='btn btn-primary btn-lg btn-block' onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouterParams(AddCar);