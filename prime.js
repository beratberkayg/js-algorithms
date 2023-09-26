function isPrime(n) {
  if (n <= 1) return console.log(n + " " + "is not prime");

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return console.log(n + " " + "is not prime");
    } else {
      return console.log(n + " " + "is prime");
    }
  }
}

isPrime(13);
isPrime(24);
isPrime(1);
