// Linear Function: f(x) = mx + b
const linearFunction = (m, b) => x => m * x + b;

// Polynomial Function: f(x) = a_n*x^n + a_(n-1)*x^(n-1) + ... + a_1*x + a_0
const polynomialFunction = (...coefficients) => x =>
    coefficients.reduce((sum, coef, index) => sum + coef * Math.pow(x, coefficients.length - 1 - index), 0);

// Power Function: f(x) = x^k
const powerFunction = k => x => Math.pow(x, k);

// Rational Function: f(x) = P(x) / Q(x), where P and Q are polynomials
const rationalFunction = (P, Q) => x => P(x) / Q(x);

// Exponential Function: f(x) = a^x
const exponentialFunction = a => x => Math.pow(a, x);

// Logarithmic Function: f(x) = log_b(x)
const logarithmicFunction = (b) => x => Math.log(x) / Math.log(b);

// Trigonometric Functions
const sinFunction = x => Math.sin(x);
const cosFunction = x => Math.cos(x);
const tanFunction = x => Math.tan(x);

// Example usage
const linear = linearFunction(2, 3); // f(x) = 2x + 3
console.log(linear(4)); // Outputs: 11

const poly = polynomialFunction(1, -2, 3); // f(x) = x^2 - 2x + 3
console.log(poly(2)); // Outputs: 3

const power = powerFunction(3); // f(x) = x^3
console.log(power(2)); // Outputs: 8

const P = polynomialFunction(1, 0, -1); // P(x) = x^2 - 1
const Q = polynomialFunction(1, 1); // Q(x) = x + 1
const rational = rationalFunction(P, Q); // f(x) = (x^2 - 1) / (x + 1)
console.log(rational(2)); // Outputs: 1

const exp = exponentialFunction(2); // f(x) = 2^x
console.log(exp(3)); // Outputs: 8

const log = logarithmicFunction(10); // f(x) = log10(x)
console.log(log(100)); // Outputs: 2

console.log(sinFunction(Math.PI / 2)); // Outputs: 1
console.log(cosFunction(Math.PI)); // Outputs: -1
console.log(tanFunction(Math.PI / 4)); // Outputs: 1