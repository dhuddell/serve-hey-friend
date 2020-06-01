const computeFriendScore = (goals) => {
  const {
    currentText = 0, currentPhone = 0, currentBeer = 0,
    targetText = 0, targetPhone = 0, targetBeer = 0,
  } = goals;

  const currentTotal = currentText + currentPhone + currentBeer;
  const targetTotal = targetText + targetPhone + targetBeer;

  const percentOfTarget = Math.ceil((currentTotal / targetTotal) * 100);
  const friendScore = Math.min(percentOfTarget, 100)

  console.log(`[: ‡] beep boop computing friend score: ${friendScore}`);
  return friendScore;
};

export default computeFriendScore;