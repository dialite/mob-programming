// TOWER OF HANOI

// QUESTION:       Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time

// NOTE:

// PSEUDOCODE
// Shift 'n-1' disks from 'A' to 'B', using 'C' (when required)
// Shift last disk from 'A' to 'C'
// Shift 'n-1' disks from 'B' to 'C', using 'A' (when required)

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  // Base case
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
// TIME COMPLEXITY
// BigO Notation:  O(2^n - 1) approximately  O(2^n) due to the increase in the output. 1 gives 1 result, 2 gives 3 result, 3 gives 7 result, etc.
towerOfHanoi(3, "A", "C", "B");
