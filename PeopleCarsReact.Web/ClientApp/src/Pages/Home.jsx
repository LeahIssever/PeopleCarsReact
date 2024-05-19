import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import PeopleTable from '../components/PeopleTable';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

class Home extends React.Component {
    
    state = {
        people: [], 
        searchText: ''
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/peoplecars/getpeople');
        this.setState({ people: data });
    }
    render () {
        const {people, searchText} = this.state;
        return (
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                <div className="justify-content-center align-items-center">
                    <SearchBar searchText={searchText.toLowerCase()} onClearClick={() => {this.setState({searchText: ''})}} 
                    onTextChange={(e) => {this.setState({searchText: e.target.value})}}/>
                    <div className="row mt-5">
                        <div className="col-md-12" style={{marginbottom: 20}}>
                            <a href="/addperson">
                                <button className="btn btn-success btn-lg w-100">Add Person</button>
                            </a>
                        </div>
                    </div>
                    <PeopleTable people={people.filter(p => `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchText))} />
                </div>
            </div>
        );
    }
};

export default Home;