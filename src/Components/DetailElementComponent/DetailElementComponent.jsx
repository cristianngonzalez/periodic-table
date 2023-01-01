import React from "react";
import './DetailElementComponent.css';
import { connect } from 'react-redux';


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
                    {
                        this.props.current_element
                        ? 
                            <>
                                <div className="detailInfoElement">
                                    <div className="symbol">{this.props.current_element.symbol}</div>
                                    <div className="atomic_number">{this.props.current_element.atomic_number}</div>
                                    <div className="atomic_name">{this.props.current_element.atomic_name}</div>
                                    <div className="atomic_weight">{this.props.current_element.atomic_weight}</div>
                                </div>
                                <div className="detailInfoDescription">
                                    {this.props.current_element.atomic_name }
                                </div>
                            </>
                        : 'Dmitri Mendeleev publicó la primera tabla periódica de los elementos a mediados del siglo XIX. Ordenó los elementos según su número atómico, que es equivalente al número de protones incluidos en el núcleo de cada átomo de estos elementos.'
                    }
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
