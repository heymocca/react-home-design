import React from 'react'
import { Link } from 'react-router-dom'

//components
import Section from './section'

const SectionList = (props) => {

    const list = ({ allSections }) => {
        if (allSections) {
            return allSections.map((item) => {
                const style = {
                    background: `url('/images/home/${item.image}.jpg') no-repeat`
                }
                return (
                    <div className="col-12 col-md-6 mt-3" key={item.id}>
                        <Link to={`/section/${item.id}`}
                            className="section_design" style={style}>
                            <div className="section_name">{item.name}</div>
                        </Link>
                    </div>
                )
            })
        }

    }



    return (
        <div className="artist_list mt-5">
            <h4 className="text-center">Browse the home section</h4>
            <div className="row">
                {list(props)}
            </div>

        </div>
    )
}

export default SectionList;

