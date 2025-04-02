// utils/checkNodeVersion.mjs

/**
 * Check if the current Node.js version is within a specified range.
 *
 * @param {Object} options
 * @param {string} options.min - Minimum version (e.g. '20.13.0')
 * @param {string} [options.max] - Maximum version (e.g. '20.13.99')
 * @param {boolean} [options.silent=false] - Suppress warnings if true
 * @param {boolean} [options.failHard=false] - Exit with code 1 if version is out of bounds
 */
export function checkNodeVersion({ min, max, silent = false, failHard = false }) {
  const current = process.versions.node;
  const currentParts = current.split('.').map(Number);
  const minParts = min.split('.').map(Number);
  const maxParts = max ? max.split('.').map(Number) : null;

  const isLowerThanMin = compareVersions(currentParts, minParts) < 0;
  const isHigherThanMax = maxParts && compareVersions(currentParts, maxParts) > 0;

  if (isLowerThanMin) {
    const message = `Node.js ${current} is older than required minimum ${min}`;
    if (failHard) {
      console.error(`ERROR: ${message}`);
      process.exit(1);
    } else if (!silent) {
      console.warn(`WARNING: ${message}`);
    }
  }

  if (isHigherThanMax) {
    const message = `Node.js ${current} is newer than supported maximum ${max}`;
    if (failHard) {
      console.error(`ERROR: ${message}`);
      process.exit(1);
    } else if (!silent) {
      console.warn(`WARNING: ${message}`);
    }
  }
}

/**
 * Compare two version arrays.
 *
 * @param {number[]} a - [major, minor, patch]
 * @param {number[]} b - [major, minor, patch]
 * @returns {number} -1 if a < b, 0 if a == b, 1 if a > b
 */
function compareVersions(a, b) {
  for (let i = 0; i < 3; i++) {
    if ((a[i] || 0) < (b[i] || 0)) return -1;
    if ((a[i] || 0) > (b[i] || 0)) return 1;
  }
  return 0;
}


// index.mjs
// import { checkNodeVersion } from './utils/checkNodeVersion.mjs';

checkNodeVersion({
  min: '20.13.0',
  max: '20.13.99',
  failHard: true,
});
