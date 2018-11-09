import React, {Component} from 'react';


import Plot from 'react-plotly.js';

import {Container, Row, Col} from 'reactstrap';

import calculateBranches from './logic/calculate.js';

import * as constants from './logic/constants.js';

import {
    Navbar,
    NavbarBrand,
    Jumbotron,
    NavLink
} from 'reactstrap';

import ParamsPanel from './ParamsPanel.js';
import AnimationPanel from './AnimationPanel.js';


class App extends Component {

    state = {
        //currentTime: 0.0

        params: {
            m1: 1.0 * constants.protonMass,
            m2: 2.0 * constants.protonMass,
            a: 1.0,
            C: 1.0 * constants.scaleFactorC,
            currQ: 157079632.67948964,
            ball_count: 6
        }
    };


    plot = {
        layout: {
            title: 'Dispersion of phonons',
            hovermode: 'closest'
        },
        config: {}
    };


    branches = null;


    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            // this.setState({
            //     currentTime: (this.state.currentTime + deltaT)
            // });
        }, Math.floor(constants.deltaT * 900));

        // if(this.branches == null){
        //     this.branches = calculateBranches(this.state.params);
        // }
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }

    getScatterData() {
        return [this.branches.acoustic, this.branches.optical, this.branches.selected, this.branches.brillouin_zone];
    }

    handleNewParams = newParams => {
        console.log(newParams);

        newParams.currQ = this.state.params.currQ;

        this.setState({
            params: newParams
        });
    };

    handleBranchClick = data => {
        //console.log(event);
        console.log('click', data);

        if (!data.points.length)
            return;

        let newParams = Object.assign({}, this.state.params);

        newParams.currQ = data.points[0].x;


        this.setState({
            params: newParams
        });
    };

    render() {

        // console.log('render');
        // console.log(this.state.scatterData);


        this.branches = calculateBranches(this.state.params);

        let animationParams = Object.assign({}, this.state.params);

        animationParams.opticalWMax = Math.max.apply(null, this.branches.optical.y);
        animationParams.acousticWMax = Math.max.apply(null, this.branches.acoustic.y);

        return (

            <div>
                <Navbar color="dark" dark>
                    <NavbarBrand href={"#"}>Phonons</NavbarBrand>


                    <NavLink href="#">Github</NavLink>
                </Navbar>


                <Jumbotron fluid={true}>
                    <Container fluid={true} className={"h-25"}>

                        <Row>
                            <Col xs="8">
                                <Plot style={{width: '100%'}}
                                      data={this.getScatterData()}
                                      onClick={this.handleBranchClick}

                                      layout={this.plot.layout}

                                      config={this.plot.config}

                                      onInitialized={(figure) => {
                                          this.plot.layout = figure.layout;
                                          this.plot.config = figure.config
                                      }}
                                      onUpdate={(figure) => {
                                          this.plot.layout = figure.layout;
                                          this.plot.config = figure.config
                                      }}
                                />
                            </Col>

                            <Col xs={{size: 4, offset: 0}}>

                                <ParamsPanel newParamsHandler={this.handleNewParams}/>

                            </Col>
                        </Row>


                        <br/>
                        <Row>
                            <Col xs="12">
                                <AnimationPanel animationParams={animationParams}/>
                            </Col>

                        </Row>


                    </Container>
                </Jumbotron>


                <footer className="footer font-small blue">


                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://kolsha.ru"> Kolsha</a>
                    </div>


                </footer>
            </div>


        );
    }

}

export default App;
