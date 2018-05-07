import React from 'react'

const DesignList = (props) => {

    const showList = ({designList}) => {
         if(designList) {
             return designList.map((item, index) => {
                 return(
                     <div key={index} className="col-12 col-md-6 text-center pl-0 pr-0">
                        <div className="designList_list-item">
                        <img src={`/images/designs/${item.image}.jpg`}/>
                        </div>
                     </div>
                     
                 )
             })
         }
    }

    return(
        <div className="row design_list">
            {showList(props)}
        </div>
    )
}

export default DesignList;