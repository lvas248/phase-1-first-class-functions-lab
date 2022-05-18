// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){return drivers.slice(0,2)};

const returnLastTwoDrivers = function(drivers){return drivers.slice(drivers.length-2, drivers.length)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    const fareMultiplier = function(fair){
        return fair * integer;
    }
    return fareMultiplier;
}

const fareDoubler = function(fair){
    const double = createFareMultiplier(2);
    return double(fair);
}

const fareTripler = function(fare){
    const triple = createFareMultiplier(3);
    return triple(fare);
}
function selectDifferentDrivers(array,firstLast){
    if (firstLast === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array);
    }
    else if(firstLast === returnLastTwoDrivers){
        return returnLastTwoDrivers(array);
    }
}

