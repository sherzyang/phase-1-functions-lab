// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let distance = someValue -= 42;
    return Math.abs(distance);
  }

  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return blocks *= 264;
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let blocks = Math.abs(start - destination);
    return blocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    if (feet > 400 === feet < 2000) {
        return .02 * (feet - 400);
    }
    else if (feet >= 2000 === feet < 2500) {
        return 25;
    }
    else if (feet >= 2500) {
        return "cannot travel that far";
    }
  }