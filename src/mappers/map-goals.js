const mapGoals = (r) => ({
  currentPhone: r.current_phone,
  currentText: r.current_text,
  currentBeer: r.current_beer,
  targetPhone: r.target_phone,
  targetText: r.target_text,
  targetBeer: r.target_beer,
  cadence: r.cadence,
});

export default mapGoals;