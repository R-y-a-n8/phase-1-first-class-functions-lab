// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

  const doubleFare = createFareMultiplier(2);
const fare = 10;
const doubledFare = doubleFare(fare); 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const originalFare = 10;
const tripledFare = fareTripler(originalFare); // tripledFare is 30

function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  }

  const drivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  
  console.log(firstTwoDrivers); // ['Driver1', 'Driver2']
  console.log(lastTwoDrivers);  // ['Driver3', 'Driver4']
   
