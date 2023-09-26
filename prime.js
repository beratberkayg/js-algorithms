function isPrime(n) {
  if (n <= 1) return console.log(n + "is not prime");

  for (let i = 2; i < n; i++) {
    if (n % 2 == 0) {
      console.log(n + "is not prime");
    } else {
      console.log(n + "is prime");
    }
  }
}
