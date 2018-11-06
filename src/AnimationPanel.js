import React, {Component, PureComponent} from 'react';


import Plot from 'react-plotly.js';

import * as constants from './logic/constants.js';

import {calculateAcousticAnimation} from './logic/calculate.js';


export default class AnimationPanel extends PureComponent {

    state = {

        isRunning: !false,
        currentTime: 0.0,
        //mode: 'optical',
        axis: 'x'
    };

    componentDidUpdate() {
        //console.log('anim componentDidUpdate()');



    }

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            if (!this.state.isRunning)
                return;
            this.setState({
                currentTime: (this.state.currentTime + constants.deltaT)
            });
        }, Math.floor(constants.deltaT * 500));

        console.log('mount anim');
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }


    getScatterData() {
        // return range(1).map((index) => {
        //     return {
        //         x: [Math.sin(this.state.currentTime * Math.PI)],
        //         y: [Math.cos(this.state.currentTime * Math.PI)],
        //         marker: {
        //             size: 14,
        //             color: ['red', 'blue']
        //         },
        //         //ids: this.state.ids,
        //         mode: 'markers'
        //     };
        //
        //
        // });

        return [calculateAcousticAnimation(this.state.currentTime, this.state.axis, this.props.animationParams)];
    }


    render() {

        //console.log(this.props.animationParams);

        return (

            <Plot style={{width: '100%'}}

                  data={this.getScatterData()}
                  layout={{
                      autosize: true, title: 'Animation',
                      xaxis: {range: [-20, 280]},
                      yaxis: {range: [0, 480]}
                  }}
            />

        )
    }

}