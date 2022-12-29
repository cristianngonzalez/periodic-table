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
                    {this.props.filter.title == 'metals'? 
                        <>
                            <button>Alkaline metals</button>
                            <button>Alkaline earth metals</button> 
                            <button>Transition metals</button> 
                            <button>Post-Transitional metals</button> 
                            <button>Metalloids</button>
                            <button>Lanthanides</button>
                            <button>Actinides</button>
                        </>
                        : 
                        <></>
                    } 

                    {this.props.filter.title == 'no-metals'? 
                        <>
                            <button>No metals</button>
                            <button>Halogens</button>
                            <button>Noble gases</button>
                        </>
                        : 
                        <></>
                    } 

                    {this.props.filter.title == 'states'? 
                        <>
                            <button>Gases</button>
                            <button>Liquids</button>
                            <button>Solid</button>
                            <button>Unknows</button>
                        </>
                        : 
                        <></>
                    } 

                    {this.props.filter.title == 'groups'? 
                        <>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                        </>
                        : 
                        <></>
                    } 

                    {this.props.filter.title == 'periods'? 
                        <>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>7</button>
                        </>
                        : 
                        <></>
                    } 
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