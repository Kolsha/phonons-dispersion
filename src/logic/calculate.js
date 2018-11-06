/* Phonons main calculation






 */

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


    const qFactor = Math.pow(10.0, 8);

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
                color: ['black']
            },

            name: 'Current',

            mode: 'markers'
        },
    };


    const qMax = Math.PI / params.a;
    const qStep = 0.01 / params.a;

    for (let q = 0.0; q <= qMax; q += qStep) {
        const acoustic = getBranchPoint(false, q, params);
        const optical = getBranchPoint(true, q, params);

        result.acoustic.x.push(q * qFactor);
        result.acoustic.y.push(acoustic);

        result.optical.x.push(q * qFactor);
        result.optical.y.push(optical);


    }


    const acoustic = getBranchPoint(false, params.currQ / qFactor, params);
    const optical = getBranchPoint(true, params.currQ / qFactor, params);

    result.selected.x.push(params.currQ);
    result.selected.y.push(acoustic);

    result.selected.x.push(params.currQ);
    result.selected.y.push(optical);


    return result;


}
//
// const res = calculateBranches({
//     m1: 1.0,
//     m2: 2.0,
//     a: 1.0,
//     C: 1.0
// });
//
// console.log(res);