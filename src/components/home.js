import React, { Component } from 'react';


//components
import Banner from './banner';
import SectionList from './section_list';



const URL_SECTION = 'http://localhost:3004/home'

export default class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            sections: ''
        }
    }

    componentDidMount() {
        fetch(URL_SECTION, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({sections:json})
        })
    }


    render() {
        
        return(
            <div className="container my-5">
                <Banner />
                <SectionList allSections={this.state.sections}/>
            </div>
        )
    }
}