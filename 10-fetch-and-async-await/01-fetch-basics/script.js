//fetching a JSON file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));


