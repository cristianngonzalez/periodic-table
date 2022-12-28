import React from "react";
import { FilterCircleFill } from 'react-bootstrap-icons';
import './FilterComponent.css';

import { connect } from 'react-redux';
import { titlefilter  } from '../../actions/index';

class FilterComponent extends React.Component{

    constructor(props){
        super(props);
    }

    titlefilter(title){
        this.props.titlefilter(title);
    }

    switchFilterInRender(title){
        switch (title) {
            case 'metals': return '<div>XXXMETALS<div>';
            break;
            case 'no-metals': return '<div>XXXNO-METALS<div>';
        }
    }

    //This form changes the propertie titlefilter of the store
    render(){
        return(
            <div className="filterContainer">
                <div>
                    <FilterCircleFill></FilterCircleFill>
                    Filters
                </div>
                <div>
                    <button onClick={() => this.titlefilter('all')}>All</button>
                    <button onClick={() => this.titlefilter('metals')}>Metals</button>
                    <button onClick={() => this.titlefilter('no-metals')}>No metals</button>
                    <button onClick={() => this.titlefilter('states')}>States</button>
                    <button onClick={() => this.titlefilter('groups')}>Groups</button>
                    <button onClick={() => this.titlefilter('periods')}>Periods</button>
                </div>

                <div>
                    {this.switchFilterInRender(this.props.filter.title)}
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        filter: state.filter
    };
}


function mapDispatchToProps(dispatch) {
    return {
        titlefilter: (title) => dispatch(titlefilter(title))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent);