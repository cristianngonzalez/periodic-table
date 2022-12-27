import React from "react";
import './FilterComponent.css';


class FilterComponent extends React.Component{


    render(){
        return(
            <div>
                <button>All</button>
                <button>Metals</button>
                <button>No metals</button>
            </div>
        )
    }

}

export default FilterComponent;