import React from "react";
import { Filter } from 'react-bootstrap-icons';
import './FilterComponent.css';

import { connect } from 'react-redux';
import { titlefilter , typefilter , statefilter , groupfilter , periodfilter } from '../../actions/index';

class FilterComponent extends React.Component{

    constructor(props){
        super(props);
    }

    titlefilter(title){
        this.props.titlefilter(title);
    }
    typefilter(type){
        this.props.typefilter(type);
    }
    statefilter(state){
        this.props.statefilter(state);
    }
    groupfilter(group){
        this.props.groupfilter(group);
    }
    periodfilter(period){
        this.props.periodfilter(period);
    }
    temperatureFilter(event){
        console.log(event.target.value);
    }

    //This form changes the propertie titlefilter of the store
    render(){
        return(
            <>

                <div className="card filter-card border-primary mb-3 mt-3">
                    <div className="card-header"><Filter></Filter> Filters</div>
                    <div className="card-body">
                        <div>
                            <button onClick={() => this.titlefilter('all')} className={this.props.filter.title === 'all'? "btn btn-primary" : "btn btn-secondary"}>All</button>
                            <button onClick={() => this.titlefilter('metals')} className={this.props.filter.title === 'metals'? "btn btn-primary" : "btn btn-secondary"}>Metals</button>
                            <button onClick={() => this.titlefilter('no-metals')} className={this.props.filter.title === 'no-metals'? "btn btn-primary" : "btn btn-secondary"}>No metals</button>
                            <button onClick={() => this.titlefilter('states')} className={this.props.filter.title === 'states'? "btn btn-primary" : "btn btn-secondary"}>States</button>
                            <button onClick={() => this.titlefilter('groups')} className={this.props.filter.title === 'groups'? "btn btn-primary" : "btn btn-secondary"}>Groups</button>
                            <button onClick={() => this.titlefilter('periods')} className={this.props.filter.title === 'periods'? "btn btn-primary" : "btn btn-secondary"}>Periods</button>
                            {/* <button onClick={() => this.titlefilter('temperature')} className={this.props.filter.title === 'temperature'? "btn btn-primary" : "btn btn-secondary"}>Temperature</button> */}
                        </div>

                        <div>
                            {this.props.filter.title === 'metals'? 
                                <>
                                    <button onClick={() => this.typefilter(1)} className={this.props.filter.type === 1 ? "btn btn-primary" : "btn btn-secondary"}>Alkaline metals</button>
                                    <button onClick={() => this.typefilter(2)} className={this.props.filter.type === 2 ? "btn btn-primary" : "btn btn-secondary"}>Alkaline earth metals</button> 
                                    <button onClick={() => this.typefilter(3)} className={this.props.filter.type === 3 ? "btn btn-primary" : "btn btn-secondary"}>Transition metals</button> 
                                    <button onClick={() => this.typefilter(4)} className={this.props.filter.type === 4 ? "btn btn-primary" : "btn btn-secondary"}>Post-Transitional metals</button> 
                                    <button onClick={() => this.typefilter(5)} className={this.props.filter.type === 5 ? "btn btn-primary" : "btn btn-secondary"}>Metalloids</button>
                                    <button onClick={() => this.typefilter(6)} className={this.props.filter.type === 6 ? "btn btn-primary" : "btn btn-secondary"}>Lanthanides</button>
                                    <button onClick={() => this.typefilter(7)} className={this.props.filter.type === 7 ? "btn btn-primary" : "btn btn-secondary"}>Actinides</button>
                                </>
                                : 
                                <></>
                            } 

                            {this.props.filter.title === 'no-metals'? 
                                <>
                                    <button onClick={() => this.typefilter(8)} className={this.props.filter.type === 8 ? "btn btn-primary" : "btn btn-secondary"}>No metals</button>
                                    <button onClick={() => this.typefilter(9)} className={this.props.filter.type === 9 ? "btn btn-primary" : "btn btn-secondary"}>Halogens</button>
                                    <button onClick={() => this.typefilter(10)} className={this.props.filter.type === 10 ? "btn btn-primary" : "btn btn-secondary"}>Noble gases</button>
                                </>
                                : 
                                <></>
                            } 

                            {this.props.filter.title === 'states'? 
                                <>
                                    <button onClick={() => this.statefilter(1)} className={this.props.filter.state === 1 ? "btn btn-primary" : "btn btn-secondary"}>Gases</button>
                                    <button onClick={() => this.statefilter(2)} className={this.props.filter.state === 2 ? "btn btn-primary" : "btn btn-secondary"}>Liquids</button>
                                    <button onClick={() => this.statefilter(3)} className={this.props.filter.state === 3 ? "btn btn-primary" : "btn btn-secondary"}>Solid</button>
                                    <button onClick={() => this.statefilter(4)} className={this.props.filter.state === 4 ? "btn btn-primary" : "btn btn-secondary"}>Unknows</button>
                                </>
                                : 
                                <></>
                            } 

                            {this.props.filter.title === 'groups'? 
                                <>
                                    <button onClick={() => this.groupfilter(1)} className={this.props.filter.group === 1 ? "btn btn-primary" : "btn btn-secondary"}>1</button>
                                    <button onClick={() => this.groupfilter(2)} className={this.props.filter.group === 2 ? "btn btn-primary" : "btn btn-secondary"}>2</button>
                                    <button onClick={() => this.groupfilter(3)} className={this.props.filter.group === 3 ? "btn btn-primary" : "btn btn-secondary"}>3</button>
                                    <button onClick={() => this.groupfilter(4)} className={this.props.filter.group === 4 ? "btn btn-primary" : "btn btn-secondary"}>4</button>
                                    <button onClick={() => this.groupfilter(5)} className={this.props.filter.group === 5 ? "btn btn-primary" : "btn btn-secondary"}>5</button>
                                    <button onClick={() => this.groupfilter(6)} className={this.props.filter.group === 6 ? "btn btn-primary" : "btn btn-secondary"}>6</button>
                                    <button onClick={() => this.groupfilter(7)} className={this.props.filter.group === 7 ? "btn btn-primary" : "btn btn-secondary"}>7</button>
                                    <button onClick={() => this.groupfilter(8)} className={this.props.filter.group === 8 ? "btn btn-primary" : "btn btn-secondary"}>8</button>
                                    <button onClick={() => this.groupfilter(9)} className={this.props.filter.group === 9 ? "btn btn-primary" : "btn btn-secondary"}>9</button>
                                    <button onClick={() => this.groupfilter(10)} className={this.props.filter.group === 10 ? "btn btn-primary" : "btn btn-secondary"}>10</button>
                                    <button onClick={() => this.groupfilter(11)} className={this.props.filter.group === 11 ? "btn btn-primary" : "btn btn-secondary"}>11</button>
                                    <button onClick={() => this.groupfilter(12)} className={this.props.filter.group === 12 ? "btn btn-primary" : "btn btn-secondary"}>12</button>
                                    <button onClick={() => this.groupfilter(13)} className={this.props.filter.group === 13 ? "btn btn-primary" : "btn btn-secondary"}>13</button>
                                    <button onClick={() => this.groupfilter(14)} className={this.props.filter.group === 14 ? "btn btn-primary" : "btn btn-secondary"}>14</button>
                                    <button onClick={() => this.groupfilter(15)} className={this.props.filter.group === 15 ? "btn btn-primary" : "btn btn-secondary"}>15</button>
                                    <button onClick={() => this.groupfilter(16)} className={this.props.filter.group === 16 ? "btn btn-primary" : "btn btn-secondary"}>16</button>
                                    <button onClick={() => this.groupfilter(17)} className={this.props.filter.group === 17 ? "btn btn-primary" : "btn btn-secondary"}>17</button>
                                    <button onClick={() => this.groupfilter(18)} className={this.props.filter.group === 18 ? "btn btn-primary" : "btn btn-secondary"}>18</button>
                                </>
                                : 
                                <></>
                            } 

                            {this.props.filter.title === 'periods'? 
                                <>
                                    <button onClick={() => this.periodfilter(1)} className={this.props.filter.period === 1 ? "btn btn-primary" : "btn btn-secondary"}>1</button>
                                    <button onClick={() => this.periodfilter(2)} className={this.props.filter.period === 2 ? "btn btn-primary" : "btn btn-secondary"}>2</button>
                                    <button onClick={() => this.periodfilter(3)} className={this.props.filter.period === 3 ? "btn btn-primary" : "btn btn-secondary"}>3</button>
                                    <button onClick={() => this.periodfilter(4)} className={this.props.filter.period === 4 ? "btn btn-primary" : "btn btn-secondary"}>4</button>
                                    <button onClick={() => this.periodfilter(5)} className={this.props.filter.period === 5 ? "btn btn-primary" : "btn btn-secondary"}>5</button>
                                    <button onClick={() => this.periodfilter(6)} className={this.props.filter.period === 6 ? "btn btn-primary" : "btn btn-secondary"}>6</button>
                                    <button onClick={() => this.periodfilter(7)} className={this.props.filter.period === 7 ? "btn btn-primary" : "btn btn-secondary"}>7</button>
                                </>
                                : 
                                <></>
                            } 
                            {this.props.filter.title === 'temperature'? 
                                <>
                                    <label className="form-label">Temperature</label>
                                    <div className="row">
                                        <div className="col-auto col-temperature-first">
                                            <div className="row">
                                                <div className="col-auto">0</div>
                                                <div className="col-auto"><input onChange={this.temperatureFilter} type="range" min="0" max="6000" className="form-range" id="temperatureInputRange"/></div>
                                                <div className="col-auto">6000</div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <h3>60°</h3>
                                            <h6>Kelvin</h6>
                                        </div>
                                        <div className="col-auto">
                                            <h3>60°</h3>
                                            <h6>Celcius</h6>
                                        </div>
                                    </div>
                                </>
                                : 
                                <></>
                            } 
                        </div>
                        

                    </div>
                </div>


            </>
        )
    }

}


function mapStateToProps(state) {
    return {
        filter: state.filter,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        titlefilter: (title) => dispatch(titlefilter(title)),
        typefilter: (type) => dispatch(typefilter(type)),
        statefilter: (state) => dispatch(statefilter(state)),
        groupfilter: (group) => dispatch(groupfilter(group)),
        periodfilter: (period) => dispatch(periodfilter(period))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent);