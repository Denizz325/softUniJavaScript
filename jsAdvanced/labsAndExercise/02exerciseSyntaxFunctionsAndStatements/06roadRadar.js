function radar(speed, area) {
    const motorwaySpeedLimit = 130;
    const interstateSpeedLimit = 90;
    const citySpeedLimit = 50;
    const residentialSpeedLimit = 20;
    let status = '';

    switch(area) {
        case 'motorway': 
            if (speed > motorwaySpeedLimit) {
                let difference = speed - motorwaySpeedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                }
                else if ( difference <= 40) {
                    status = 'excessive speeding';
                }

                else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${status}`);
            }

            else {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`);
            }
            break;

        case 'interstate':             
        if (speed > interstateSpeedLimit) {
                let difference = speed - interstateSpeedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                }
                else if ( difference <= 40) {
                    status = 'excessive speeding';
                }

                else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeedLimit} - ${status}`);
            }

            else {
                console.log(`Driving ${speed} km/h in a ${interstateSpeedLimit} zone`);
            }
            break;

        case 'city':
            if (speed > citySpeedLimit) {
                let difference = speed - citySpeedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                }
                else if (difference <= 40) {
                    status = 'excessive speeding';
                }

                else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeedLimit} - ${status}`);
            }

            else {
                console.log(`Driving ${speed} km/h in a ${citySpeedLimit} zone`);
            }
            break;

        case 'residential': 
        if (speed > residentialSpeedLimit) {
            let difference = speed - residentialSpeedLimit;
            if (difference <= 20) {
                status = 'speeding';
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
            }

            else {
                status = 'reckless driving';
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeedLimit} - ${status}`);
        }

        else {
            console.log(`Driving ${speed} km/h in a ${residentialSpeedLimit} zone`);
        }
        break;
    }

}

// radar(40, 'city')
// radar(21, 'residential')
// radar(120, 'interstate')
radar(200, 'motorway')
