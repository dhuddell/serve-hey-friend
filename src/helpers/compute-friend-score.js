const computeFriendScore = (goals) => {
  const {
    currentText, currentPhone, currentBeer,
    targetText, targetPhone, targetBeer,
  } = goals;

  const currentTotal = currentText + currentPhone + currentBeer;
  const targetTotal = targetText + targetPhone + targetBeer;

  const percentOfTarget = Math.ceil((currentTotal / targetTotal) * 100);
  const friendScore = Math.min(percentOfTarget, 100)

  console.log(`[: ‡] beep boop computing friend score: ${friendScore}`);
  return friendScore;
};

export default computeFriendScore;