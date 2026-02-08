function calculatePenaltyDistance(rounds) {
  // Accumulator pattern:
  // We start at 0 because 0 is the neutral value for addition.
  // This variable keeps state across iterations.
  // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
  let total_fails = 0;

  // for...of loop:
  // Iterates over each value in the array.
  // Using "let" is required in strict mode (used by FCC tests).
  // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  // MDN (let): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  for (let round of rounds) {
    // Per-round calculation:
    // Each round has exactly 5 targets.
    // Misses are calculated as (5 - hits).
    let score_misses = 5 - round;

    // Accumulation step:
    // Adds the current round misses to the total.
    // If score_misses === 0, it does not change the total (neutral case).
    total_fails += score_misses;
  }

  // Final transformation:
  // Each missed target results in a 150 meter penalty loop.
  return total_fails * 150;
}
