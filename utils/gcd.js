const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

module.exports = gcd;
