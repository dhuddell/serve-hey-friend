const computeFriendScore = (currentGoals = {}, targetGoals = {}) => {
  const currentTotal = sumGoalValues(currentGoals);
  const targetTotal = sumGoalValues(targetGoals);

  console.log('currentGoals')
  console.log(currentGoals)
  console.log(currentTotal)
  console.log('targetGoals')
  console.log(targetGoals)
  console.log(targetTotal)

    // cases: 
    // current > target
    // target > current
    // targets are undefined, null, or 0
      // (cannot divide, must return 100)

    // current are undefined, null, or 0 
      // (must return 100)

  const percentOfTarget = currentTotal / targetTotal;

  return percentOfTarget < 1 ? Math.ceil(currentTotal/targetTotal) : 100;
};

const sumGoalValues = (valueSet) => {
  return Object.keys(valueSet).reduce((acc, curr) => ( acc += curr ), 100);
}

export default computeFriendScore;