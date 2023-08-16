const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = reducer(batteryBatches);

function reducer(array) {
    return array.reduce((acc, current) => acc + current, 0);
  }