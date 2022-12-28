import React from "react";
import './ElementComponent.css';
import { connect } from 'react-redux';

import data from '../../data.json';

import { select  } from '../../actions/index';

class ElementComponent extends React.Component{

    constructor(props){
        super(props);

        //Search in types matching type_id with type
        for(let i = 0; i < data[0].types.length; i++){
            if(data[0].types[i].id == this.props.element.type_id){
                this.state = {element: this.props.element , type: data[0].types[i]};
            }
        }

    }

    select(element){
        //HookEvent (Send if to show in the info div)
        this.props.select(element);
    }

    render(){
        return(
            <div onClick={() => this.select(this.state.element)} className="element" style={{background: this.state.type.style_background}}>
                <span className="symbol">{this.state.element.symbol}</span>
                <div className="atomic-number">
                    <span>{this.state.element.atomic_number}</span>
                </div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return {

    };
  }


function mapDispatchToProps(dispatch) {
    return {
        select: (element) => dispatch(select(element))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ElementComponent);