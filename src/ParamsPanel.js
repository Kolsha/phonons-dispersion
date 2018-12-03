import React, {PureComponent} from 'react';


import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';


import * as constants from './logic/constants.js';

class ParamsPanel extends PureComponent {


    state = {

        m1: 1.0,
        m2: 2.0,
        a: 1.0,
        C: 1.0,
        ball_count: 6
    };
    handleInputChange = event => {
        //this.props.textChange(event);
        //console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : (parseFloat(target.value) || 0);
        const name = target.name;

        target.value = value;


        this.setState({
            [name]: value
        });

    };

    handleInputKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleSetupClick();
        }
    };

    handleSetupClick = () => {

        let newParams = Object.assign({}, this.state);
        newParams.m1 *= constants.protonMass;
        newParams.m2 *= constants.protonMass;
        newParams.C *= constants.scaleFactorC;

        this.props.newParamsHandler(newParams);
        //alert(this.params);
        //console.log(this.state);
    };


    componentDidUpdate() {
        console.log('ParamsPanel componentDidUpdate()');

    }


    render() {
        return (
            <div>

                <h1>Params:</h1>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">m1</InputGroupAddon>
                    <Input name={"m1"} value={this.state.m1}
                           placeholder="Mass of 1st"
                           type="number"
                           min="0.0" max="100.0" step="0.1"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleInputKeyPress}
                    />
                    <InputGroupAddon addonType="append"> * Mp</InputGroupAddon>
                </InputGroup>

                <br/>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">m2</InputGroupAddon>
                    <Input name={"m2"} value={this.state.m2}
                           placeholder="Mass of 2d"
                           type="number"
                           min="0.0" max="100.0" step="0.1"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleInputKeyPress}
                    />
                    <InputGroupAddon addonType="append"> * Mp</InputGroupAddon>
                </InputGroup>

                <br/>
                <br/>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">a</InputGroupAddon>
                    <Input name={"a"} value={this.state.a}
                           placeholder=""
                           type="number"
                           min="0.0" max="100.0" step="0.1"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleInputKeyPress}
                    />
                    <InputGroupAddon addonType="append">cm^(-8)</InputGroupAddon>
                </InputGroup>

                <br/>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">C</InputGroupAddon>
                    <Input name={"C"} value={this.state.C}
                           placeholder=""
                           type="number"
                           min="0.0" max="100.0" step="0.1"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleInputKeyPress}
                    />
                    <InputGroupAddon addonType="append">10^3 erg / cm^2</InputGroupAddon>
                </InputGroup>


                <br/>


                <InputGroup>
                    <InputGroupAddon addonType="prepend">Ball</InputGroupAddon>
                    <Input name={"ball_count"} value={this.state.ball_count}
                           placeholder=""
                           type="number"
                           min="2" max="100" step="1"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleInputKeyPress}
                    />
                    <InputGroupAddon addonType="append">Count</InputGroupAddon>
                </InputGroup>


                <br/>

                <InputGroup>

                    <Button color="success" onClick={this.handleSetupClick}>Setup</Button>
                </InputGroup>


            </div>);
    }

}


export default ParamsPanel;