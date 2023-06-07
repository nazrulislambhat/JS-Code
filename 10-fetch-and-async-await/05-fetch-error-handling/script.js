// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   });
// ^^ the problem here is that despite the console showing red & giving error that its a 404 the .then is still outputing success catch wont reun here

//catch running on network error
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch(() => {
//     console.log('Network Error or somethings');
//   });

// Test with response.ok
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//
fetch('http://httpstat.us/404')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('404 Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    }

    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
