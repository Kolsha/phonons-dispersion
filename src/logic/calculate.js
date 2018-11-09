/* Phonons main calculation






 */


const qFactor = Math.pow(10.0, 8);


function getBranchPoint(isOptic, q, params) {

    const m1_m2 = (params.m1 * params.m2);


    const c2m1m2 = 2.0 * params.C / m1_m2;

    const meanMass = (params.m1 + params.m2) / 2.0;

    const secondPart = Math.sqrt(
        Math.pow(params.m1 - params.m2, 2.0) / 4.0 + m1_m2 * Math.pow(Math.cos(q * params.a), 2.0)
    );


    let result = meanMass;
    result += (isOptic) ? secondPart : -secondPart;

    result *= c2m1m2;


    return Math.sqrt(result);

}


export default function calculateBranches(params) {

    /*
            m1: 1.0,
            m2: 2.0,
            a: 1.0,
            C: 1.0
     */


    let result = {
        acoustic: {
            x: [],
            y: [],
            marker: {
                size: 8,
                color: 'blue'
            },
            name: 'Acoustic',

            mode: 'lines+markers'
        },

        optical: {
            x: [],
            y: [],
            marker: {
                size: 8,
                color: 'red'
            },
            name: 'Optical',


            mode: 'lines+markers'
        },

        selected: {
            x: [],
            y: [],
            marker: {
                size: 10,
                color: 'black'
            },

            name: 'Current',

            mode: 'markers'
        },

        brillouin_zone: {
            x: [],
            y: [],
            marker: {
                size: 3,
                color: 'black'
            },

            name: 'Brillouin zone',

            mode: 'markers',


        }
    };


    const qMax = Math.PI / params.a;
    const qStep = 0.001 / params.a;

    let wMax = 0;

    for (let q = 0.0; q <= qMax; q += qStep) {
        const acoustic = getBranchPoint(false, q, params);
        const optical = getBranchPoint(true, q, params);

        result.acoustic.x.push(q * qFactor);
        result.acoustic.y.push(acoustic);

        result.optical.x.push(q * qFactor);
        result.optical.y.push(optical);
        //
        // if(acoustic > wMax)
        //     wMax = acoustic;

        if (optical > wMax)
            wMax = optical;


    }

    for (let q = qMax / 2; q <= qMax; q += qMax / 2) {
        for (let y = 0; y < wMax; y += wMax / 20) {
            result.brillouin_zone.x.push(q * qFactor);
            result.brillouin_zone.y.push(y);
        }
    }


    const acoustic = getBranchPoint(false, params.currQ / qFactor, params);
    const optical = getBranchPoint(true, params.currQ / qFactor, params);

    result.selected.x.push(params.currQ);
    result.selected.y.push(acoustic);

    result.selected.x.push(params.currQ);
    result.selected.y.push(optical);


    return result;

}

//params is animationParams


