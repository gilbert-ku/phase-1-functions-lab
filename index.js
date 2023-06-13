function distanceFromHqInBlocks(location) {
  const distance = Math.abs(location - 42); 
  return distance;
};

function distanceFromHqInFeet(location) {
  const blocks = distanceFromHqInBlocks(location);
  const feetPerBlock = 264; 
  return blocks * feetPerBlock;
};

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  const feetPerBlock = 264; 
  return blocks * feetPerBlock;


}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  
  if (distance <= 400) {
    return 0;

  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;

  } else if (distance > 2000 && distance <= 2500) {
    return 25;

  }
   else {
    return 'cannot travel that far';
  }
}

