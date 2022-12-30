import React from "react";
import './FooterComponent.css';

class FooterComponent extends React.Component{

    render(){
        return(
            <footer>
                <div className="card footer-card border-primary mb-3">
                    <div className="card-body">
                        <p className="card-text">www.cristianngonzalez.com</p>
                    </div>
                </div>
            </footer>
        )
    }

}

export default FooterComponent;