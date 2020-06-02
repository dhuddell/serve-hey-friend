const mapGoalsToApi = (r) => ({
  currentPhone: r.current_phone,
  currentText: r.current_text,
  currentBeer: r.current_beer,
  targetPhone: r.target_phone,
  targetText: r.target_text,
  targetBeer: r.target_beer,
  cadence: r.cadence,
});

const mapGoalsToDatabase = (r) => ({
  current_phone: r.currentPhone,
  current_text: r.currentText,
  current_beer: r.currentBeer,
  target_phone: r.targetPhone,
  target_text: r.targetText,
  target_beer: r.targetBeer,
  cadence: r.cadence,
});

const databaseToApiGoalMap = {
  current_phone: 'currentPhone',
  current_text: 'currentText',
  current_beer: 'currentBeer',
  target_phone: 'targetPhone',
  target_text: 'targetText',
  target_beer: 'targetBeer',
}

const apiToDatabaseGoalMap = {
  currentPhone: 'current_phone',
  currentText: 'current_text',
  currentBeer: 'current_beer',
  targetPhone: 'target_phone',
  targetText: 'target_text',
  targetBeer: 'target_beer',
}

export default {
  mapGoalsToDatabase,
  mapGoalsToApi,
  databaseToApiGoalMap,
  apiToDatabaseGoalMap,
};