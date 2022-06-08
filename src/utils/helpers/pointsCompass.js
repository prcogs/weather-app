

const calcPointsCompass = (degres) => {

    if(degres >= 315 && degres < 45) { return "N"}
    else if (degres >= 45 && degres < 135) { return "E"}
    else if (degres >= 135 && degres < 225) { return "S"}
    else if (degres >= 225 && degres < 315) { return "W"}
}

export default calcPointsCompass