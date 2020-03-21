export default ({ currentGoals, targetGoals }) => {
  const currentTotal = currentGoals.reduce((acc = 0, curr) => {
    const safeCurrent = currentGoals[curr] || 0;
    return acc += safeCurrent;
  });

  const targetTotal = targetGoals.reduce((acc = 0, curr) => {
    const safeCurrent = targetGoals[curr] || 0;
    return acc += safeCurrent;
  })

    // cases: 
    // current > target
    // target > current
    // targets are undefined, null, or 0
      // (cannot divide, must return 100)

    // current are undefined, null, or 0 
      // (must default to 0 and then return to 100)


  console.log(Math.ceil(currentTotal/targetTotal));
  return Math.ceil(currentTotal/targetTotal);
};