import React from 'react';
import { RotateSpinner } from "react-spinners-kit";

import './styles.css';

class Loader extends React.Component {
    state = {}

    render(){
        const { isLoader } = this.props;
        if(isLoader){
            return(
                <div className="loader-inner-div">
                    <RotateSpinner color="#19b24b" className="loader-spinner"/>
                </div>
            )
        }
        return<></>
    }
}

export default Loader;