export function calculateAcousticAnimation(currentTime, axis, params) {


    let result = [
        {

            x: [],
            y: [],
            marker: {
                size: 28,
                color: []
            },
            name: 'Acoustic',

            mode: 'lines+markers'


        },
        {

            x: [],
            y: [],
            marker: {
                size: 28,
                color: []
            },
            name: 'Optical',

            mode: 'lines+markers'


        }
    ];

    const offset_x = 50;

    const offset_y = 100;

    const amplitude = 3 * Math.sqrt(offset_x);

    //params.currQ = Math.PI / params.a / 2.0 * qFactor;

    const currWAcoustic = getBranchPoint(false, params.currQ / qFactor, params);

    const currWOptic = getBranchPoint(true, params.currQ / qFactor, params);


    // console.log('Curq', params.currQ);
    //
    // console.log('Curw:', currW);
    //
    // console.log((params.currQ - Math.PI / (2.0 * params.a) * qFactor));

    let u1 = 1.0, u2 = 1.0;
    if (params.m1 > params.m2) {
        u1 = (-params.m2 / params.m1);
    }
    else if (params.m1 < params.m2) {
        u2 = (-params.m1 / params.m2);
    }


    for (let i = 1; i <= params.ball_count; i++) {
        let xW = 0, yW = 0,
            xA = 0, yA = 0,
            colorW = 'black', colorA = 'blue';


        if (i % 2 === 1) {

            colorW = 'black';
            colorA = 'blue';

            xA = (u1 * amplitude * Math.cos(2.0 * params.currQ * params.a * i - currWAcoustic * currentTime / params.acousticWMax) + offset_x * (i - 1));

            if (Math.abs(params.currQ - Math.PI / (2.0 * params.a) * qFactor) < 0.2) {
                xW = offset_x * (i - 1);
            } else {
                xW = (u1 * amplitude * Math.cos(2.0 * params.currQ * params.a * i - currWOptic * currentTime / params.opticalWMax) + offset_x * (i - 1));
            }


        } else {
            colorW = 'yellow';
            colorA = 'red';

            xW = (u2 * amplitude * Math.cos(2.0 * params.currQ * params.a * i - currWOptic * currentTime / params.opticalWMax) + offset_x * (i - 1));


            if (Math.abs(params.currQ - Math.PI / (2.0 * params.a) * qFactor) < 0.2) {
                xA = offset_x * (i - 1);
            } else {
                xA = (u2 * amplitude * Math.cos(2.0 * params.currQ * params.a * i - currWAcoustic * currentTime / params.acousticWMax) + offset_x * (i - 1));
            }


        }

        yW = offset_y;

        yA = 3 * offset_y;

        // [xW,yW] = [yW,xW];
        //
        // [xA,yA] = [yA,xA];


        result[1].marker.color.push(colorW);
        result[1].x.push(xW);
        result[1].y.push(yW);

        result[0].marker.color.push(colorA);
        result[0].x.push(xA);
        result[0].y.push(yA);


        // if (i % 2 === 1) {
        //     result.marker.color.push('black');
        //
        //     if (Math.abs(params.currQ - Math.PI / (2.0 * params.a)) >= 0.01) {
        //         let x = 0, y = 0;
        //         if (axis === 'x') {
        //
        //             x = (13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + getWidth() / 10 * (i - 1));
        //             y = offset;
        //
        //
        //         } else {
        //             x = 15 + getWidth() / 10 * (i - 1);
        //             y = 13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + offset;
        //
        //         }
        //
        //         result.x.push(x);
        //         result.y.push(y);
        //
        //     }
        //     else if (params.m1 !== params.m2) {
        //         if (axis === 'x') {
        //
        //
        //             result.x.push(getWidth() / 10 * (i - 1));
        //             result.y.push(offset);
        //
        //         } else {
        //
        //
        //             result.x.push(20 + getWidth() / 10 * (i - 1));
        //             result.y.push(offset);
        //         }
        //
        //     }
        //     else if (axis === 'x') {
        //
        //
        //         result.x.push((13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + getWidth() / 10 * (i - 1)));
        //         result.y.push(offset);
        //
        //
        //     } else {
        //
        //         result.x.push(15 + getWidth() / 10 * (i - 1));
        //         result.y.push((13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + offset));
        //     }
        //
        // }
        // else {
        //
        //     result.marker.color.push('yellow');
        //
        //     let x = 0, y = 0;
        //
        //     if (axis === 'x') {
        //         x = (13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + getWidth() / 10 * (i - 1));
        //         y = offset;
        //         // g.fillOval((int), 40, 20, 20);
        //     } else {
        //         x = 15 + getWidth() / 10 * (i - 1);
        //         y = (13.0 * Math.cos(2.0 * params.currQ * params.a * i - currW / params.acousticWMax * currentTime) + offset);
        //
        //     }
        //
        //     result.x.push(x);
        //     result.y.push(y);
        // }
    }


    return result;


}

// const res = calculateBranches({
//     m1: 1.0,
//     m2: 2.0,
//     a: 1.0,
//     C: 1.0
// });
//
// console.log(res);