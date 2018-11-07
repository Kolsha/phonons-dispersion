import React, {Component, PureComponent} from 'react';


import Plot from 'react-plotly.js';

import * as constants from './logic/constants.js';

import {calculateAcousticAnimation} from './logic/calculate.js';


export default class AnimationPanel extends PureComponent {

    state = {

        isRunning: !false,
        currentTime: 0.0,
        //mode: 'optical',
        axis: 'x',
    };

    plot = {
        layout: {
            autosize: true, title: 'Animation',
            xaxis: {range: [-20, 280]},
            yaxis: {range: [0, 480]}
        },
        config: {}
    };

    componentDidUpdate() {
        //console.log('anim componentDidUpdate()');


    }

    componentDidMount() {
        // this.setStateInterval = window.setInterval(() => {
        //     if (!this.state.isRunning)
        //         return;
        //     this.setState({
        //         currentTime: (this.state.currentTime + constants.deltaT)
        //     });
        // }, Math.floor(constants.deltaT * 500));
        //
        // console.log('mount anim');
        this.startLoop();
    }

    componentWillUnmount() {
        // window.clearInterval(this.setStateInterval);
        this.stopLoop();
    }

    startLoop() {
        if (!this._frameId) {
            this._frameId = window.requestAnimationFrame(this.loop.bind(this));
        }
    }

    loop() {
        this._frameId = window.requestAnimationFrame(this.loop.bind(this));


        if (!this.state.isRunning)
            return;
        this.setState({
            currentTime: (this.state.currentTime + constants.deltaT)
        });


    }

    stopLoop() {
        window.cancelAnimationFrame(this._frameId);
        // Note: no need to worry if the loop has already been cancelled
        // cancelAnimationFrame() won't throw an error
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

        )
    }

}