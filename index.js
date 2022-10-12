// Code your solution in this file!
const headquarters = 42;
const block = 264;

function distanceFromHqInBlocks(pickupLocation){
        return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation){
    return Math.abs(pickupLocation - headquarters)*block;
}

function distanceTravelledInFeet(pickupLocation, headquarters){
    return Math.abs((pickupLocation-headquarters)*block);
 }

function calculatesFarePrice(pickupLocation, headquarters){
    let distanceNew=distanceTravelledInFeet(pickupLocation,headquarters)
    if(distanceNew <= 400){
        return 0;
    }
    else if(distanceNew > 400 && distanceNew <= 2000){
        return (distanceNew-400)*0.02;
    }
    else if(distanceNew > 2000 && distanceNew < 2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}