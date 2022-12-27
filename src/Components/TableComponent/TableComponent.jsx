import React from "react";
import './TableComponent.css';

import ElementComponent from "../ElementComponent/ElementComponent";
import BlankElementComponent from "../BlankElementComponent/BlankElementComponent";
import DetailElementComponent from "../DetailElementComponent/DetailElementComponent";

class TableComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {elements: props.elements, types: props.types}
    }

    
    render(){
        return(
            <div>

                <div className="table">
                    <DetailElementComponent></DetailElementComponent>
                    
                    <ElementComponent element={this.state.elements[0]}></ElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <ElementComponent element={this.state.elements[1]}></ElementComponent>
                    <ElementComponent element={this.state.elements[2]}></ElementComponent>
                    <ElementComponent element={this.state.elements[3]}></ElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <ElementComponent element={this.state.elements[4]}></ElementComponent>
                    <ElementComponent element={this.state.elements[5]}></ElementComponent>
                    <ElementComponent element={this.state.elements[6]}></ElementComponent>
                    <ElementComponent element={this.state.elements[7]}></ElementComponent>
                    <ElementComponent element={this.state.elements[8]}></ElementComponent>
                    <ElementComponent element={this.state.elements[9]}></ElementComponent>
                    <ElementComponent element={this.state.elements[10]}></ElementComponent>
                    <ElementComponent element={this.state.elements[11]}></ElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <ElementComponent element={this.state.elements[12]}></ElementComponent>
                    <ElementComponent element={this.state.elements[13]}></ElementComponent>
                    <ElementComponent element={this.state.elements[14]}></ElementComponent>
                    <ElementComponent element={this.state.elements[15]}></ElementComponent>
                    <ElementComponent element={this.state.elements[16]}></ElementComponent>
                    <ElementComponent element={this.state.elements[17]}></ElementComponent>
                    <ElementComponent element={this.state.elements[18]}></ElementComponent>
                    <ElementComponent element={this.state.elements[19]}></ElementComponent>
                    <ElementComponent element={this.state.elements[20]}></ElementComponent>
                    <ElementComponent element={this.state.elements[21]}></ElementComponent>
                    <ElementComponent element={this.state.elements[22]}></ElementComponent>
                    <ElementComponent element={this.state.elements[23]}></ElementComponent>
                    <ElementComponent element={this.state.elements[24]}></ElementComponent>
                    <ElementComponent element={this.state.elements[25]}></ElementComponent>
                    <ElementComponent element={this.state.elements[26]}></ElementComponent>
                    <ElementComponent element={this.state.elements[27]}></ElementComponent>
                    <ElementComponent element={this.state.elements[28]}></ElementComponent>
                    <ElementComponent element={this.state.elements[29]}></ElementComponent>
                    <ElementComponent element={this.state.elements[30]}></ElementComponent>
                    <ElementComponent element={this.state.elements[31]}></ElementComponent>
                    <ElementComponent element={this.state.elements[32]}></ElementComponent>
                    <ElementComponent element={this.state.elements[33]}></ElementComponent>
                    <ElementComponent element={this.state.elements[34]}></ElementComponent>
                    <ElementComponent element={this.state.elements[35]}></ElementComponent>
                    <ElementComponent element={this.state.elements[36]}></ElementComponent>
                    <ElementComponent element={this.state.elements[37]}></ElementComponent>
                    <ElementComponent element={this.state.elements[38]}></ElementComponent>
                    <ElementComponent element={this.state.elements[39]}></ElementComponent>
                    <ElementComponent element={this.state.elements[40]}></ElementComponent>
                    <ElementComponent element={this.state.elements[41]}></ElementComponent>
                    <ElementComponent element={this.state.elements[42]}></ElementComponent>
                    <ElementComponent element={this.state.elements[43]}></ElementComponent>
                    <ElementComponent element={this.state.elements[44]}></ElementComponent>
                    <ElementComponent element={this.state.elements[45]}></ElementComponent>
                    <ElementComponent element={this.state.elements[46]}></ElementComponent>
                    <ElementComponent element={this.state.elements[47]}></ElementComponent>
                    <ElementComponent element={this.state.elements[48]}></ElementComponent>
                    <ElementComponent element={this.state.elements[49]}></ElementComponent>
                    <ElementComponent element={this.state.elements[50]}></ElementComponent>
                    <ElementComponent element={this.state.elements[51]}></ElementComponent>
                    <ElementComponent element={this.state.elements[52]}></ElementComponent>
                    <ElementComponent element={this.state.elements[53]}></ElementComponent>
                    <ElementComponent element={this.state.elements[54]}></ElementComponent>
                    <ElementComponent element={this.state.elements[55]}></ElementComponent>
                    <ElementComponent element={this.state.elements[56]}></ElementComponent>
                    <ElementComponent element={this.state.elements[57]}></ElementComponent>
                    <ElementComponent element={this.state.elements[58]}></ElementComponent>
                    <ElementComponent element={this.state.elements[59]}></ElementComponent>
                    <ElementComponent element={this.state.elements[60]}></ElementComponent>
                    <ElementComponent element={this.state.elements[61]}></ElementComponent>
                    <ElementComponent element={this.state.elements[62]}></ElementComponent>
                    <ElementComponent element={this.state.elements[63]}></ElementComponent>
                    <ElementComponent element={this.state.elements[64]}></ElementComponent>
                    <ElementComponent element={this.state.elements[65]}></ElementComponent>
                    <ElementComponent element={this.state.elements[66]}></ElementComponent>
                    <ElementComponent element={this.state.elements[67]}></ElementComponent>
                    <ElementComponent element={this.state.elements[68]}></ElementComponent>
                    <ElementComponent element={this.state.elements[69]}></ElementComponent>
                    <ElementComponent element={this.state.elements[70]}></ElementComponent>
                    <ElementComponent element={this.state.elements[71]}></ElementComponent>
                    <ElementComponent element={this.state.elements[72]}></ElementComponent>
                    <ElementComponent element={this.state.elements[73]}></ElementComponent>
                    <ElementComponent element={this.state.elements[74]}></ElementComponent>
                    <ElementComponent element={this.state.elements[75]}></ElementComponent>
                    <ElementComponent element={this.state.elements[76]}></ElementComponent>
                    <ElementComponent element={this.state.elements[77]}></ElementComponent>
                    <ElementComponent element={this.state.elements[78]}></ElementComponent>
                    <ElementComponent element={this.state.elements[79]}></ElementComponent>
                    <ElementComponent element={this.state.elements[80]}></ElementComponent>
                    <ElementComponent element={this.state.elements[81]}></ElementComponent>
                    <ElementComponent element={this.state.elements[82]}></ElementComponent>
                    <ElementComponent element={this.state.elements[83]}></ElementComponent>
                    <ElementComponent element={this.state.elements[84]}></ElementComponent>
                    <ElementComponent element={this.state.elements[85]}></ElementComponent>
                    <ElementComponent element={this.state.elements[86]}></ElementComponent>
                    <ElementComponent element={this.state.elements[87]}></ElementComponent>
                    <ElementComponent element={this.state.elements[88]}></ElementComponent>
                    <ElementComponent element={this.state.elements[89]}></ElementComponent>
                </div>

                <div className="table">
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <ElementComponent element={this.state.elements[90]}></ElementComponent>
                    <ElementComponent element={this.state.elements[91]}></ElementComponent>
                    <ElementComponent element={this.state.elements[92]}></ElementComponent>
                    <ElementComponent element={this.state.elements[93]}></ElementComponent>
                    <ElementComponent element={this.state.elements[94]}></ElementComponent>
                    <ElementComponent element={this.state.elements[95]}></ElementComponent>
                    <ElementComponent element={this.state.elements[96]}></ElementComponent>
                    <ElementComponent element={this.state.elements[97]}></ElementComponent>
                    <ElementComponent element={this.state.elements[98]}></ElementComponent>
                    <ElementComponent element={this.state.elements[99]}></ElementComponent>
                    <ElementComponent element={this.state.elements[100]}></ElementComponent>
                    <ElementComponent element={this.state.elements[101]}></ElementComponent>
                    <ElementComponent element={this.state.elements[102]}></ElementComponent>
                    <ElementComponent element={this.state.elements[103]}></ElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <ElementComponent element={this.state.elements[104]}></ElementComponent>
                    <ElementComponent element={this.state.elements[105]}></ElementComponent>
                    <ElementComponent element={this.state.elements[106]}></ElementComponent>
                    <ElementComponent element={this.state.elements[107]}></ElementComponent>
                    <ElementComponent element={this.state.elements[108]}></ElementComponent>
                    <ElementComponent element={this.state.elements[109]}></ElementComponent>
                    <ElementComponent element={this.state.elements[110]}></ElementComponent>
                    <ElementComponent element={this.state.elements[111]}></ElementComponent>
                    <ElementComponent element={this.state.elements[112]}></ElementComponent>
                    <ElementComponent element={this.state.elements[113]}></ElementComponent>
                    <ElementComponent element={this.state.elements[114]}></ElementComponent>
                    <ElementComponent element={this.state.elements[115]}></ElementComponent>
                    <ElementComponent element={this.state.elements[116]}></ElementComponent>
                    <ElementComponent element={this.state.elements[117]}></ElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                    <BlankElementComponent></BlankElementComponent>
                </div>

            </div>
        )
    }

}

export default TableComponent;