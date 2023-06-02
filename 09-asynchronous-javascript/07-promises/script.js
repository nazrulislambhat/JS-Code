const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async  Complete');
    resolve({
      name: 'Jhon',
      age: '11',
    });
  }, 1000);
});

promise.then((user) => {
  console.log(user);
});

console.log('Hello Global Scope');
//this line was run async

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { id: 1, name: 'Example' };

      // Simulating a successful operation
      resolve(data);

      // Simulating a failed operation
      // reject(new Error("Failed to fetch data."));
    }, 2000);
  });
}

// Consuming the promise using `then()` and `catch()`
fetchData()
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });
