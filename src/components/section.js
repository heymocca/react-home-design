import React, { Component } from 'react'
import Header from './header'
import SectionList from './section_list'
import DesignList from './designs'

const REQ_URL = 'http://localhost:3004/home'

class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: ''
        }
    }

    componentDidMount() {
        fetch(`${REQ_URL}/${this.props.match.params.id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ section: json })
            })
    }


    render() {
        return (
            <div className="container">
                <Header />
                <div className="design__description-container mt-5">
                    <div className="row mb-5">
                        <div className="col-5">
                            <div className="design__image">
                                <span style={{ background: `url('/images/home/${this.state.section.image}.jpg') no-repeat` }}></span>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="design__description">
                                <h3>{this.state.section.name}</h3>
                                <div className="design__description-text">
                                    {this.state.section.description}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-center pt-5">View more designs</h4>
                    <DesignList designList={this.state.section.designs} />
                </div>
            </div>
        )
    }
}

export default Section;
