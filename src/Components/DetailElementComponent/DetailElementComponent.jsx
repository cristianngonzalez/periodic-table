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
                    {/* In the top on detail, it has a title, when the user doesn't click in an element it printes the text 'Periodic Table' */}
                    {this.props.current_element? this.props.current_element.atomic_name : 'Periodic Table'}
                </div>

                <div className="detailInfoContainer">
                    {
                        this.props.current_element
                        ? 
                            <>
                                <div className="detailInfoElement" style={{background: `${this.props.current_element.style_background}`}}>
                                    <div className="symbol">{this.props.current_element.symbol}</div>
                                    <div className="atomic_number">{this.props.current_element.atomic_number}</div>
                                    <div className="atomic_name">{this.props.current_element.atomic_name}</div>
                                    <div className="atomic_weight">{this.props.current_element.atomic_weight}</div>
                                </div>
                                <div className="detailInfoDescription">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Boiling Point:</td>
                                                <td> {this.props.current_element.boiling_point? `${this.props.current_element.boiling_point}°C` : '-' }</td>
                                            </tr>
                                            <tr>
                                                <td>Melting Point:</td>
                                                <td> {this.props.current_element.boiling_point? `${this.props.current_element.melting_point}°C` : '-' }</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
