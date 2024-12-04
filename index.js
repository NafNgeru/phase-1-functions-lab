function distanceFromHqInBlocks(pickUpLocation){
    const hqBlock = 42
    const distanceInBlocks = pickUpLocation - hqBlock 
    return Math.abs(distanceInBlocks);
}
console.log(distanceFromHqInBlocks(40))


function distanceFromHqInFeet(value){
    distanceFromHqInBlocks(value);
    distanceInFeet = distanceFromHqInBlocks(value) * 264
    return distanceInFeet;
    
}
console.log(distanceFromHqInFeet(50))


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    travelledInFeet = (start - destination) * 264
    return Math.abs(travelledInFeet);
  }

console.log(distanceTravelledInFeet(34, 28))

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let x = Math.abs((destination - start) * 264);
    if(x <= 400){
        return 0;
    } else if(x > 400 && x <= 2000){
        let fare = (x - 400) * 0.02;
        return fare;
    } else if(x <= 2500){
        return 25;
    } else{
        return "cannot travel that far";
    }
  }

console.log(calculatesFarePrice(50, 60));