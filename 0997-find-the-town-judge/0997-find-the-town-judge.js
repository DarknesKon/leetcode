/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
  const p = new Array(N + 1).fill(0);
  for (let [i, j] of trust) {
    --p[i];
    ++p[j];
  }
  for (let i = 1; i < p.length; ++i) if (p[i] === N - 1) return i;
  return -1;
};