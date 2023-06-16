function curSuccess(pos) {
  console.log(pos);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {};
// getCurrentPosition()
navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

// watchPosition()
