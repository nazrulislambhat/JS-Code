fetch('http://httpstat.us/404')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  });
// ^^ the problem here is that despite the console showing red & giving error that its a 404 the .then is still outputing success
