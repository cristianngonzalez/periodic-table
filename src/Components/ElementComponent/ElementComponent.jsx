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

    defineStyle(){
        let elementActive = {background: this.state.type.style_background};
        let elementInactive = {
            backgroundColor: 'transparent', 
            backgroundImage: 'linear-gradient(125deg,rgba(255,255,255,.3),rgba(255,255,255,.2) 70%)',
            color: 'rgba(255,255,255,0.1)'
        };
        
        switch(this.props.filter.title){
            case 'all':{ return elementActive};break;
            case 'metals':{ 
                //If is indicated type of metal just show the metals indicate
                if(this.props.filter.type){
                    if(this.props.filter.type === this.state.element.type_id){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }else{
                    //If isn't indicated type of metal show alls metals
                    if(this.state.type.metal){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }
             };break;
            case 'no-metals': {
                //If is indicated type of metal just show the metals indicate
                if(this.props.filter.type){
                    if(this.props.filter.type === this.state.element.type_id){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }else{
                    //If isn't indicated type of metal show alls metals
                    if(!this.state.type.metal){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }
            };break;
            case 'states': {
                //If is indicated type of metal just show the metals indicate
                if(this.props.filter.state){
                    if(this.props.filter.state === this.state.element.state_id){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }else{
                    return elementActive;
                }
            };break;
            case 'groups': {
                //If is indicated type of metal just show the metals indicate
                if(this.props.filter.group){
                    if(this.props.filter.group === this.state.element.group){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }else{
                    return elementActive;
                }
            };break;
            case 'periods': {
                //If is indicated type of metal just show the metals indicate
                if(this.props.filter.period){
                    if(this.props.filter.period === this.state.element.period){
                        return elementActive;
                    }else{
                        return elementInactive;
                    }
                }else{
                    return elementActive;
                }
            };break;
            default: {return{background: 'white'}}
        }
    }

    render(){
        return(
            <div onClick={() => this.select(this.state.element)} className="element" style={this.defineStyle()}>
                <span className="symbol">{this.state.element.symbol}</span>
                <div className="atomic-number">
                    <div>{this.state.element.atomic_number}</div>
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
        select: (element) => dispatch(select(element))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ElementComponent);