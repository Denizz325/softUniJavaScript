function timeToWalk(steps, footprintLength, speed) {
    const distance = steps * footprintLength;
    const speedInSecondPerMin = speed * (1000 / 3600);
    const walkingTimeSeconds = distance / speedInSecondPerMin;
    const restTimeSeconds = Math.floor(distance / 500) * 60;
    const totalTimeSeconds = walkingTimeSeconds + restTimeSeconds;

    const hours = Math.floor(totalTimeSeconds / 3600);
    const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    const seconds = Math.ceil(totalTimeSeconds % 60);
    
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

}

timeToWalk(2564,0.70,5.5)