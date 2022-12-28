import React from "react";
import './DetailElementComponent.css';
import { connect } from 'react-redux';

//import data from '../../data.json';

class DetailElementComponent extends React.Component{

    constructor(props){
        super(props);
        
    
    }

    render(){
        return(
            <div className="detailTable">
                <div className="detailTitleContainer">
                    {this.props.current_element? this.props.current_element.atomic_name : 'Periodic Table'}
                </div>

                <div className="detailInfoContainer">
                    {this.props.current_element? this.props.current_element.atomic_name : 'Dmitri Mendeleev publicó la primera tabla periódica de los elementos a mediados del siglo XIX. Ordenó los elementos según su número atómico, que es equivalente al número de protones incluidos en el núcleo de cada átomo de estos elementos.'}
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        current_element: state.current_element
    };
  }


function mapDispatchToProps(dispatch) {
    return {
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailElementComponent);
